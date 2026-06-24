import { normalizeName, reduceNumber, charToNumber, isVowel } from "../helper/pythaforasTable.js";


function calculateSoulAndPersonality(soulNumber, personalityNumber) {
    console.log("=== Chỉ số Liên hệ Linh hồn và Nhân cách ===");
    console.log(soulNumber
    );console.log(personalityNumber
    );
    // Rút gọn số linh hồn và số nhân cách về 1 chữ số (hoặc giữ nguyên nếu là số chủ đạo)
    let reduceSoul = reduceNumber(soulNumber);
    let reducePersonality = reduceNumber(personalityNumber);

    // Tính số cân bằng bằng cách lấy giá trị tuyệt đối của hiệu giữa số linh hồn và số nhân cách
    let result = Math.abs(reduceSoul - reducePersonality);
    return result;
}

export { calculateSoulAndPersonality }