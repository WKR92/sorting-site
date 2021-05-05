import listOfChannels, {channelsValues} from './makeChannelsBlocks.js'

export const mainJSContainer = document.querySelector('.js-content');
export const titleFilter = document.querySelector('.filter__input');

top.filteredChannels = channelsValues;
top.isReverseTurnedOn = false;

// input filter

export const makeInputFilter = () => {titleFilter.addEventListener('input', (event) => {   
    let inp = event.target.value;

    if(inp.length > 0){

        // set hints and new display of channels
        const hints = (channelsValues
            .filter(elem => elem.title.toLowerCase().includes(inp.toLowerCase())))

        mainJSContainer.innerHTML = listOfChannels(hints).join("");

        //set list for radio buttons to sort on
        filteredChannels = hints;

        const readyHints = hints.map(elem => `
            <option>${elem.title}</option>
        `);
        
        const inpHints = document.getElementById('inpHints');
        inpHints.innerHTML = readyHints.join("")
    } else {
        // restore default values
        mainJSContainer.innerHTML = listOfChannels(channelsValues).join("");
        inpHints.innerHTML = "";
        top.filteredChannels = channelsValues;
    }
})}

// radio filters:
const sortParent = document.querySelector('.sort__options');
const makeRadioFilters = () => {sortParent.addEventListener('input', (event) => {

    switch(event.target.id){
        case "sort-title":
            const channelsValuesSortedByTitle = [...filteredChannels].sort((a, b) => a.title.localeCompare(b.title))
            if(isReverseTurnedOn === true){
                mainJSContainer.innerHTML = listOfChannels(channelsValuesSortedByTitle).reverse().join("")}
            else {mainJSContainer.innerHTML = listOfChannels(channelsValuesSortedByTitle).join("");}
            break;
        case "sort-subscribers":
            const channelsValuesSortedBySubscribers = [...filteredChannels].sort((a, b) => 
                +a.numOfSubscribers - +b.numOfSubscribers)
            if(isReverseTurnedOn === true){
                mainJSContainer.innerHTML = listOfChannels(channelsValuesSortedBySubscribers).reverse().join("");
            } else {
                mainJSContainer.innerHTML = listOfChannels(channelsValuesSortedBySubscribers).join("");
            }
            break;
        case "sort-videos":
            const channelsValuesSortedByVideos = [...filteredChannels].sort((a, b) => 
                +a.numOfVideos - +b.numOfVideos)
            if(isReverseTurnedOn === true){
                mainJSContainer.innerHTML = listOfChannels(channelsValuesSortedByVideos).reverse().join("");
            } else {
                mainJSContainer.innerHTML = listOfChannels(channelsValuesSortedByVideos).join("");
            }
            break;
        case "sort-views":
            const channelsValuesSortedByViews = [...filteredChannels].sort((a, b) => 
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
})}

export default makeRadioFilters;

