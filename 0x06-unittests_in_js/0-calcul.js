function calculateNumber(a, b){
    if (typeof a != 'number' || typeof b != 'number'){
        return null
    }
    return Math.round(a) + Math.round(b)
}

module.exports = calculateNumber
