let search = document.getElementById('search')
let searchbar = document.getElementById('searchbar')
let place = document.getElementById('location')
let weatherdesc = document.getElementById('weather-desc')
let icon = document.getElementsByTagName('img')
let tempvalue = document.getElementById('tempvalue')
let unit = document.getElementById('unit')
let modal = document.getElementsByClassName('modal')
console.log(modal);

let cloud = document.getElementById('cloud')
let rain = document.getElementById('rain')

const apikey = "528d8a2fd1b82953012a315d8230315d"
let container = document.getElementsByClassName('container')

let getinfo = () => {



    if (searchbar.value == "") {
        alert("Please enter the city name")
    }
    else {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchbar.value}&APPID=${apikey}`)
            .then((data) => {
                return data.json()
            })
            .then((finaldata) => {
                const { name } = finaldata;
                const { temp } = finaldata.main
                const { main } = finaldata.weather[0]

                const celcius = Math.floor(temp - 273)
                place.innerText = name;
                weatherdesc.innerText = main;
                tempvalue.innerText = celcius
                unit.style.display = "block"
                switch (main.toUpperCase()) {
                    case "CLOUDS":
                        document.body.style.backgroundImage = "url('cloudy.jpg')";
                        break;

                    case "RAIN":
                        document.body.style.backgroundImage = "url('rainbackground.jpeg')";
                        break;

                    case "THUNDERSTORM":
                        document.body.style.backgroundImage = "url('thunderstrom.webp')";
                        break;
                    case "DRIZZLE":
                        document.body.style.backgroundImage = "url('drizzle.jpeg')";
                        break;
                    case "HAZE":
                        document.body.style.backgroundImage = "url('haze.jpeg')";
                        break;
                    case "MIST":
                        document.body.style.backgroundImage = "url('mist.jpg')";
                        break;
                    case "CLEAR":
                        document.body.style.backgroundImage = "url('clear.webp')";
                        break;
                    default:
                        document.body.style.backgroundColor = "#130f40";



                }
                // celcius >= 25 ? document.body.style.backgroundColor = "red" : document.body.style.backgroundColor = "blue"
            })
            .catch((err) => {
                alert('Kindly check the spelling of location')
                console.log(err.message);


            })

    }
    searchbar.value = ""
}




