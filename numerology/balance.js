import { normalizeName, reduceNumber, charToNumber, isVowel } from "../helper/pythaforasTable.js";

function calculateBalance(name) {
    if (!name || typeof name !== 'string') {
        throw new Error('name phải là chuỗi không rỗng');
    }

    const normalized = normalizeName(name);
    const parts = normalized.split(/\s+/).filter(Boolean);

    if (!parts.length) {
        throw new Error('Không tìm được tên hợp lệ');
    }

    const initials = parts.map(part => part[0]);
    const total = initials.reduce((sum, initial) => sum + charToNumber(initial), 0);

    return reduceNumber(total, false);
}
export { calculateBalance };
