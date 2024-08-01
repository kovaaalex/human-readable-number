module.exports = function toReadable(number) {
    const numbers = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const ten = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tenfoldNumbers = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    
    if (number === 0) return "zero";
    
    let result = "";
    let copyNumber = number;
    let numberLength = number.toString().length;

    while (numberLength) {
        let currentDigit = Math.floor(copyNumber / Math.pow(10, numberLength - 1));
        copyNumber = copyNumber % Math.pow(10, numberLength - 1);
        switch (numberLength % 3) {
            case 0: {
                result += numbers[currentDigit] + " hundred";
                if (copyNumber > 0) result += " ";
                break;
            }
            case 2: {
                if (!currentDigit) break
                if (currentDigit === 1) {
                    result += ten[copyNumber];
                    numberLength--;
                    copyNumber = 0;
                } else {
                    result += tenfoldNumbers[currentDigit - 2];
                    if (copyNumber % Math.pow(10, numberLength - 1) > 0) result += " ";
                }
                break;
            }
            case 1: {
                result += numbers[currentDigit];
                if (numberLength > 1) result += " ";
                break;
            }
        }
        numberLength--;
    }
    
    return result.trim();
}
