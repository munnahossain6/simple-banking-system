document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('add-despoitMoney');
    const newDepositField = depositField.value;
    //console.log(newDepositField);
    const newDepositAmount = parseFloat(newDepositField);
    //console.log(newDepositAmpunt);
    depositField.value = '';

    const newDepositAmountMain = document.getElementById('deposit-total');
    //console.log(newDepositAmountMain);
    const newDepositAmountMainInnnerText = newDepositAmountMain.innerText;
    //console.log(newDepositAmountMainInnnerText);
    const newDepositAmountMainString = parseFloat(newDepositAmountMainInnnerText);

    const newDepositTotal = newDepositAmountMainString + newDepositAmount;
    newDepositAmountMain.innerText = newDepositTotal;


    const totalAmount = document.getElementById('total-balance');
    const totalAmountInnerText = totalAmount.innerText;
    const totalAmountInnerTextString = parseFloat(totalAmountInnerText);
    const totalAmountMain = newDepositAmount + totalAmountInnerTextString;
    totalAmount.innerText = totalAmountMain;

})

document.getElementById('submit-button').addEventListener('click', function () {

    const inputIntoAmount = document.getElementById('input-amount');
    const inputIntoAmountValue = inputIntoAmount.value;
    const inputIntoAmountValueString = parseFloat(inputIntoAmountValue);

    inputIntoAmount.value = '';

    const totalWithdraw = document.getElementById('withdraw-show');
    const totalWithdrawInnner = totalWithdraw.innerText;
    const totalWithdrawString = parseFloat(totalWithdrawInnner);

    const totalWithdrawAdded = inputIntoAmountValueString + totalWithdrawString;
    totalWithdraw.innerText = totalWithdrawAdded;

    const totalAmount2 = document.getElementById('total-balance');
    const totalAmountInnerText2 = totalAmount2.innerText;
    const totalAmountInnerTextString2 = parseFloat(totalAmountInnerText2);



    const newTotalAmount = totalAmountInnerTextString2 - inputIntoAmountValueString;
    totalAmount2.innerText = newTotalAmount;


})