//log in button functionality
// console.log('log in button clicked')
// document.getElementById('login-Btn').addEventListener('click',function(){
//     console.log('log in button clicked')
// })

document.getElementById('loginBtn').addEventListener('click',function(e){
    e.preventDefault();
   
    const mobileNumber = 12345678910;
    const pinNumber = 1234

    const  mobileNumberValue = document.getElementById('mobile-number').value
    const mobileNumValueConverted = parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById('pin-number').value
    const pinNumValueConverted = parseInt(pinNumberValue)

    console.log(mobileNumValueConverted);
    console.log(pinNumValueConverted);

    if(mobileNumValueConverted === mobileNumber && pinNumValueConverted === pinNumber){
        // console.log('all value matched')
        window.location.href = "./main.html"
    }
    else{
        alert('invalid')
    }
})