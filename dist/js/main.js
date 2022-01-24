const output = document.getElementById('output')
let user



const getData = (path) => {
    fetch(path)
        .then(response => response.json())
        .then(data => {
            sendData(data)
        })
        .catch(error => {
            console.log(error);
        })

}




const sendData = (data) => {
    fetch('https://jsonplaceholder.typicode.com/posts') {
        method: 'PUT',
            body:
    }


}
getData('./database/db.json')

