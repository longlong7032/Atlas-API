

import { normalizeName, reduceNumber, charToNumber } from "../helper/pythaforasTable.js";


/**
 * Calculates the rational thinking number of a person based on their name and day of birth.
 *
 * @param {string} fullname The full name of the person.
 * @param {string} day The day of birth of the person in the format DD/MM/YYYY.
 * @returns {number} The rational thinking number of the person.
 */
function calculateRationalThinking(fullname, dayBirthday) {
    if (!fullname || typeof fullname !== 'string') {
        throw new Error('fullname phải là chuỗi không rỗng');
    }

    const normalized = normalizeName(fullname);
    const words = normalized.split(/\s+/).filter(Boolean);
    const firstName = words.at(-1) || '';

    if (!firstName) {
        throw new Error('Không tìm được tên chính hợp lệ');
    }

    const nameTotal = firstName
        .split('')
        .reduce((sum, char) => sum + charToNumber(char), 0);
    const nameReduce = reduceNumber(nameTotal, false);
    const dayReduce = reduceNumber(Number(dayBirthday), false);

    return reduceNumber(nameReduce + dayReduce, false);
}
export { calculateRationalThinking };
