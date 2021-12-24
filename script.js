import apiKey from './secret.js';

let state = 'New York';
let city = 'Avon';
let baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;

const getWeather = async function () {
    try {
        const res = await fetch(`${baseUrl}${city},${state}&appid=${apiKey}`);
        const data = await res.json();
        if (!res.ok) throw new Error(`${res.statusText} (${res.status})`);

        console.log(res, data);
    } catch (err) {
        alert(err);
    }
};

getWeather();
