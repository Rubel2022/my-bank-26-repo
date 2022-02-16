document.getElementById('deposite-btn ').addEventListener('click',function(){
    //get the amount deposited
    const depositeInput = document.getElementById('deposite-input');
    const newDepositAmount = depositeInput.value;
    
    const depositeTotal =document.getElementById('deposite-total');
    const previousDepositeAmount = depositeTotal.innerText;
    const newDepositeTotal =parseFloat(previousDepositeAmount) + parseFloat( newDepositAmount);
    depositeTotal.innerText = newDepositeTotal;
    //update account balance
    const balanceTotal =document.getElementById('balance-total');
  const balanceTotalText= balanceTotal. innerText;
  const previousBalanceTotal =parseFloat(balanceTotalText);
  const newBalanceTotal = previousBalanceTotal + parseFloat(newDepositAmount) ;
  balanceTotal.innerText = newBalanceTotal;

   
    // clear the deposite input field
    depositeInput.value ="";

    });
    // withdraw
    document.getElementById('withdraw-btn').addEventListener('click',function(){
        const withdrawInput = document.getElementById('withdraw-input');
        const withdrawAmountText= withdrawInput.value;
        const newWithDrawAmountTotal= parseFloat(withdrawAmountText);
        console.log(newWithDrawAmountTotal);


        // set withdraw total
        const withdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawText= withdrawTotal.innerText;
        const previousWithdrawAmount =parseFloat(previousWithdrawText);
        const newWidthdrawTotal = previousWithdrawAmount + newWithDrawAmountTotal;
        withdrawTotal.innerText=newWidthdrawTotal;

        //update account balance
        const balanceTotal =document.getElementById('balance-total');
  const balanceTotalText= balanceTotal.innerText;
  const previousBalanceTotal =parseFloat(balanceTotalText);
  const newBalanceTotal = previousBalanceTotal - newWithDrawAmountTotal ;
  balanceTotal.innerText = newBalanceTotal;

  withdrawInput.value =""

    })
