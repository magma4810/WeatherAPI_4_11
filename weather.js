(async function(){
    function addToList(list,weatherInfo){//`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`weatherInfo.icon[i]
        list.innerHTML = `<ol>${weatherInfo.weather
            .map((el,i)=>`<li>${el}</li><img src = 'https://openweathermap.org/img/wn/${weatherInfo.icon[i]}@2x.png'>`).join('')}</ol>`
    }
    async function getWeather(city,items,list,icons){
        const key = "ab4639f5754271e773ed6d3ffd73f327";
        const reject = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${key}`)
        const weather = await reject.json();
        const iconWeather = weather.weather[0].icon;
        if (weatherInfo.weather === undefined){
            weatherInfo.weather = items;
            weatherInfo.icon = icons;
            await items.push(`Погода в ${weather.name} ${weather.main.temp}˚`);
            await icons.push(iconWeather)
        }else{
            await items.push(`Погода в ${weather.name} ${weather.main.temp}˚`);
            await icons.push(iconWeather)
        }
        addToList(list,weatherInfo);
    }
    const weatherInfo = {};
    const items = [];
    const icons = [];
    const form = document.querySelector('form')
    form.addEventListener('submit',(ev) => {
        ev.preventDefault();

        const formElement = ev.target;
        const input = formElement.querySelector('input');
        const value = input.value;
        input.value = '';

        const list = formElement.querySelector('div');
        getWeather(value,items,list,icons)
    })
})();