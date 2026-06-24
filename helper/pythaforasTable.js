// =====================
// CONSTANTS
// =====================

// Bảng Pythagoras: ký tự → số
const PYTHAGORAS_MAP = {
    A: 1, J: 1, S: 1,
    B: 2, K: 2, T: 2,
    C: 3, L: 3, U: 3,
    D: 4, M: 4, V: 4,
    E: 5, N: 5, W: 5,
    F: 6, O: 6, X: 6,
    G: 7, P: 7, Y: 7,
    H: 8, Q: 8, Z: 8,
    I: 9, R: 9
};

// Nguyên âm
const VOWELS = new Set(['A', 'E', 'I', 'O', 'U']);

// Số master
const MASTER_NUMBERS = new Set([11, 22, 33]);

// Mapping hiển thị đặc biệt
const SPECIAL_NUMBER_FORMAT = {
    11: "11/2",
    22: "22/4",
    33: "33/6",
    13: "13/4",
    14: "14/5",
    17: "17/8",
    19: "19/1",
};

// =====================
// HELPERS
// =====================

// Tính tổng các chữ số
function sumDigits(number) {
    return number
        .toString()
        .split('')
        .reduce((sum, digit) => sum + Number(digit), 0);
}

// =====================
// CORE FUNCTIONS
// =====================

/**
 * Chuẩn hóa tên: bỏ dấu + uppercase
 */
export function normalizeName(fullName) {
    if (!fullName || typeof fullName !== 'string') return '';

    return fullName
        .toUpperCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/Đ/g, 'D')
        .trim();
}

/**
 * Convert ký tự → số theo Pythagoras
 */
export function charToNumber(char) {
    if (!char) return 0;
    return PYTHAGORAS_MAP[char] ?? 0;
}

/**
 * Rút gọn số (có thể giữ số master)
 */
export function reduceNumber(number, preserveMaster = false) {
    if (typeof number !== 'number' || number < 0) return 0;

    let result = number;

    while (result > 9) {
        if (preserveMaster && MASTER_NUMBERS.has(result)) {
            return result;
        }
        result = sumDigits(result);
    }

    return result;
}

/**
 * Kiểm tra nguyên âm, trong đó Y được coi là nguyên âm nếu không đứng cạnh nguyên âm khác
 * @param {string} char - Ký tự cần kiểm tra
 * @param {string} prevChar - Ký tự trước đó (nếu có)
 * @param {string} nextChar - Ký tự sau đó (nếu có)
 * @returns {boolean} - true nếu là nguyên âm, false nếu không

 */
export function isVowel(char, prevChar = null, nextChar = null) {
    if (VOWELS.has(char)) return true;
    if (char !== 'Y') return false;
    return !VOWELS.has(prevChar) && !VOWELS.has(nextChar);
}

/**
 * Format số theo quy tắc numerology
 */
export function formatNumber(number, useSpecialFormat = false) {
    if (useSpecialFormat && SPECIAL_NUMBER_FORMAT[number]) {
        return SPECIAL_NUMBER_FORMAT[number];
    }
    return String(number);
}