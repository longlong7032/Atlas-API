import { normalizeName, reduceNumber, charToNumber, isVowel } from "../helper/pythaforasTable.js";

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

  const details = words.map((word) => {
    const consonants = [];

    for (let i = 0; i < word.length; i++) {
      const prevChar = i > 0 ? word[i - 1] : null;
      const nextChar = i < word.length - 1 ? word[i + 1] : null;

      if (!isVowel(word[i], prevChar, nextChar)) {
        const value = charToNumber(word[i]);
        if (value) {
          consonants.push({ letter: word[i], value });
        }
      }
    }

    const rawSum = consonants.reduce((sum, consonant) => sum + consonant.value, 0);
    const reducedSum = reduceNumber(rawSum, false);

    return {
      word,
      consonants,
      rawSum,
      reducedSum,
    };
  });

  const total = details.reduce((sum, item) => sum + item.reducedSum, 0);
  const reduction = {
    value: reduceNumber(total, false),
    steps: [details.map((item) => item.rawSum), total],
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
