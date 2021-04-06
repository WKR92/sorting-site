import listOfChannels from './makChannels.js'

const mainJSContainer = document.querySelector('.js-content');
mainJSContainer.innerHTML = listOfChannels.join("");

// filtry

// input filter
const titleFilter = document.querySelector('.filter__input')
titleFilter.addEventListener('input', (event) => {
    let inp = event.target.value;
    mainJSContainer.innerHTML = listOfChannels
        .filter(elem => elem.toLowerCase().includes(inp.toLowerCase())).join("");
})

// radio filters: