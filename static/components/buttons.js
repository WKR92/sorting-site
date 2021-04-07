import {titleFilter, mainJSContainer} from './filters.js'
import listOfChannels, {channelsValues} from './makeChannelsBlocks.js'

const clearBtn = document.getElementById('clearBtn');
const darkModeBtn = document.getElementById('darkModeBtn')
const lightModeBtn = document.getElementById('lightModeBtn')

// clearBtn
const createClearBtn = () => {
clearBtn.addEventListener('click', () => {
    mainJSContainer.innerHTML = listOfChannels(channelsValues).join("");
    top.filteredChannels = channelsValues;
    titleFilter.value = ""
    const choiceElements = document.querySelectorAll('.choice')
    choiceElements.forEach(elem => elem.checked = false)  
})}
export default createClearBtn;


// darkModeBtn
export const createDarkModeBtn = () => {
darkModeBtn.addEventListener('click', () => {
    const html = document.querySelector('html');

        html.style["background"] = "black";
        html.style['filter'] = `invert(1)`;
        darkModeBtn.style["display"] = "none";
        lightModeBtn.style["display"] = "block";
})}

// lightModeBtn
export const createLightModeBtn = () => {
lightModeBtn.addEventListener('click', () => {
    const html = document.querySelector('html');

        html.style["background"] = "white";
        html.style['filter'] = `invert(0)`;
        lightModeBtn.style["display"] = "none";
        darkModeBtn.style["display"] = "block";
})}