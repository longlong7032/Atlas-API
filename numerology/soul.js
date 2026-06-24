import { charToNumber, normalizeName, reduceNumber, isVowel } from "../helper/pythaforasTable.js";

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

  const details = words.map((word) => {
    const vowels = [];

    for (let i = 0; i < word.length; i++) {
      const prevChar = i > 0 ? word[i - 1] : null;
      const nextChar = i < word.length - 1 ? word[i + 1] : null;

      if (isVowel(word[i], prevChar, nextChar)) {
        vowels.push({ letter: word[i], value: charToNumber(word[i]) });
      }
    }

    const rawSum = vowels.reduce((sum, vowel) => sum + vowel.value, 0);
    const reducedSum = reduceNumber(rawSum, true);

    return {
      word,
      vowels,
      rawSum,
      reducedSum,
    };
  });

  const total = details.reduce((sum, item) => sum + item.reducedSum, 0);
  const reduction = {
    value: reduceNumber(total, true),
    steps: [details.map((item) => item.rawSum), total],
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
