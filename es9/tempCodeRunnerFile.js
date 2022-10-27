async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayOfNames(['Luis', 'Juan', 'Pedro', 'Maria', 'Jose']);
console.log('After of the function');
