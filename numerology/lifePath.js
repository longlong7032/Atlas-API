/**
 * Chức năng: Tính chỉ số Đường đời (Life Path)
 * Quy tắc: Rút gọn ngày, tháng, năm trước (giữ lại 11, 22), sau đó cộng tổng và rút gọn tiếp.
 */

function calculateLifePath(dateString) {
    // 1. Tách ngày, tháng, năm từ chuỗi dd/mm/yyyy
    const parts = dateString.split('/');
    if (parts.length !== 3) return "Định dạng ngày không hợp lệ (dd/mm/yyyy)";

    const day = parts[0];
    const month = parts[1];
    const year = parts[2];

    // Hàm rút gọn một số theo quy tắc Thần số học (giữ lại 11, 22, 33)
    const reduceNumber = (numStr, keepMaster = true) => {
        let sum = numStr.split('').reduce((acc, char) => acc + parseInt(char), 0);

        // Nếu là số Master thì dừng ngay (theo quy tắc giữ nguyên 11, 22)
        if (keepMaster && (sum === 11 || sum === 22 || sum === 33)) {
            return sum;
        }

        // Nếu > 9 thì tiếp tục rút gọn cho đến khi còn 1 chữ số
        while (sum > 9) {
            if (keepMaster && (sum === 11 || sum === 22 || sum === 33)) break;
            sum = sum.toString().split('').reduce((acc, char) => acc + parseInt(char), 0);
        }
        return sum;
    };

    // B1: Rút gọn từng thành phần (Ngày, Tháng, Năm)
    const reducedDay = reduceNumber(day);
    const reducedMonth = reduceNumber(month);
    const reducedYear = reduceNumber(year);

    // B2: Cộng tổng các thành phần đã rút gọn
    let totalSum = reducedDay + reducedMonth + reducedYear;

    // B3: Rút gọn tổng cuối cùng (vẫn giữ lại 11, 22, 33)
    let finalResult = totalSum;
    while (finalResult > 9) {
        if (finalResult === 11 || finalResult === 22 || finalResult === 33) break;
        finalResult = finalResult.toString().split('').reduce((acc, char) => acc + parseInt(char), 0);
    }

    // Định dạng hiển thị (Ví dụ: 11/2)
    let display = finalResult.toString();
    if (finalResult === 11) display = "11/2";
    else if (finalResult === 22) display = "22/4";
    else if (finalResult === 33) display = "33/6";

    // return {
    //     details: { day: reducedDay, month: reducedMonth, year: reducedYear },
    //     total: totalSum,
    //     result: finalResult,
    //     display: display
    // };
    return finalResult
}



export { calculateLifePath };
