// 78330ecef8967a2eced08723fc307ce7
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const weatherApi={
	key:"78330ecef8967a2eced08723fc307ce7",
	baseUrl:"https://api.openweathermap.org/data/2.5/weather"
};

let inp=document.querySelector('#input-box');
document.addEventListener('keypress',(e)=>{
	if(e.keyCode==13)
	{
		console.log(inp.value);
		getWeatherReport(inp.value);

	}
});


// let body=document.querySelector("body");
// body.addEventListener('load',()=>{
// 	console.log("body loaded");
// })
window.onload=function() {
	getWeatherReport('delhi');
}

function getWeatherReport(city)
{
	fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
	.then(weather=>weather.json())
	.then(showWeatherReport);
}
function showWeatherReport(weather)
{
	console.log(weather);
	let city=document.getElementById('city');
	city.innerText=`${weather.name}, ${weather.sys.country}`;
	let temp=document.getElementById('temp');
	temp.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;
	let minMaxTemp=document.getElementById('min-max');
	minMaxTemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C(max)`;
	
	let weatherType=document.getElementById('weather');
	weatherType.innerText=`${weather.weather[0].main}`;

	let date=document.getElementById('date');
	let todayDate=new Date();
	date.innerText=dateManage(todayDate);


	if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1589838979285-afeef24abe47?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VubnklMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdWR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";
        
    } else if(weatherType.textContent == 'Mist') {

        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1510596713412-56030de252c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('https://media.istockphoto.com/photos/transparent-umbrella-under-rain-against-water-drops-splash-background-picture-id1257951336?k=20&m=1257951336&s=612x612&w=0&h=KMMSYxYzjtqg7NAvNTO8ahMz84J7QW0FjvMSZ12Bq6I=')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1431036101494-66a36de47def?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd2ZhbGx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1597905040495-0aa996018b92?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHRodW5kZXJzdG9ybXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')";
        
    } 
    inp.value="";

}
// Date manage;

function dateManage(dateArg)
{
	   	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    	let year=dateArg.getFullYear();
    	let month=months[dateArg.getMonth()];
    	let date=dateArg.getDate();
    	let day=days[dateArg.getDay()];
    	return `${date} ${month} (${day}), ${year}`;
}

