(async function(){
    function addToList(list,items){
        list.innerHTML = `<ol>${items.map((el)=>`<li>${el}</li>`).join('')}</ol>`
    }
    const items = [];
    const form = document.querySelector('form')
    form.addEventListener('submit',(ev) => {
        ev.preventDefault();

        const formElement = ev.target;
        const input = formElement.querySelector('input');
        const value = input.value;
        input.value = '';
        items.push(value)
        const list = formElement.querySelector('div');
        console.log(list)
        addToList(list,items)
    })
})();