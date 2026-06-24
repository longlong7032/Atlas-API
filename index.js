import Express from "express";
import path from "path";
import { fileURLToPath } from "url";


import { calculateLifePath } from "./numerology/lifePath.js";
import { calculateExpression } from "./numerology/expression.js";
import { calculateSmallExpression } from "./numerology/smallExpresssion.js";
import { calculateSoulNumber } from "./numerology/soul.js";
import { calculatePersonality } from "./numerology/personality.js";
import { calculatesmallPersonality } from "./numerology/smallPersonality.js";
import { calculateLifePathAndExpression } from "./numerology/lifePathAndExpression.js";
import { calculateBirthday } from "./numerology/birthday.js";
import { calculateBalance } from "./numerology/balance.js";
import { calculateSoulAndPersonality } from "./numerology/soulAndPersonality.js";
import { calculateMaturity } from "./numerology/maturity.js";
import { calculateAttitude } from "./numerology/attitude.js";
import { calculateMissing } from "./numerology/missing.js";
import { calculateKarmicDebt } from "./numerology/karmicDebt.js";
import { calculateChallenge } from "./numerology/challenge.js";
import { calculatePersonalYear } from "./numerology/personalYear.js";
import { calculatePersonalMonth } from "./numerology/personalMonth.js";
import { calculatePersonalDay } from "./numerology/personalDay.js";
import { calculateRationalThinking } from "./numerology/rationalThinking.js";
import { calculateSubconsciousStrength } from "./numerology/subconsciousStrength.js";
import { calculatePassion } from "./numerology/passion.js";
import { calculateGeneration } from "./numerology/generation.js";
import { calculatePinnacle } from "./numerology/pinnacle.js";

import { formatNumber } from "./helper/pythaforasTable.js";
import { parseAndValidateFullName, parseBirthdayInput } from "./helper/inputUtils.js";

const PORT = 3000;

const app = Express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//===============================

function asArray(value) {
    return Array.isArray(value) ? value : [value];
}

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

//===============================
app.get("/calculate", async (req, res) => {
    let nameInput;
    let birthdayInput;
    let dayBirthday;
    let monthBirthday;
    let yearBirthday;

    try {
        nameInput = parseAndValidateFullName(req.query.name || "Nguyen Thị Thuý Mai");
        const birthdayData = parseBirthdayInput(req.query.birthday || "1973-09-08");
        birthdayInput = birthdayData.birthdayInput;
        dayBirthday = birthdayData.dayBirthday;
        monthBirthday = birthdayData.monthBirthday;
        yearBirthday = birthdayData.yearBirthday;
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

    const lifePathResult = calculateLifePath(birthdayInput); // Đường đời
    const expressionResult = calculateExpression(nameInput); // Sứ mệnh
    const smallExpressionResult = calculateSmallExpression(nameInput); // Sứ mệnh nhỏ
    const soulResult = calculateSoulNumber(nameInput).soulNumber; // Linh hồn
    const personalityResult = calculatePersonality(nameInput); // Nhân cách
    const smallPersonalityResult = calculatesmallPersonality(nameInput); // Nhân cách nhỏ
    const lifePathAndExpressionResult = calculateLifePathAndExpression(lifePathResult, expressionResult); // Đường đời và sứ mệnh
    const birthdayResult = calculateBirthday(birthdayInput); // Ngày sinh
    const balanceResult = calculateBalance(nameInput);
    const soulAndPersonalityResult = calculateSoulAndPersonality(soulResult, personalityResult.personalityNumber);
    const maturityResult = calculateMaturity(lifePathResult, expressionResult);
    const attitudeResult = calculateAttitude(birthdayInput);
    const missingResult = calculateMissing(nameInput);
    const karmicDebtResult = calculateKarmicDebt([dayBirthday, lifePathResult, soulResult, personalityResult.personalityNumber, expressionResult, maturityResult, birthdayResult]);
    const challengeResult = calculateChallenge(birthdayInput);
    const personalYearResult = calculatePersonalYear(birthdayInput);
    const personalMonthResult = calculatePersonalMonth(personalYearResult);
    const personalDayResult = calculatePersonalDay(personalMonthResult);
    const rationalThinkingResult = calculateRationalThinking(nameInput, dayBirthday);
    const subconsciousStrengthResult = calculateSubconsciousStrength(nameInput);
    const passionResult = calculatePassion(nameInput);
    const generationResult = calculateGeneration(yearBirthday);
    const pinnacleResult = calculatePinnacle(birthdayInput);

    return res.json({
        "Họ và tên": asArray(nameInput),
        "Ngày tháng năm sinh": asArray(birthdayInput),
        "Ngày sinh": asArray(dayBirthday),
        "Tháng sinh": asArray(monthBirthday),
        "Năm sinh": asArray(yearBirthday),
        "Đường đời": asArray(formatNumber(lifePathResult, true)),
        "Sứ mệnh": asArray(formatNumber(expressionResult, true)),
        "Sứ mệnh nhỏ": asArray(smallExpressionResult),
        "Linh hồn": asArray(formatNumber(soulResult, true)),
        "Nhân cách": asArray(personalityResult.personalityNumber),
        "Nhân cách nhỏ": asArray(smallPersonalityResult),
        "Đường đời và Sứ mệnh": asArray(lifePathAndExpressionResult),
        "Chỉ số ngày sinh": asArray(birthdayResult),
        "Cân bằng": asArray(balanceResult),
        "Linh hồn và Nhân cách": asArray(soulAndPersonalityResult),
        "Trưởng thành": asArray(formatNumber(maturityResult, true)),
        "Thái độ": asArray(attitudeResult),
        "Thiếu sót": asArray(missingResult),
        "Nợ nghiệp": asArray(karmicDebtResult),
        "Năm cá nhân": asArray(personalYearResult),
        "Tháng cá nhân": asArray(personalMonthResult),
        "Ngày cá nhân": asArray(personalDayResult),
        "Suy nghĩ lý tính": asArray(rationalThinkingResult),
        "Sức mạnh vô thức": asArray(subconsciousStrengthResult),
        "Đam mê": asArray(passionResult),
        "Thế hệ": asArray(generationResult),
        "Chặng": asArray(pinnacleResult),
        "Thách thức": asArray(challengeResult),
    });


})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
