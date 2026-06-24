

import { normalizeName, reduceNumber, charToNumber, isVowel } from "../helper/pythaforasTable.js";


/**
 * Calculates the rational thinking number of a person based on their name and day of birth.
 *
 * @param {string} fullname The full name of the person.
 * @param {string} day The day of birth of the person in the format DD/MM/YYYY.
 * @returns {number} The rational thinking number of the person.
 */
function calculateRationalThinking(fullname, dayBirthday) {

    console.log("===== Chỉ số Tư duy lý chí =====");

    // Lấy tên người
    const name = fullname.split(' ')[0].toUpperCase().split('')[0];

    // Quy đổi tên người → số
    const nameNumber = charToNumber(name);

    // Rút gón tên người
    const nameReduce = reduceNumber(nameNumber);

    // Rút gọn ngày
    const dayReduce = reduceNumber(dayBirthday)

    // Cộng hai số
    let total = nameReduce + dayReduce;

    // Rút gọn kết quả
    let result = reduceNumber(total);

    return result;
}
export { calculateRationalThinking };