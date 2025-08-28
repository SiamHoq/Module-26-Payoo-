const validPin = 1234;
const transactionData = [];

//Function to get input values

function getInputValueNumber(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue)

    return inputFieldValueNumber;

}
function getInputValue(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;

    return inputFieldValue;

}

// function to get innerText
function getInnerText(id) {
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue)

    return elementValueNumber;

}

// function to set innerText

function setInnerText(value) {
    // console.log(value);
    const availableBalanceField = document.getElementById('Available-balance');
    availableBalanceField.innerText = value;

}
// function to toggle
function handleToggle(id) {
    const forms = document.getElementsByClassName('form')
    // console.log(forms)

    for (const form of forms) {
        // console.log(form)
        form.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block'

}

//function to toggle button
function handleToggleButton(id){
        const formButton = document.getElementsByClassName('form-btn');
    // console.log(formButton);
    for (const btn of formButton) {
        // console.log(btn);
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
         btn.classList.add('border-gray-300')
    }

    document.getElementById(id).classList.remove('border-gray-300')
    document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]')

}



document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    // console.log('working.........');
    const bank = document.getElementById('bank').value
    const accountNumber = getInputValueNumber('Account-number')
    const amount = getInputValueNumber('add-amount')
    const pin = getInputValueNumber('add-pin')
    // console.log( bank,accountNumber,amount,pin)

    const availableBalance = getInnerText('Available-balance')
    // console.log(availableBalance)

    if (accountNumber.length < 11) {
        alert('please provide valid acount number');
        return;
    }

    if (pin != validPin) {
        alert('please provide valid PIN number');
        return;
    }

    const totalAvailableBalance = amount + availableBalance;

    setInnerText(totalAvailableBalance);

    const data = {
        Name : 'Add Money',
        Date : new Date().toLocaleTimeString() 
    }

    transactionData.push(data);
    console.log(transactionData);

})

//Cash out 

document.getElementById('Withdraw-money-btn').addEventListener('click', function (e) {
    e.preventDefault();

    const amount = getInputValueNumber('Withdraw-amount')

    const availableBalance = getInnerText('Available-balance')

    const totalAvailableBalance = availableBalance - amount;
    // console.log(totalAvailableBalance)

    setInnerText(totalAvailableBalance);

    const data = {
        Name : 'Cash Out',
        Date : new Date().toLocaleTimeString() 
    }
    transactionData.push(data);
    console.log(transactionData)

})

document.getElementById('transaction-button').addEventListener('click',function(){
 const transactionContainer = document.getElementById('transaction-button');

 for(const data of transactionData){
    const div = document.createElement("div");
    div.innerHTML = `
    
                    <div class=" bg-white rounded-xl p-3 flex justify-between items-center">
                    <div class="flex items-center">
                        <div class=" p-3 rounded-full bg-[#f4f5f7]">
                            <img src="./assets/wallet1.png" class="mx-auto" alt="">
                        </div>
                        <div class="ml-3">
                            <h1>${data.name}</h1>
                            <p>${data.Date}</p>
                        </div>
                    </div>

                    <i class="fa-solid fa-ellipsis rotate-90"></i>
                </div>
                
                `
                transactionContainer.appendChild(div)
    
 }

//  transactionContainer.appendChild(div)
})



//toggling feature

//Add Money
document.getElementById('add-button').addEventListener('click', function () {

    handleToggle('Add-money-parent');
    handleToggleButton('add-button')

    // document.getElementById('Add-money-parent').style.display = 'block'
    // document.getElementById('cash-out-parent').style.display = 'none'
    // document.getElementById('transfer-money-parent').style.display = 'none'
    // document.getElementById('Get-Bonus-parent').style.display = 'none'
    // document.getElementById('Pay-Bill-parent').style.display = 'none'
    // document.getElementById('Transactions-parent').style.display = 'none'

})

//Cash Out
document.getElementById('cash-out-button').addEventListener('click', function () {

    handleToggle('cash-out-parent');
    handleToggleButton('cash-out-button');


    // document.getElementById('Add-money-parent').style.display = 'none'
    // document.getElementById('cash-out-parent').style.display = 'block'
    // document.getElementById('transfer-money-parent').style.display = 'none'
    // document.getElementById('Get-Bonus-parent').style.display = 'none'
    // document.getElementById('Pay-Bill-parent').style.display = 'none'
    // document.getElementById('Transactions-parent').style.display = 'none'

})

//Tranfer Money
document.getElementById('transfer-money-button').addEventListener('click', function () {


    handleToggle('transfer-money-parent');
        handleToggleButton('transfer-money-button');

})

//Get Bonus
document.getElementById('get-bonus-button').addEventListener('click', function () {
    handleToggle('Get-Bonus-parent');
     handleToggleButton('get-bonus-button');

})

// Pay Bill
document.getElementById('pay-bill-button').addEventListener('click', function () {
    handleToggle('Pay-Bill-parent');
     handleToggleButton('pay-bill-button');

})

// Transaction 
document.getElementById('transaction-button').addEventListener('click', function () {
    handleToggle('Transactions-parent');
     handleToggleButton('transaction-button');

})
