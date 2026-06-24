import { reduceNumber } from "../helper/pythaforasTable.js";

function calculateAttitude(birthday) {
    if (!birthday || typeof birthday !== 'string') {
        throw new Error('birthday phải là chuỗi không rỗng');
    }

    const [day, month] = birthday.split('/').map(Number);
    if (!day || !month) {
        throw new Error('Ngày sinh không hợp lệ');
    }

    const reducedDay = reduceNumber(day, false);
    const reducedMonth = reduceNumber(month, false);
    return reduceNumber(reducedDay + reducedMonth, false);
}

export { calculateAttitude }
