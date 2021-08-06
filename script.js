var weather = {
    apiKey: "994af978bc4e972b5d2b55a5b7d5e214",
    getWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            +city 
            +"&units=imperial&appid="
            +this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.display(data));
        //console.log(data));
    },
    display: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = 
        "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").innerText = "Temp:" + temp + "F";
        document.querySelector(".wind").innerText = "Wind Speed:" + speed + "km/h";
        document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";
    },
    search: function () {
        this.getWeather(document.querySelector(".search-city").value);
    }
};

document
    .querySelector(".search-button")
    .addEventListener("click", function () {
        weather.search();
    });

weather.getWeather("Lawrence");