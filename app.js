// This will allow the page to load so we can get the location
window.addEventListener('load', ()=> {
    let long;
    let lat;

// if this exists in the browswer 
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
        });
    }else{
        h1.textContent = "You need to enable your location to make this work :)"
    }
});