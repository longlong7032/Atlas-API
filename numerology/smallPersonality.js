import { normalizeName, reduceNumber, charToNumber, isVowel } from "../helper/pythaforasTable.js";

function calculateSmallPersonality(fullName) {
    // Chuẩn hóa tên
    const normalized = normalizeName(fullName);

    // Chỉ lấy tên
    const firstName = normalized.split(' ').slice(-1)[0];

    // Tính tổng số phụ âm trong tên
    const consonantSum = firstName
        .split('')
        .filter((char, index, chars) => {
            const prevChar = index > 0 ? chars[index - 1] : null;
            const nextChar = index < chars.length - 1 ? chars[index + 1] : null;
            return charToNumber(char) && !isVowel(char, prevChar, nextChar);
        })
        .reduce((sum, char) => sum + charToNumber(char), 0);

    // Rút gọn số về 1 chữ số
    let result = reduceNumber(consonantSum, false);
    return result;
}

export { calculateSmallPersonality };
