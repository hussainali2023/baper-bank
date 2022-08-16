document.getElementById('btn-deposit').addEventListener('click', function(){
    const inputDeposit = document.getElementById('input-deposit');
    const inputDepositString = inputDeposit.value;
    const newInputDeposit = parseFloat(inputDepositString);

    inputDeposit.value = '';

    if(isNaN(newInputDeposit)){
        alert('Please enter a valid amount')
        return;
    }

    const depositAmount = document.getElementById('deposit-amount');
    const previousDepositAmountString = depositAmount.innerText;
    const previousDepositNumber = parseFloat(previousDepositAmountString);

    const totalDeposit = previousDepositNumber + newInputDeposit;
    depositAmount.innerText = totalDeposit;

    const totalBalance = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalance.innerText;
    const previousTotalBalnce = parseFloat(previousTotalBalanceString);

    const totalNewBalance = previousTotalBalnce + newInputDeposit;
    totalBalance.innerText = totalNewBalance;
})