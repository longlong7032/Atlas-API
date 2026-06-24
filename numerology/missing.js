import { normalizeName, reduceNumber, charToNumber, isVowel } from "../helper/pythaforasTable.js";


function calculateMissing(name) {
    // Chuẩn hóa tên
    const normalized = normalizeName(name);

    // Lấy tập hợp các số đã xuất hiện
    const numbers = new Set();
    for (let i = 0; i < normalized.length; i++) {
        const char = normalized[i];
        const number = charToNumber(char);
        numbers.add(number);
    }

    // Tìm các số từ 1 đến 9 chưa xuất hiện
    const result = [];
    for (let i = 1; i <= 9; i++) {
        if (!numbers.has(i)) result.push(i);
    }

    return result;
}

export { calculateMissing };