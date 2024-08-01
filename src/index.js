/*module.exports = function toReadable (number) {*/
    const numbers = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
    ten = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
    tenfoldNumbers = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    function toReadable(number){
        if (!number) return "zero"
        let result = "", copyNumber = number, isZero = false
        let numberLength = number.toString().length
        while (numberLength){
            number = Math.floor(copyNumber / Math.pow(10, numberLength - 1))
            copyNumber = copyNumber % Math.pow(10, numberLength - 1)
            if(copyNumber.toString().length + 1 != numberLength) isZero = true
            switch (numberLength % 3) {
                case 0:
                {
                    result += numbers[number % Math.pow(10, numberLength - 1)] + " " + "hundred"
                    break;
                }
                case 1:
                {
                    result += " " + numbers[number]
                    break;
                }
                case 2:
                {
                    if(number === 1) {
                        result += ten[+copyNumber.toString()[0]]
                        numberLength--
                    }
                    else
                        result += tenfoldNumbers[number % Math.pow(10, numberLength - 1)]
                    break;
                }
                default:
                    break;
            }
            numberLength--
        } 
        return result
    }
    console.log(toReadable(100))
/*}*/
