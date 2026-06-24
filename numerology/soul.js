import { charToNumber, normalizeName, reduceNumber } from "../helper/pythaforasTable.js";

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
 * Tính số linh hồn từ họ tên đầy đủ.
 * @param {string} fullName - Họ tên (có hoặc không dấu)
 * @returns {{ soulNumber: number, details: object[], steps: number[], normalized: string }}
 */
function calculateSoulNumber(fullName) {
  if (!fullName || typeof fullName !== 'string') {
    throw new Error('fullName phải là chuỗi không rỗng');
  }

  const normalized = normalizeName(fullName);
  const words = normalized.split(/\s+/).filter(Boolean);

  if (!words.length) throw new Error('Không tìm được ký tự hợp lệ');

  let total = 0;
  const details = words.map((word) => {
    const vowels = [];
    for (let i = 0; i < word.length; i++) {
      if (isVowelAt(word, i)) {
        vowels.push({ letter: word[i], value: charToNumber(word[i]) });
      }
    }
    const sum = vowels.reduce((s, v) => s + v.value, 0);
    total += sum;
    return { word, vowels, sum };
  });

  const reduction = {
    value: reduceNumber(total, true),
    steps: [total],
  };

  return {
    soulNumber: reduction.value,
    normalized,
    rawTotal: total,
    reductionSteps: reduction.steps,
    details,
  };
}

export { calculateSoulNumber };
