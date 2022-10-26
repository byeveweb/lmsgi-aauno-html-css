export class UI {

    //Insert the node immediately after its parent node
    static insertAfter(parentNode, insertNode) {
        if (parentNode.nextSibling) {
            parentNode.parentNode.insertBefore(insertNode, parentNode.nextSibling);
        } else {
            parentNode.parentNode.appendChild(insertNode);
        }
    }


    //Insert a new node whith alert text in the inputs form
    static showAlert(msn, node, typeClass, typeInput) {
        const divAlertForm = document.createElement('small')
        divAlertForm.classList.add('text-danger', 'form-text', typeClass)
        divAlertForm.innerHTML = `${msn} - ${node} - ${typeClass}`
        typeInput === 'checkbox' ? document.querySelector(`#${node}`).parentNode.appendChild(divAlertForm) : this.insertAfter(document.querySelector(`#${node}`), divAlertForm)
            //this.insertAfter(document.querySelector(`#${node}`), divAlertForm)
    }



    //Change the color, and show the icons inputs according to validation, if is success or error
    static toogleInputValidator(node, typeClass) {

        const inputValidator = document.querySelector(`#${node}`)

        if (typeClass === 'is-error') {
            inputValidator.classList.remove('is-success')
            inputValidator.classList.add(typeClass)
            return
        }

        if (typeClass === 'is-success') {
            inputValidator.classList.remove('is-error')
            inputValidator.classList.add(typeClass)
            return
        }

    }





}