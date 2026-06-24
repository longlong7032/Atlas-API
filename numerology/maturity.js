import { normalizeName, reduceNumber, charToNumber, isVowel } from "../helper/pythaforasTable.js";

function calculateMaturity(lifePath, expression) {
    // Maturity = Life Path + Expression
    let maturity = lifePath + expression;

    // Nếu Maturity là một trong các Master Numbers (11, 22, 33) thì không cần rút gọn
    let result = reduceNumber(maturity, true);

    return result;
}

export { calculateMaturity }