import { InputValidator } from './modules/inputValidator.js'
import { User } from './modules/objUser.js'

//Variables
const singupForm = document.querySelector('#signup')

const usernameInput = document.querySelector('#username')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const passwordConfirmInput = document.querySelector('#passwordconfirm')
const checkPolicityInput = document.querySelector('#checkpolicity')
console.log(checkPolicityInput.checked, '--------')

const button = document.querySelector('#enviar')




const user = new User()

user.setUserObject()


//Functions Hooks
eventListeners()

//Events Listeners
function eventListeners() {

    //Read Input Value
    usernameInput.addEventListener('blur', (e, o) => inputValidatorEvent(e.target, user))
    emailInput.addEventListener('blur', (e, o) => inputValidatorEvent(e.target, user))
    passwordInput.addEventListener('blur', (e, o) => inputValidatorEvent(e.target, user))
    passwordConfirmInput.addEventListener('blur', (e, o) => inputValidatorEvent(e.target, user))
    checkPolicityInput.addEventListener('change', (e, o) => inputValidatorEvent(e.target, user))

    //Send Input Value 
    // singupForm.addEventListener('submit', sendDataNewUser)
}


//Object Fill Input Function
function inputValidatorEvent(e, o) {



    /*
         LÓGICA: 
             - Validar el input si está vacio o no
             - Validar la información que entrega según usuabilidad
             - Llenar el objeto que será entregado
             ---
             El botón no se habilitará si el objeto está correctamente rellenado.

         UI: 
             - Pintar alerta de error en caso de que no pase la validación
             - Pintar el campo según validación
         
    */

    //Leemos el div error
    let alertError
    console.log('holaaaaaaaaaaaaaaaaaaa', document.querySelector(`label.checkbox`).nextElementSibling)
    e.type === 'checkbox' ? alertError = document.querySelector(`label.checkbox`).nextElementSibling : alertError = document.querySelector(`input[name=${e.name}`).nextSibling


    console.log('resultado de alert', alertError.nodeType)

    //1º Instanciamos la clase inputValidator
    const inputValidatorClass = new InputValidator(alertError, e.type, e.name, e.value, e.checked)




    //2º Llamamos a la función de Validator
    inputValidatorClass.inputValidatorFunction(e.name)










}