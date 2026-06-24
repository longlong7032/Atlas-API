import { normalizeName, reduceNumber, charToNumber, isVowel } from "../helper/pythaforasTable.js";

function calculatesmallPersonality(fullName) {
    // Chuẩn hóa tên
    const normalized = normalizeName(fullName);

    // Chỉ lấy tên
    const firstName = normalized.split(' ').slice(-1)[0];

    // Tính tổng số phụ âm trong tên
    const consonantSum = firstName
        .split('')
        .filter(char => charToNumber(char) !== null && !isVowel(char))
        .reduce((sum, char) => sum + charToNumber(char), 0);

    // Rút gọn số về 1 chữ số
    let result = reduceNumber(consonantSum, false);
    return result;
}

export { calculatesmallPersonality };