const loadFood = (mealname) => {
    //let inputText = document.getElementById("search-input").value;
    let mymealname = mealname || ""; 
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mymealname}`
    fetch(url)
        .then(res => res.json())
        .then(data => showMeals(data.meals))
        .catch(error => console.log('Error: ', error));
}

loadFood();

const showMeals = (meals) => {
    // console.log('Data is: ', meals);
    let container = document.getElementById("result-container");
    container.innerHTML = '';
    meals.forEach(meal => {
        let mealCard = document.createElement('div');    
        mealCard.classList = 'card card-compact bg-base-100 shadow-xl';
        
        mealCard.innerHTML = `
            <figure>
                <img src=${meal.strMealThumb} alt="Image of ${meal.strMeal}" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${meal.strMeal}</h2>
                <p title="${meal.strInstructions}" >${meal.strInstructions.slice(0,200)}...</p>
                <div class="card-actions justify-end">
                    <button onclick="handleShowDetails(${meal.idMeal})" class="btn btn-primary">Show Details</button>
                </div>
            </div>   
        `;
    container.appendChild(mealCard);
    });
}

const handleShowDetails = (mealId) =>{
    let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => showMealDetails(data.meals[0]))
        .catch(error => console.log('Error: ', error));
}

const showMealDetails = meal => {
    // console.log('Meal Details: ', meal);

    const showDetailsContainer = document.getElementById("meal-details-cotainer");
    showDetailsContainer.innerHTML = `
      <img class="h-96 mx-auto p-5" src="${meal.strMealThumb}" alt="meal details image">
      <div>
      <p class="mt-4 text-2xl text-semibild">Name: ${meal.strMeal}</p>
      <p class="mt-4 text-2xl text-semibild">Food Category: ${meal.strCategory}</p>
      <p class="text-semibild">Description: ${meal.strInstructions}</p>
      <p class="text-semibild pt-4 hover:cursor-pointer">More Details: <span class="text-blue-600">
         <a href="${meal.strSource}" target="_blank">${meal.strSource} </a> 
      </span></p>
      <p class="text-semibild pt-4 hover:cursor-pointer"> 
      <i class="fa-brands fa-youtube"></i> Watch Video: <span class="text-blue-600">
         <a href="${meal.strYoutube}" target="_blank">${meal.strYoutube} </a> 
      </span></p>
      </div>    `
    // <button class="btn" onclick="show_meal_details.showModal()">open modal</button>
    show_meal_details.showModal();    
}

console.log('1');
console.log('2');

// const myLoader = () => {
//     return new Promise((resolve, reject)=>{
//         const value = Math.random();
//         (value <= 0.5 ? resolve(value) : reject(value))
//     })
// }
// myLoader()
// .then(promiseResponse => console.log('Promise Response is: ', promiseResponse))
// .catch(error => console.log('Error is: ', error));
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

async function loadFetchData(){
    const response  = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const jsonData = await response.json();
    console.log('Final data is: ', jsonData);
}
loadFetchData();
// console.log('3');
// console.log('4');
// console.log('5');

