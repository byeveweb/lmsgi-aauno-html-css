import { UI } from './ui.js'

export class InputValidator {

    constructor(alertError, eventTargetType, eventTargetName, eventTargetValue, eventTargetBoolean) {

        this.alertError = alertError,
            this.eventTargetType = eventTargetType,
            this.eventTargetName = eventTargetName,
            this.eventTargetValue = eventTargetValue,
            this.eventTargetBoolean = eventTargetBoolean
    }

    /* 
        Workflow Validation Input
        1st -> Type to Input: if is boolean or others
        2nd -> If this input is empty -> Error
        3rd -> If this input value fulfil with the expresion regular -> Error
    
    
    */

    // Inicializamos la función
    inputValidatorFunction() {

        console.log('1. Iniciando la función.......', this.eventTargetType)
            // this.inputEmpty(this.eventTargetValue)
        this.inputType(this.eventTargetType)

    }





    // 1st -> Type to Input: if is boolean or others -> Error
    inputType(eventTargetType) {


        console.log('2. Leyendo Type.......', eventTargetType)

        switch (eventTargetType) {

            //Type: Text
            case 'checkbox':
                console.log('2.2 Tipo Checkbox')
                this.inputEmpty(this.eventTargetValue, eventTargetType)
                    //this.inputCheckboxValidator(this.eventTargetBoolean)
                break

            default:
                this.inputTypeGeneric(this.eventTargetName)
                break
        }
    }



    // 2nd -> If this input is empty -> Error
    inputEmpty(eventTargetValue) {

        console.log('3. Leyendo Type.......', this.alertError.nodeType)

        //2.2 Checkbox -> If is false validation
        if (!this.eventTargetBoolean) {

            // console.log('entra aquí....', this.alertError.nodeType)

            this.alertError.nodeType != 3 ? this.alertError.remove() : null

            UI.toogleInputValidator(this.eventTargetName, 'is-error')
            UI.showAlert('El campo no puede estar vacio', this.eventTargetName, 'error', this.eventTargetType)

            return
        }

        // if (eventTargetValue === '') {
        //     console.log('3. LEYENDO EMPTY.......', eventTargetValue, this.eventTargetBoolean)

        //     this.alertError.nodeType != 3 ? this.alertError.remove() : null

        //     UI.toogleInputValidator(this.eventTargetName, 'is-error')
        //     UI.showAlert('El campo no puede estar vacio', this.eventTargetName, 'error')

        //     return

        // }

        //this.alertError.nodeType === 3 ? this.alertError.remove() : null
        // this.inputType(this.eventTargetType)

    }









    //Si es el tipo Genérico
    inputTypeGeneric(eventTargetName) {

        console.log('4. LEYENDO TYPE GENERIC.......')

        switch (eventTargetName) {


            case 'username':
                const regExpUsernane = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{3,15}$/
                this.inputGenericValidator(regExpUsernane, eventTargetName)
                break

            case 'email':
                const regExpEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
                this.inputGenericValidator(regExpEmail, eventTargetName)
                break

            case 'password':
                const regExpPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,12}$/
                this.inputGenericValidator(regExpPassword, eventTargetName)
                break

            case 'passwordconfirm':
                this.inputPassworValidator(this.eventTargetValue, eventTargetName)
                break

            default:
                console.log('no existe el type Generico')
                break
        }


    }

    inputGenericValidator(regularExpresion, eventTargetName) {

        console.log('5. LEYENDO INPUT TEXT VALIDATOR.......')

        if (!regularExpresion.test(this.eventTargetValue)) {

            this.alertError.nodeType != 3 ? this.alertError.remove() : null

            UI.toogleInputValidator(this.eventTargetName, 'is-error')
            UI.showAlert(`El ${eventTargetName} es erróneo`, this.eventTargetName, 'error')

            return
        }


        this.alertError.nodeType != 3 ? this.alertError.remove() : null

        UI.toogleInputValidator(this.eventTargetName, 'is-success')

        return

    }

    inputPassworValidator(eventTargetValue, eventTargetName) {

        console.log('5. LEYENDO INPUT PASSWORD.......')

        if (eventTargetName === 'passwordconfirm') {

            console.log('evaluamos con objUser: password', eventTargetValue)

            return
        }

    }

    inputCheckboxValidator(eventTargetBoolean) {
        console.log('evaluamos checkbox un cambiamos el objUser', eventTargetBoolean)
        if (eventTargetBoolean) {
            alert('checkbox esta seleccionado');
        }
    }

}