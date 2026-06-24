import { normalizeName, reduceNumber, charToNumber, isVowel } from "../helper/pythaforasTable.js";

function formatMasterNumber(number) {
    if (number === 11) return "11/2";
    if (number === 22) return "22/4";
    if (number === 33) return "33/6";
    return number;
}


function calculatePinnacle(birthday) {
    console.log("===== Chỉ Số CHẶNG =====");

    if (!birthday || typeof birthday !== 'string') {
        throw new Error('Invalid birthday format');
    }

    // Ngày sinh và tháng sinh và năm sinh
    let [day, month, year] = birthday.split('/').map(Number);

    // Chặng thứ nhất (Tháng sinh + Ngày sinh)
    let firstPinnacle = reduceNumber(
        reduceNumber(month, false) + reduceNumber(day, false),
        false
    );

    // Chặng thứ hai (Ngày sinh + Năm sinh)
    let secondPinnacle = reduceNumber(
        reduceNumber(day, false) + reduceNumber(year, false),
        false
    );

    // Chặng thứ ba (Chặng thứ nhất + Chặng thứ hai)
    let thirdPinnacle = reduceNumber(
        reduceNumber(firstPinnacle, false) + reduceNumber(secondPinnacle, false),
        true
    );

    // Chặng thứ tư (Tháng sinh + Năm sinh)
    let fourthPinnacle = reduceNumber(
        reduceNumber(month, false) + reduceNumber(year, false),
        true
    );

    return [
        firstPinnacle,
        secondPinnacle,
        formatMasterNumber(thirdPinnacle),
        formatMasterNumber(fourthPinnacle),
    ];
}

export { calculatePinnacle };
