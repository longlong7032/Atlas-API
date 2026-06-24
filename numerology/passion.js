import { normalizeName, reduceNumber, charToNumber, isVowel } from "../helper/pythaforasTable.js";



function calculatePassion(fullname) {
    console.log("===== Chỉ số ĐAM MÊ =====");
    // Chuần hóa tên
    const normalized = normalizeName(fullname);

    // Lấy tập hợp các số từ tên
    const letters = normalized.split('');

    // Lấy tập hợp các số từ tên
    const numbers = letters.map(char => charToNumber(char)).filter(num => num != null);
    console.log(numbers);
    
    // Kiểm tra số nào xuất hiện nhiều trong mảng, loại bỏ số 0 và các ký tự không phải chữ cái
    const filteredNumbers = numbers.filter(num => num !== 0);
    console.log("Filtered Numbers: ", filteredNumbers);
    let acc = {};
    for (let number of filteredNumbers) {
        acc[number] = (acc[number] || 0) + 1;
    }
    let max = Math.max(...Object.values(acc));
    let result = Object.keys(acc).filter(k => acc[k] === max);
    console.log("RESULT: ", result);

    return result;
}

export { calculatePassion }