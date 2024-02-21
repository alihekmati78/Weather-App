

const container = document.querySelector(".container");
const searchBtn = document.querySelector(".search button");
const weather = document.querySelector(".weather")
const weatherDetails = document.querySelector(".details")
const error = document.querySelector(".error")

searchBtn.addEventListener('click', () => {

    const APIKey = "ae73cbb0816600540e804548aa463c33";

    const city = document.querySelector(".search input").value;
    if (city == ""){
        return
    }
        
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found!");
            }
            return response.json();
            })
            .then(json => {

                const image = document.querySelector(".weather img");
                const temp = document.querySelector(".weather .temp");
                const cityName = document.querySelector(".weather .city-name");
                const humidity = document.querySelector(".details .humidity span");
                const wind = document.querySelector(".details .wind span");

        switch(json.weather[0].main) {
            case 'Clear':
                image.src= "images/clear.png";
                break;
            
            case 'Rain':
                image.src= "images/rain.png";
                break;
    
            case 'Snow':
                image.src= "images/snow.png";
                break;
    
            case 'Clouds':
                image.src= "images/clouds.png";
                break;
        
            case 'Haze':
                image.src= "images/mist.png";
                break;
    
            default:
                image.src = '';
        }

        temp.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        cityName.innerHTML = json.name;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weather.style.display = '';
        weatherDetails.style.display = '';
        error.style.display = "none"
        container.style.height = 'auto'
    })
})
        