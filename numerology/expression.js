import { charToNumber, normalizeName, reduceNumber } from "../helper/pythaforasTable.js";

function numerologyCalculator(fullName) {
    const cleanName = normalizeName(fullName);
    const vowelsList = ['A', 'E', 'I', 'O', 'U'];
    const words = cleanName.split(/\s+/); // Chia theo từng từ (Ví dụ: NGUYEN, VAN, AN)

    let result = [];

    words.forEach(word => {
        let wordAnalysis = [];
        const chars = word.split('');

        chars.forEach((char, index) => {
            const value = charToNumber(char);
            if (!value) return; // Bỏ qua ký tự lạ

            let type = "";
            if (vowelsList.includes(char)) {
                type = "vowel"; // Nguyên âm
            } else if (char === 'Y') {
                // Logic xử lý chữ Y
                const hasOtherVowels = chars.some(c => vowelsList.includes(c));
                const prevChar = chars[index - 1];
                const nextChar = chars[index + 1];

                // Y là PHỤ ÂM khi đứng cạnh một nguyên âm khác
                if ((prevChar && vowelsList.includes(prevChar)) || (nextChar && vowelsList.includes(nextChar))) {
                    type = "consonant";
                }
                // Y là NGUYÊN ÂM khi đứng một mình hoặc không có nguyên âm nào khác
                else if (chars.length === 1 || !hasOtherVowels) {
                    type = "vowel";
                }
                // Mặc định (Trường hợp đứng giữa 2 phụ âm như GWYNETH)
                else {
                    type = "vowel";
                }
            } else {
                type = "consonant"; // Phụ âm
            }

            wordAnalysis.push({
                char: char,
                value,
                type: type
            });
        });
        result.push(wordAnalysis);
    });

    return result;
}

function calculateExpression (name) {
    const words = normalizeName(name).split(' ').filter(w => w.trim() !== '');
    const wordValues = words.map(word => {
        const letters = word.split('');
        const total = letters.reduce((sum, letter) => sum + charToNumber(letter), 0);
        return { word, value: reduceNumber(total, true) };
    });

    const totalValue = wordValues.reduce((sum, w) => sum + w.value, 0);
    return reduceNumber(totalValue, true);
}

function calculateExpressionRawTotal(name) {
    const words = normalizeName(name).split(' ').filter(w => w.trim() !== '');
    const wordValues = words.map(word => {
        const letters = word.split('');
        const total = letters.reduce((sum, letter) => sum + charToNumber(letter), 0);
        return { word, value: reduceNumber(total, true) };
    });

    return wordValues.reduce((sum, w) => sum + w.value, 0);
}

export { calculateExpression, calculateExpressionRawTotal };
