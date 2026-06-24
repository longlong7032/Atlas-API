import { normalizeName, reduceNumber, charToNumber, isVowel } from "../helper/pythaforasTable.js";

function calculatePersonalDay(personalMonthResult) {
    console.log("===== Chỉ Số NGÀY CÁ NHÂN =====");

    let dayCurrent = new Date().getDate();

    let sum = personalMonthResult + reduceNumber(dayCurrent, false);

    let result = reduceNumber(sum, true);

    return result;
}

export { calculatePersonalDay }