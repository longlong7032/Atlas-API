import { reduceNumber } from "../helper/pythaforasTable.js";

function reduceToSingleDigit(number) {
    return reduceNumber(number, false);
}

function calculateChallenge(birthday) {
    if (!birthday || typeof birthday !== "string") {
        throw new Error("Invalid birthday format");
    }

    const parts = birthday.split("/");
    if (parts.length !== 3) {
        throw new Error("Invalid birthday format");
    }

    const day = reduceToSingleDigit(Number(parts[0]));
    const month = reduceToSingleDigit(Number(parts[1]));
    const year = reduceToSingleDigit(Number(parts[2]));

    const c1 = Math.abs(day - month);
    const c2 = Math.abs(day - year);
    const c3 = Math.abs(c1 - c2);
    const c4 = Math.abs(month - year);

    return [c1, c2, c3, c4];
}

export { calculateChallenge };
