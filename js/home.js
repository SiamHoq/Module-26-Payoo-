const validPin = 1234;

//Function to get input values

function getInputValueNumber (id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue)

    return inputFieldValueNumber;

}
function getInputValue (id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;

    return inputFieldValue;

}

// function to get innerText
function getInnerText (id){
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue)

    return elementValueNumber;

}

// function to set innerText
// document.getElementById('Available-balance').innerText 

function setInnerText (value){
    console.log(value);
    const availableBalanceField = document.getElementById('Available-balance');
    availableBalanceField.innerText = value;
     
}


document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('working.........');
    const bank = document.getElementById('bank').value
    const accountNumber = getInputValueNumber('Account-number')
    const amount = getInputValueNumber('add-amount')
    const pin = getInputValueNumber('add-pin')
    // console.log( bank,accountNumber,amount,pin)

    const availableBalance = getInnerText ('Available-balance')
    // console.log(availableBalance)

    if(accountNumber.length < 11){
        alert('please provide valid acount number');
        return;
    }

    if(pin != validPin){
        alert('please provide valid PIN number');
        return;
    }

    const totalAvailableBalance = amount + availableBalance;

    setInnerText(totalAvailableBalance);

})

//Cash out 

document.getElementById('Withdraw-money-btn').addEventListener('click', function(e){
    e.preventDefault();

    const amount = getInputValueNumber('Withdraw-amount')

    const availableBalance = getInnerText('Available-balance')

    const totalAvailableBalance = availableBalance - amount;
    // console.log(totalAvailableBalance)

    setInnerText(totalAvailableBalance);

    
})



//toggling feature

document.getElementById('add-button').addEventListener('click',function(){
    document.getElementById('Add-money-parent').style.display = 'block'
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('transfer-money-parent').style.display = 'none'
    document.getElementById('Get-Bonus-parent').style.display = 'none'
    document.getElementById('Pay-Bill-parent').style.display = 'none'
    document.getElementById('Transactions-parent').style.display = 'none'

})


document.getElementById('cash-out-button').addEventListener('click',function(){
    document.getElementById('Add-money-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'block'
    document.getElementById('transfer-money-parent').style.display = 'none'
    document.getElementById('Get-Bonus-parent').style.display = 'none'
    document.getElementById('Pay-Bill-parent').style.display = 'none'
    document.getElementById('Transactions-parent').style.display = 'none'

})


document.getElementById('transfer-money-button').addEventListener('click',function(){
    document.getElementById('Add-money-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('transfer-money-parent').style.display = 'block'
    document.getElementById('Get-Bonus-parent').style.display = 'none'
    document.getElementById('Pay-Bill-parent').style.display = 'none'
    document.getElementById('Transactions-parent').style.display = 'none'

})


document.getElementById('get-bonus-button').addEventListener('click',function(){
    document.getElementById('Add-money-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('transfer-money-parent').style.display = 'none'
    document.getElementById('Get-Bonus-parent').style.display = 'block'
    document.getElementById('Pay-Bill-parent').style.display = 'none'
    document.getElementById('Transactions-parent').style.display = 'none'


})


document.getElementById('pay-bill-button').addEventListener('click',function(){
    document.getElementById('Add-money-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('transfer-money-parent').style.display = 'none'
    document.getElementById('Get-Bonus-parent').style.display = 'none'
    document.getElementById('Pay-Bill-parent').style.display = 'block'
    document.getElementById('Transactions-parent').style.display = 'none'

})


document.getElementById('transfer-button').addEventListener('click',function(){
    document.getElementById('Add-money-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('transfer-money-parent').style.display = 'none'
    document.getElementById('Get-Bonus-parent').style.display = 'none'
    document.getElementById('Pay-Bill-parent').style.display = 'none'
    document.getElementById('Transactions-parent').style.display = 'block'

})
