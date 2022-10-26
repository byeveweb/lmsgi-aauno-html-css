import { UI } from './modules/ui.js'
import { InputValidator } from './modules/inputValidator.js'


const ui = new UI()
const inputValidatorClass = new InputValidator()



//Variables
const singupForm = document.querySelector('#signup')
const usernameInput = document.querySelector('#username')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const passwordConfirmInput = document.querySelector('#passwordconfirm')

const button = document.querySelector('#enviar')



const userObj = {
    username: '',
    email: '',
    password: '',
    passwordconfirm: ''
}


/*  Usernames can contain characters a-z, 0-9, underscores and periods. 
       The username cannot start with a period nor end with a period. 
       It must also not have more than one period sequentially. 
       Max length is 15 chars. */

const regExpUsername = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{3,15}$/


/* Email Validation as per RFC2822 standards. */
const regExpEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

/*  at least 4 characters
    must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
    Can contain special characters */

const regExpPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,}$/

//Functions Hooks
eventListeners()

//Events Listeners
function eventListeners() {

    //Read Input Value
    usernameInput.addEventListener('blur', (e, r, o) => inputValidator(e.target, regExpUsername, userObj))
    emailInput.addEventListener('blur', (e, r, o) => inputValidator(e.target, regExpEmail, userObj))
    passwordInput.addEventListener('blur', (e, r, o) => inputValidator(e.target, regExpPassword, userObj))
    passwordConfirmInput.addEventListener('blur', (e, r, o) => inputValidator(e.target, regExpPassword, userObj))

    //Send Input Value 
    singupForm.addEventListener('submit', sendDataNewUser)
}


//Object Fill Input Function
function inputValidator(e, r, o) {

    let error = document.querySelector(`input[name="${e.name}"]`).nextSibling



    if (e.value === '') {

        error.remove()
        ui.showAlert('1. campo vacio', e.name, 'vacio')
        return

    } else {
        error.remove()
    }


    if (e.name === 'passwordconfirm') {
        if (e.value === o.password) {
            dataInsertObj(e)
            error.remove()
        } else {
            ui.showAlert('2. Passoword', e.name)
            return
        }
    }

    if (r.test(e.value)) {
        dataInsertObj(e)
        console.log('3. imprimir en verde', e.value)
        error.remove()
    } else {

        error.remove()
        ui.showAlert('4. no passs', e.name, 'nopass')
        return
    }




    const formComplete = Object.values(o).every(el => el != '')
    if (formComplete) {
        button.disabled = false
    }
}





function dataInsertObj(e) {

    userObj[e.name] = e.value
    console.log('objeto añadido', e.name, '===', e.value)

}












//Send Objet
function sendDataNewUser(e) {

    e.preventDefault()

    dataInsertObj(e)

    const { username, email, password, passwordconfirm } = userObj
    if (username === '' || email === '' || password === '' || passwordconfirm === '') {
        console.log(' hay campos vacios')
    } else {
        document.querySelector('#enviar').removeAttribute('disable')
    }
    singupForm.reset()


}