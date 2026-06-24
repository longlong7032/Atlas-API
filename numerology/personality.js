import { normalizeName, reduceNumber, charToNumber, isVowel } from "../helper/pythaforasTable.js";

const BASE_VOWELS = new Set(['A','E','I','O','U']);

function isVowelAt(word, index) {
  const ch = word[index];
  if (BASE_VOWELS.has(ch)) return true;
  if (ch !== 'Y') return false;
  const prev = index > 0 ? word[index - 1] : null;
  const next = index < word.length - 1 ? word[index + 1] : null;
  return !BASE_VOWELS.has(prev) && !BASE_VOWELS.has(next);
}

/**
 * Tính số nhân cách từ họ và tên
 * @param {string} fullname - Họ và tên (có hoặc không dấu)
 * @returns {{ personalityNumber: number, details: object[], steps: number[], normalized: string }}
 */
function calculatePersonality(fullname) {
  if (!fullname || typeof fullname !== 'string') {
    throw new Error('fullname phải là chuỗi không rỗng');
  }

  const normalized = normalizeName(fullname);
  const words = normalized.split(/\s+/).filter(Boolean);

  if (!words.length) throw new Error('Không tìm được ký tự hợp lệ');

  let total = 0;
  // Tính tổng giá trị các phụ âm , kiếm tra điều kiện Y có phải là phụ âm hay không
const details = words.map((word) => {
    const constant = [];
    for (let i = 0; i < word.length; i++) {
      if (!isVowelAt(word, i)) {
        constant.push({ letter: word[i], value: charToNumber(word[i]) });
      }
    }
    const sum = constant.reduce((s, c) => s + c.value, 0);
    total += sum;
    return { word, constant, sum };
  });;
// Tính số nhân cách
  const reduction = {
    value: reduceNumber(total, false),
    steps: [total],
  };

  return {
    personalityNumber: reduction.value,
    normalized,
    rawTotal: total,
    reductionSteps: reduction.steps,
    details,
  };
}
export { calculatePersonality };
