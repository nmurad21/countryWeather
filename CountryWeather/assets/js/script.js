const inputCity = document.querySelector("input[type='text']");
const selectDegree = document.querySelector(".form-select");
const form = document.querySelector("form");
const getInfo = document.getElementById("info");
const buton=document.querySelector("button");
const title=document.getElementById("title");
// fetch(
//   "https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=london"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data));

async function getDegree(url){
        let promise = await fetch(url);
        let response = await promise.json();
        return response;
}

buton.addEventListener("click", change);


async function change(e) {
  e.preventDefault();
  var temprature;
  let response = await getDegree(
    "https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q="+`${inputCity.value}`
    );
    
    if (document.querySelector(".form-select").value === "Celcius") {
        temprature= response.current.temp_c;
      } else{
        temprature= response.current.temp_f;
      }
    console.log(response);
    title.innerHTML=`
    <p>City: 
          <span id="info">
          ${response.location.name}
        </span>
      </p>
        <p>Country: 
          <span id="info">
          ${response.location.country}
        </span>
      </p>
        <p>Weather Forecast: 
          <span id="info">
          ${temprature}
          </span>
        </p>
        <p>Sky Condition: 
          <span id="info">
          <img src="${response.current.condition.icon}" alt="">
          ${response.current.condition.text}
          </span>
        </p>
    `
}

