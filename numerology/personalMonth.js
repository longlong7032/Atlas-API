import { normalizeName, reduceNumber, charToNumber, isVowel } from "../helper/pythaforasTable.js";

function calculatePersonalMonth(personalYearResult) {
    let monthCurrent = new Date().getMonth() + 1;

    let sum = personalYearResult + reduceNumber(monthCurrent, false);

    let result = reduceNumber(sum, true);

    return result;
}

export { calculatePersonalMonth }