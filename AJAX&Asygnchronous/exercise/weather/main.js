const search = document.querySelector("#search");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const time = document.querySelector(".time");
const temperature = document.querySelector(".temperature");
const speed = document.querySelector(".speed");
const pressureValue = document.querySelector(".pressure-value");
const humiValue = document.querySelector(".humidity-value");
const visibValue = document.querySelector(".visib-value");
const container = document.querySelector(".container");
const weather = document.querySelector('.weather');
let image ;

async function changeCityValue (capital) {


     axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=be49c5f37bd201155b321b6bd0e27513`)
    .then(
        function(resolve){
            console.log(resolve);
            city.innerHTML = resolve.data.name;
            country.innerHTML = resolve.data.sys.country;
            temperature.innerHTML =`${Math.floor(resolve.data.main.temp - 273.15)}  <sup>o</sup>C `;
            speed.innerHTML = `${resolve.data.wind.speed} m/s`;
            pressureValue.innerHTML = `${resolve.data.main.pressure}`;
            humiValue.innerHTML = `${resolve.data.main.humidity}%`;
            visibValue.innerHTML = `${resolve.data.visibility/1000}km`;

            console.log(resolve.data.weather[0].main);
            if(resolve.data.weather[0].main === 'Clear') {
                image = './clear.jpg';
            }else if(resolve.data.weather[0].main === 'Clouds'){
                image = './cloudy.jpg';
            }else if(resolve.data.weather[0].main === 'Drizzle' || resolve.data.weather[0].main === 'Rain') {
                image = './rainy.jpg';
            }

            container.style.background = `linear-gradient(to top, rgba(0,0,0,0.9) ,rgba(0,0,0,0.2) ), url(${image})  no-repeat center`;
            container.style.backgroundSize = `cover`;
            weather.style.background = `url('${image}') no-repeat center`;
            weather.style.backgroundSize = `cover`;

        }
    )
    .catch(function() {
        alert("Nhap lai thong tin");
    })

    
}

changeCityValue("Ha noi")
search.addEventListener('keydown', (e) => {

   if(e.keyCode === 13){
      let searchValue = search.value.trim();
      changeCityValue(searchValue);
   }
    
})