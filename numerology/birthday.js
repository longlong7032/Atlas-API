import { normalizeName, reduceNumber, charToNumber, isVowel } from "../helper/pythaforasTable.js";

function calculateBirthday(birthday) {
    // birthday: "27/01/1993"
    let day = parseInt(birthday.split('/')[0]);
    // Nếu ngày là 11 hoặc 22, giữ nguyên, không rút gọn
    if (day == 11 || day == 22) {
        return day;
    }
    // Rút gọn ngày về một chữ số
    let result = reduceNumber(day);

    return result;
}

export { calculateBirthday };