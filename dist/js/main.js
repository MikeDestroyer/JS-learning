'use strict'

const getData = (path) => {
    fetch(path)
        .then(response => response.json())
        .then(data => {
            sendData(data, 'https://jsonplaceholder.typicode.com/posts')
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })

}

const sendData = (data, url) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            age: data.age,
            role: data.role,
            user: data.user
        })
    })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)

        })
}


getData('./database/db.json')

