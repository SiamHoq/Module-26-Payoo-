
const validPin = 1234;

document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('working.........');
    // const bank = document.getElementById('bank').value
    const accountNumber = document.getElementById('Account-number1').value
    const amount = parseInt(document.getElementById('add-amount1').value)
    const pin = parseInt(document.getElementById('add-pin1').value)
    // console.log( bank,accountNumber,amount,pin)

    const availableBalance = parseInt(document.getElementById('Available-balance').innerText)
    // console.log(availableBalance)

    if(accountNumber.length < 11){
        alert('please provide valid account number');
        return;
    }

    if(pin != validPin){
        alert('please provide valid PIN number');
        return;
    }

    const totalAvailableBalance = amount - availableBalance;

    document.getElementById('Available-balance').innerText = totalAvailableBalance;

    
})
