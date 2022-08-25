var search = document.querySelector('.search')
var content = document.querySelector('.content')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var date = document.querySelector('.date-value')
var tempValue = document.querySelector('.temp-value')
var desc = document.querySelector('.desc span')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var humidity = document.querySelector('.humidity span')


async function changeWeatherUI(){
    let searchValue = search.value.trim()
    var API = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=85eb0d610c67dbac62f80ecbd7bcd340`  
    let data = await fetch(API).then(res=> res.json()) 
    console.log(data);

    if(data.cod == 200){
        city.innerHTML = data.name
        country.innerHTML = data.sys.country
        tempValue.innerHTML = Math.round(data.main.temp - 273.15)
        desc.innerHTML = data.weather[0] ? data.weather[0].main : ''
        date.innerHTML = new Date().toLocaleString('vi')
        visibility.innerHTML = data.visibility + 'm'
        wind.innerHTML = data.wind.speed + 'm/s'
        humidity.innerHTML = data.main.humidity + '%'
    }else{
        city.innerHTML="Can not find location"
        country.innerHTML = "retry"
    }
    
}
search.addEventListener('keypress', function(e){
    if(e.code == 'Enter'){
        changeWeatherUI()
    }
})