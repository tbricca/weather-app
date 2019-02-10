// This will allow the page to load so we can get the location
window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

// if this exists in the browswer 
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy ='https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/f042b5305e12c72ca75fb5bc2fa0cdd5/${lat},${long}`;
            
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data =>{
                    console.log(data);
                    const { temperature, summary }= data.currently;

            });
        });
    } 
});

    
const Http = new XMLHttpRequest();
const url = 'https://api.darksky.net/forecast/f042b5305e12c72ca75fb5bc2fa0cdd5/37.8267,-122.4233'