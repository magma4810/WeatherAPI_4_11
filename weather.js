(async function(){
    function addToList(list,items){
        list.innerHTML = `<ol>${items.map((el)=>`<li>${el}</li>`).join('')}</ol>`
    }
    async function getWeather(city,items,list){
        const key = "ab4639f5754271e773ed6d3ffd73f327";
        const reject = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${key}`)
        const weather = await reject.json();
        await items.push(weather.main.temp);
        addToList(list,items)
    }
    const items = [];
    //faddgaefw
    const form = document.querySelector('form')
    form.addEventListener('submit',(ev) => {
        ev.preventDefault();

        const formElement = ev.target;
        const input = formElement.querySelector('input');
        const value = input.value;
        input.value = '';
        
        const list = formElement.querySelector('div');
        getWeather(value,items,list)
        
    })
})();