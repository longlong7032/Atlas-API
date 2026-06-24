import { reduceNumber } from "../helper/pythaforasTable.js";

function calculateMaturity(lifePath, expression) {
    const maturity = Number.parseInt(lifePath, 10) + Number.parseInt(expression, 10);
    return reduceNumber(maturity, true);
}

export { calculateMaturity };
