import listOfChannels, {channelsValues} from './makeChannelsBlocks.js'

const mainJSContainer = document.querySelector('.js-content');
mainJSContainer.innerHTML = listOfChannels(channelsValues).join("");
let isReverseTurnedOn = false

// filters:

// input filter
const titleFilter = document.querySelector('.filter__input')
titleFilter.addEventListener('input', (event) => {
    let inp = event.target.value;

    if(inp.length > 0){
        const hints = (channelsValues
            .filter(elem => elem.title.toLowerCase().includes(inp.toLowerCase())))
        mainJSContainer.innerHTML = listOfChannels(hints).join("");
        const readyHints = hints.map(elem => `
            <option>${elem.title}</option>
        `);
        const inpHints = document.getElementById('inpHints');
        inpHints.innerHTML = readyHints.join("")
    } else {
        mainJSContainer.innerHTML = listOfChannels(channelsValues).join("");
        inpHints.innerHTML = "";
    }
})

// radio filters:
const sortParent = document.querySelector('.sort__options');
sortParent.addEventListener('input', (event) => {

    switch(event.target.id){
        case "sort-title":
            const channelsValuesSortedByTitle = [...channelsValues].sort((a, b) => a.title.localeCompare(b.title))
            if(isReverseTurnedOn === true){
                mainJSContainer.innerHTML = listOfChannels(channelsValuesSortedByTitle).reverse().join("")}
            else {mainJSContainer.innerHTML = listOfChannels(channelsValuesSortedByTitle).join("");}
            break;
        case "sort-subscribers":
            const channelsValuesSortedBySubscribers = [...channelsValues].sort((a, b) => 
                +a.numOfSubscribers - +b.numOfSubscribers)
            if(isReverseTurnedOn === true){
                mainJSContainer.innerHTML = listOfChannels(channelsValuesSortedBySubscribers).reverse().join("");
            } else {
                mainJSContainer.innerHTML = listOfChannels(channelsValuesSortedBySubscribers).join("");
            }
            break;
        case "sort-videos":
            const channelsValuesSortedByVideos = [...channelsValues].sort((a, b) => 
                +a.numOfVideos - +b.numOfVideos)
            if(isReverseTurnedOn === true){
                mainJSContainer.innerHTML = listOfChannels(channelsValuesSortedByVideos).reverse().join("");
            } else {
                mainJSContainer.innerHTML = listOfChannels(channelsValuesSortedByVideos).join("");
            }
            break;
        case "sort-views":
            const channelsValuesSortedByViews = [...channelsValues].sort((a, b) => 
                +a.numOfViews - +b.numOfViews)
            if(isReverseTurnedOn === true){
                mainJSContainer.innerHTML = listOfChannels(channelsValuesSortedByViews).reverse().join("");
            } else {
                mainJSContainer.innerHTML = listOfChannels(channelsValuesSortedByViews).join("");
            }
            break;
        default:
            mainJSContainer.innerHTML = listOfChannels(channelsValues).join("");
    }
})



// buttons:

const clearBtn = document.getElementById('clearBtn');
const reverseBtn = document.getElementById('reverseBtn');
const darkModeBtn = document.getElementById('darkModeBtn')
const lightModeBtn = document.getElementById('lightModeBtn')

clearBtn.addEventListener('click', () => {
    mainJSContainer.innerHTML = listOfChannels(channelsValues).join("");
    titleFilter.value = ""
    const choiceElements = document.querySelectorAll('.choice')
    choiceElements.forEach(elem => elem.checked = false)  
})

darkModeBtn.addEventListener('click', () => {
    const html = document.querySelector('html');

        html.style["background"] = "black";
        html.style['filter'] = `invert(1)`;
        darkModeBtn.style["display"] = "none";
        lightModeBtn.style["display"] = "block";
})

lightModeBtn.addEventListener('click', () => {
    const html = document.querySelector('html');

        html.style["background"] = "white";
        html.style['filter'] = `invert(0)`;
        lightModeBtn.style["display"] = "none";
        darkModeBtn.style["display"] = "block";
})

// order info:
const orderInfo = document.createElement("p")
orderInfo.innerHTML = `You are sorting in <span>${isReverseTurnedOn ? 'descending' : 'ascending'}</span> order`;
orderInfo.classList.add('orderInfo')
const sortElement = document.querySelector('.sort')
sortElement.appendChild(orderInfo)

reverseBtn.addEventListener('click', () => {
    isReverseTurnedOn = !isReverseTurnedOn;
    orderInfo.innerHTML = `You are sorting in <span>${isReverseTurnedOn ? 'descending' : 'ascending'}</span> order`
    const choiceElements = document.querySelectorAll('.choice')
    const checkedLi = Object.values(choiceElements).filter(elem => elem.checked === true)
    if(checkedLi[0]){
        checkedLi[0].checked = false;
        checkedLi[0].click();
    }
})


// saving info about users entries in localStorage:

const months = ['sty.', 'lut.', 'mar.', 'kwi.', 'maj.', 'cze.', 'lip.', 'sie.', 'wrz.', 'pax.', 'lis.', 'gru.']

let amountOfVisits = localStorage.getItem('amountOfVisits');
let lastVisitDate = localStorage.getItem('lastVisitDate');
let ongoingVisit = localStorage.getItem('ongoingVisit');

window.onload = () => {
    if (amountOfVisits === null) {
        amountOfVisits = 0;
    }
    amountOfVisits++;
    ongoingVisit = JSON.stringify(`${new Date().getDate()} ${months[new Date().getMonth()]} ${new Date().getFullYear()}.`)
    localStorage.setItem("amountOfVisits", amountOfVisits);
    localStorage.setItem("ongoingVisit", ongoingVisit);
}

window.onbeforeunload = () => {
    lastVisitDate = JSON.stringify(`${new Date().getDate()} ${months[new Date().getMonth()]} ${new Date().getFullYear()}.`)
    localStorage.setItem("lastVisitDate", lastVisitDate);
}

console.log('numOfVisits: ' + JSON.parse(localStorage.getItem('amountOfVisits')))
console.log('lastVisitDate: ' +JSON.parse(localStorage.getItem('lastVisitDate')))
console.log('ongoingVisitDate: ' +JSON.parse(localStorage.getItem('ongoingVisit')))