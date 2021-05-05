import createClearBtn from './buttons.js'

const months = ['sty.', 'lut.', 'mar.', 'kwi.', 'maj.', 'cze.', 'lip.', 'sie.', 'wrz.', 'paź.', 'lis.', 'gru.']

let amountOfVisits = localStorage.getItem('amountOfVisits');
let lastVisitDate = localStorage.getItem('lastVisitDate');
let ongoingVisit = localStorage.getItem('ongoingVisit');

// put amountOfVisits and ongoingVisitDate into localStorage onload;
export const setUserEntryInfoOnload = () => {
window.onload = () => {
    createClearBtn();

    if (amountOfVisits === null) {
        amountOfVisits = 0;
    }
    amountOfVisits++;
    ongoingVisit = JSON.stringify(`${new Date().getDate()} ${months[new Date().getMonth()]} ${new Date().getFullYear()}.`)
    localStorage.setItem("amountOfVisits", amountOfVisits);
    localStorage.setItem("ongoingVisit", ongoingVisit);
}}

// put lastVisitDate into localStorage onbeforeunload
const setUserEntryInfoOnBeforeUnLoad = () => {
window.onbeforeunload = () => {
    lastVisitDate = JSON.stringify(`${new Date().getDate()} ${months[new Date().getMonth()]} ${new Date().getFullYear()}.`)
    localStorage.setItem("lastVisitDate", lastVisitDate);
}}
export default setUserEntryInfoOnBeforeUnLoad;

console.log('numOfVisits: ' + JSON.parse(localStorage.getItem('amountOfVisits')))
console.log('lastVisitDate: ' + JSON.parse(localStorage.getItem('lastVisitDate')))
console.log('ongoingVisitDate: ' + JSON.parse(localStorage.getItem('ongoingVisit')))