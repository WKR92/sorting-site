// sorting and reversing:

const reverseBtn = document.getElementById('reverseBtn');
const orderInfo = document.createElement("p");
orderInfo.innerHTML = `You are sorting in <span>${isReverseTurnedOn ? 'descending' : 'ascending'}</span> order`;
orderInfo.classList.add('orderInfo')
const sortElement = document.querySelector('.sort')
sortElement.appendChild(orderInfo)

const createReverseBtn = () => {
reverseBtn.addEventListener('click', () => {
    top.isReverseTurnedOn = !top.isReverseTurnedOn;
    orderInfo.innerHTML = `You are sorting in <span>${isReverseTurnedOn ? 'descending' : 'ascending'}</span> order`;
    const choiceElements = document.querySelectorAll('.choice');
    const checkedLi = Object.values(choiceElements).filter(elem => elem.checked === true);
    if(checkedLi[0]){
        checkedLi[0].checked = false;
        checkedLi[0].click();
    }
})}
export default createReverseBtn;