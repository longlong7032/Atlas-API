import { normalizeName, charToNumber } from "../helper/pythaforasTable.js";

function calculateSubconsciousStrength(fullname) {
    if (!fullname || typeof fullname !== 'string') {
        throw new Error('fullname phải là chuỗi không rỗng');
    }

    const normalized = normalizeName(fullname);
    const numbers = normalized.replace(/\s+/g, '').split('');

    const appearedNumbers = new Set();

    for (const char of numbers) {
        const value = charToNumber(char);
        if (value >= 1 && value <= 9) {
            appearedNumbers.add(value);
        }
    }

    return appearedNumbers.size;
}


export { calculateSubconsciousStrength };
