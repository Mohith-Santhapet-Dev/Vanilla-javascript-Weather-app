const apiKey = "d4687a9514584e5193c35214262010"

async function fetchWeather(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    const data = await response.json()
    return data
}

fetchWeather("London").then((data) => console.log(data))