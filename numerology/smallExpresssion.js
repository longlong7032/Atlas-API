import { charToNumber, normalizeName, reduceNumber } from "../helper/pythaforasTable.js";

function calculateSmallExpression(fullName) {
    const words = normalizeName(fullName).split(/\s+/).filter(Boolean);
    const mainName = words.at(-1) || "";
    const total = mainName
        .split("")
        .reduce((sum, char) => sum + charToNumber(char), 0);

    return reduceNumber(total);
}

export { calculateSmallExpression };
