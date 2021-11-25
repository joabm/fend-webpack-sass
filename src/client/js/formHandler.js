function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message + ' '
    })
    getWeatherData(apiUrl)
    .then(function(data) {
        let temp = data.main.temp
        document.getElementById('results').append(`${Math.round(Number(temp))} degrees`)
    })
}

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=94102';
const apiKey = '&appid=fb0b977db06d43f54cf18ed919320565';
let apiUrl = baseURL + apiKey;

/* Function to GET Web API Data*/
const getWeatherData = async (apiUrl) =>{
    const response = await fetch(apiUrl);
    try {
        const data = await response.json();
        // console.log(data);
        return data;
    }   catch (error) {
        console.log('error', error);
    }
}

export { handleSubmit }
