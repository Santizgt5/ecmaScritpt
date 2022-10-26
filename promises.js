const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            resolve('Heyy!!');
        } else {
            reject('Ooopsss!');
        }
    })
}

anotherFunction().then(response => console.log(response))
                .catch(err => console.log(err))


            