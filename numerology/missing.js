import { normalizeName, charToNumber } from "../helper/pythaforasTable.js";

function calculateMissing(name) {
    if (!name || typeof name !== 'string') {
        throw new Error('name phải là chuỗi không rỗng');
    }

    const normalized = normalizeName(name);
    const letters = normalized.replace(/\s+/g, '').split('');

    const numbers = new Set();
    for (let i = 0; i < letters.length; i++) {
        const char = letters[i];
        const number = charToNumber(char);
        if (number) {
            numbers.add(number);
        }
    }

    const result = [];
    for (let i = 1; i <= 9; i++) {
        if (!numbers.has(i)) result.push(i);
    }

    return result;
}

export { calculateMissing };
