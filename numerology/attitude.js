import { normalizeName, reduceNumber, charToNumber, isVowel } from "../helper/pythaforasTable.js";

function calculateAttitude(birthday) {
    // Ngày sinh và tháng sinh
    const [day, month, year] = birthday.split('/').map(Number);

    let sum = day + month;

    // Rút gọn số về 1 chữ số
    const result = reduceNumber(sum);

    return result;
}

export { calculateAttitude }