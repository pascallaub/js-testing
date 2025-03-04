function addition(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number' || arguments.length !== 2) {
            throw new Error('Invalid input');
        }
        return a + b;
    } catch (error) {
        console.log(error.message);
    }

}

function subtract(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number' || arguments.length !== 2) {
            throw new Error('Invalid input');
        }
        return a - b;
    } catch (error) {
        console.log(error.message);
    }

}

module.exports = { addition, subtract };