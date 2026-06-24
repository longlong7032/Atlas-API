/**
 * Chức năng: Tính chỉ số Đường đời (Life Path)
 * Quy tắc:
 * - Cộng từng chữ số của ngày, tháng, năm
 * - Ngày/tháng nếu ra 11/22/33 thì giữ nguyên
 * - Năm luôn cộng tất cả chữ số rồi rút gọn
 * - Tổng cuối cùng giữ 11/22/33 và hiển thị dạng 11/2, 22/4, 33/6
 */

function sumDigits(value) {
    return String(value)
        .split("")
        .reduce((sum, digit) => sum + Number(digit), 0);
}

function reduceWithMaster(value, keepMaster = true) {
    let result = sumDigits(value);

    while (result > 9) {
        if (keepMaster && (result === 11 || result === 22 || result === 33)) {
            break;
        }
        result = sumDigits(result);
    }

    return result;
}

function formatMasterNumber(number) {
    if (number === 11) return "11/2";
    if (number === 22) return "22/4";
    if (number === 33) return "33/6";
    return String(number);
}

function calculateLifePath(dateString) {
    const parts = String(dateString).split("/");
    if (parts.length !== 3) return "Định dạng ngày không hợp lệ (dd/mm/yyyy)";

    const [dayRaw, monthRaw, yearRaw] = parts;
    const day = Number(dayRaw);
    const month = Number(monthRaw);
    const year = Number(yearRaw);

    const reducedDay = (day === 11 || day === 22 || day === 33) ? day : reduceWithMaster(day, true);
    const reducedMonth = (month === 11 || month === 22 || month === 33) ? month : reduceWithMaster(month, true);
    const reducedYear = reduceWithMaster(year, true);

    let finalResult = reducedDay + reducedMonth + reducedYear;
    while (finalResult > 9) {
        if (finalResult === 11 || finalResult === 22 || finalResult === 33) {
            break;
        }
        finalResult = sumDigits(finalResult);
    }

    return formatMasterNumber(finalResult);
}

function calculateLifePathRawTotal(dateString) {
    const parts = String(dateString).split("/");
    if (parts.length !== 3) return null;

    const [dayRaw, monthRaw, yearRaw] = parts;
    const day = Number(dayRaw);
    const month = Number(monthRaw);
    const year = Number(yearRaw);

    const reducedDay = (day === 11 || day === 22 || day === 33) ? day : reduceWithMaster(day, true);
    const reducedMonth = (month === 11 || month === 22 || month === 33) ? month : reduceWithMaster(month, true);
    const reducedYear = reduceWithMaster(year, true);

    return reducedDay + reducedMonth + reducedYear;
}

export { calculateLifePath, calculateLifePathRawTotal };
