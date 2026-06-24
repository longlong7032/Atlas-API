import { charToNumber, normalizeName, reduceNumber } from "../helper/pythaforasTable.js";

const BASE_VOWELS = new Set(["A", "E", "I", "O", "U"]);

function isVowelAt(word, index) {
    const ch = word[index];
    if (BASE_VOWELS.has(ch)) return true;
    if (ch !== "Y") return false;

    const prev = index > 0 ? word[index - 1] : null;
    const next = index < word.length - 1 ? word[index + 1] : null;
    const hasAnyOtherVowel = word.split("").some((letter, i) => i !== index && BASE_VOWELS.has(letter));

    return !BASE_VOWELS.has(prev) && !BASE_VOWELS.has(next) && !hasAnyOtherVowel;
}

function calculateSmallSoul(fullName) {
    if (!fullName || typeof fullName !== "string") {
        throw new Error("fullName phải là chuỗi không rỗng");
    }

    const words = normalizeName(fullName).split(/\s+/).filter(Boolean);
    const mainName = words.at(-1) || "";

    let total = 0;
    for (let i = 0; i < mainName.length; i++) {
        if (isVowelAt(mainName, i)) {
            total += charToNumber(mainName[i]);
        }
    }

    return reduceNumber(total, false);
}

export { calculateSmallSoul };
