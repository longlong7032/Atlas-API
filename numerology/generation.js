import { normalizeName, reduceNumber, charToNumber, isVowel } from "../helper/pythaforasTable.js";

function calculateGeneration(year) {
    console.log("===== Chỉ số THẾ HỆ =====");

    // Tách từng số năm
    const digits = year.toString().split('');

    let total = digits.reduce((acc, char) => acc + parseInt(char), 0);
    let result = reduceNumber(total);
    console.log("Result", result);

    return result;
}

export { calculateGeneration };