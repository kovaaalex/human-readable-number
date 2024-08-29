module.exports = function toReadable(number) {
    const numbers = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    const tenNumbers = ["ten", "eleven", "twelve", "thirteen", "fourteen" , "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    const tenFoldNumbers = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

    let result = "", copyNumber = number, numberLength = number.toString().length

    if(!number) return "zero"
    while(numberLength){
        let currentDigit = Math.floor(copyNumber / Math.pow(10, numberLength - 1))
        copyNumber = copyNumber % Math.pow(10, numberLength - 1)
        switch (numberLength % 3){
            case 0: {
                result += numbers[currentDigit] + " hundred"
                if (copyNumber) result += " "
                break
            }
            case 1: {
                result += numbers[currentDigit]
                if (copyNumber) result += " "
                break
            }
            case 2:
            {
                if(!currentDigit) break
                if(currentDigit === 1){
                    result += tenNumbers[copyNumber]
                    copyNumber = 0
                    numberLength--
                }
                else {
                    result += tenFoldNumbers[currentDigit - 2]
                    if (copyNumber % Math.pow(10, numberLength - 1) > 0) result += " "
                }
                break
            }
        }
        numberLength--
    }
    return result.trim()
}