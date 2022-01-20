let user

const getData = (path) => {
    let userData
    return fetch(path)
        .then(response => response.json())
        .then(data => {
            userData = data
        })
        .catch(error => {
            console.log(error);
        })

}

// const sendData = () => {
//     fetch ('https://jsonplaceholder.typicode.com/posts') {
//         method: 'PUT',
//         body:
//     }


// }
user = getData('./database/db.json')
console.log(user);



