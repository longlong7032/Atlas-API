import { normalizeName, reduceNumber, charToNumber, isVowel } from "../helper/pythaforasTable.js";

function calculateBalance(name) {
    // name: "Nguyễn Văn An"
    // Chuẩn hóa tên: loại bỏ dấu, chuyển thành chữ thường
    let normalized = normalizeName(name);

    // Tách tên thành các phần (họ, tên đệm, tên chính)
    let parts = normalized.split(' ');

    // Lấy chữ cái đầu của mỗi phần để tính số cân bằng
    const initials = parts.map(p => p[0]);

    // Tính tổng số của các chữ cái đầu
    let result = initials.reduce((sum, initial) => sum + charToNumber(initial), 0);

    // Rút gọn số cân bằng
    result = reduceNumber(result);

    return result;
}
export { calculateBalance };