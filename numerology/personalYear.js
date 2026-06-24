import { normalizeName, reduceNumber, charToNumber, isVowel } from "../helper/pythaforasTable.js";

function calculatePersonalYear(birthday) {
    console.log("===== Chỉ số NĂM CÁ NHÂN =====");

    const [day, month] = birthday.split('/').map(Number);

    let yearCurrent = new Date().getFullYear();

    let sum = reduceNumber(yearCurrent, false) + reduceNumber(month, false) + reduceNumber(day, false);

    let result = reduceNumber(sum, false);

    return result;
}

export { calculatePersonalYear }
