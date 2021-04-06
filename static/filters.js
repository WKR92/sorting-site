const titleFilter = document.querySelector('.filter__input')


const inp = "";
titleFilter.addEventListener('change', (event) => {
    console.log('dwd')
    inp = event.target.value;
    console.log(inp)
})