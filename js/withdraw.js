document.getElementById('btn-withdraw').addEventListener('click', function(){
    const inputWithdraw = document.getElementById('input-withdraw');
    const inputWithdrawString = inputWithdraw.value;
    const newInputWithdraw = parseFloat(inputWithdrawString);

    inputWithdraw.value = '';

    const totalBalance = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalance.innerText;
    const previousTotalBalnce = parseFloat(previousTotalBalanceString);

    if(newInputWithdraw > previousTotalBalnce){
        alert('Sorry Your withdraw amount is higher than your Balance')
        return;
    }
    else if(isNaN(newInputWithdraw)){
        alert('Please Enter a Valid Amount')
        return;
    }

    const withdrawAmount = document.getElementById('withdraw-amount');
    const previousWithdrawAmountString = withdrawAmount.innerText;
    const previousWithdrawNumber = parseFloat(previousWithdrawAmountString);

    const totalWithdraw = previousWithdrawNumber + newInputWithdraw;
    withdrawAmount.innerText = totalWithdraw;

   

    const totalNewBalance = previousTotalBalnce - newInputWithdraw;
    totalBalance.innerText = totalNewBalance;

   


});