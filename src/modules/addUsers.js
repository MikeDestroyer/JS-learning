export const addUsers = () => {
    const form = document.querySelector('#add-user')
    const nameInput = form.querySelector('#form-name')
    const emailInput = form.querySelector('#form-email')
    const childrenInput = form.querySelector('#form-children')

    console.log(form)

    form.addEventListener('submit', (e) =>{
        e.preventDefault()

        console.log(nameInput)
        console.log(emailInput)
        console.log(childrenInput)
    })
}