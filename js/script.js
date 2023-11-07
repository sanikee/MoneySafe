import { convertStringNumber } from "./convertStringNumber.js";

const financeForm = document.querySelector('.finance__form');
const financeAmount = document.querySelector('.finance__amount');
const financeReport = document.querySelector('.finance__report');
const reportClose = document.querySelector('.report__close');

let amount = 1000;

financeAmount.textContent = amount;

financeForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const typeOperation = e.submitter.dataset.typeOperation;
    const changeAmount = Math.abs(convertStringNumber(financeForm.amount.value));

    if (typeOperation === 'income') {
        amount += changeAmount;
    }

    if (typeOperation === 'expenses') {
        amount -= changeAmount;
    }

    financeAmount.textContent = `${amount.toLocaleString()} ₽`;

})

financeReport.addEventListener('click', (e) =>{
    const report = document.querySelector('.report');
    report.classList.add('report__open');

})

reportClose.addEventListener('click', (e) =>{
    const report = document.querySelector('.report');
    report.classList.remove('report__open');

})