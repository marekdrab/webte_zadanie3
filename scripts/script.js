function optionNo() {
    document.getElementById('hiddenUntilRadio1').style.display = 'none';
    document.getElementById('hiddenUntilRadio2').style.display = 'block';
    document.getElementById('hiddenUntilRadio1').value = 'nie'
}

function optionYes(){
    document.getElementById('hiddenUntilRadio1').style.display = 'block';
    document.getElementById('hiddenUntilRadio2').style.display = 'none';
    document.getElementById('hiddenUntilRadio2').value = 'ano'

}

function otherCheck(){
    let x = document.getElementById('other');
    if (x.checked=== true){
        document.getElementById('otherTextWrapper').style.display = 'block';
    }
    else{
        document.getElementById('otherTextWrapper').style.display = 'none';
    }
}

function ageCalculator(){
    const date = new Date(document.getElementById('birthDate').value)
    const difference = Date.now() - date.getTime()
    let ageNew = new Date(difference)
    const age = (Math.abs(ageNew.getUTCFullYear()-1970))
    document.getElementById('age').value=age
}

function ageValidator(){
    const age = document.getElementById('age').value
    let ageError = document.getElementById('ageError')
    const date = new Date(document.getElementById('birthDate').value)
    const difference = Date.now() - date.getTime()
    let ageNew = new Date(difference)
    const ageCalculated = (Math.abs(ageNew.getUTCFullYear()-1970))

    if(ageCalculated !== age){
        ageError.textContent='Zadali ste nesprávny vek'
        document.getElementById('age').style.border = '2px solid red'
    }
    else{
        ageError.textContent=''
        document.getElementById('age').style.border = 'none'
    }
}

function validateEmail(){
    const emailREGEX = /^([\w-]{3,}[\.)+@([\w-]+\.)+[\w-]{2,4}$/
    const email = document.getElementById('email').value

    if (emailREGEX.test(email) === false){
        document.getElementById('emailError').textContent='Zadali ste nesprávny email'
        document.getElementById('email').style.border = '2px solid red'
    }
    else{
        document.getElementById('emailError').textContent=''
        document.getElementById('email').style.border = 'none'
    }
}

function sendMail(){
    window.open('mailto:feistu04@gmail.com?subject=Marek Drab&body='
        + 'meno= ' + document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value
        + ' datum narodenia= '+document.getElementById('birthDate').value + ' '
        + 'vek= ' + document.getElementById('age').value  + ' '
        + 'email= ' + document.getElementById('email').value);
}