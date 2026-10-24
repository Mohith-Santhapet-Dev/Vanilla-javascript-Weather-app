const apiKey = "d4687a9514584e5193c35214262010"

const weatherForm = document.querySelector(".weather-form")
const buttonElement = document.querySelector(".submit-button")
const inputElement = document.querySelector(".city-input")
const cardElement = document.querySelector(".card")

weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = inputElement.value.trim()
    const data = await fetchWeather(city);
    console.log(data)
    displayInfo(data)
})

async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
        if (!response.ok) {
            throw new error(`City not found or api error: ${response.status} `)
        }
        const data = await response.json()
        return data
    }
    catch (error) {
        console.error("Error fetching data", error)
    }
}

function displayInfo(data) {
    const weatherData = {
        city: data.location.name,
        temperature: data.current.temp_c,
        humidity: data.current.humidity,
        description: data.current.condition.text
    }

    const cityDisplay = document.createElement("h1")
    const temperatureDisplay = document.createElement("p")
    const humidityDisplay = document.createElement("p")
    const descriptionDisplay = document.createElement("p")

    cityDisplay.textContent = weatherData.city
    temperatureDisplay.textContent = `${weatherData.temperature} degrees celsius`
    humidityDisplay.textContent = `humidity: ${weatherData.humidity}%`
    descriptionDisplay.textContent = weatherData.description

    cityDisplay.classList.add("city-name")
    temperatureDisplay.classList.add("temperature")
    humidityDisplay.classList.add("humidity")
    descriptionDisplay.classList.add("description")

    cardElement.appendChild(cityDisplay)
    cardElement.appendChild(temperatureDisplay)
    cardElement.appendChild(humidityDisplay)
    cardElement.appendChild(descriptionDisplay)
}
//fetchWeather("Vancouver").then((data) => console.log(data))