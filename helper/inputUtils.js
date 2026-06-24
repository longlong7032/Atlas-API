import { normalizeName } from "./pythaforasTable.js";

/**
 * Phân tích đầu vào ngày sinh
 * @param {*} birthday 
 * @returns 
 */

export function parseBirthdayInput(birthday = "1986-05-12") {
    const birthdayRaw = String(birthday).trim();
    const birthdayInput = birthdayRaw.includes("-")
        ? birthdayRaw.split("-").reverse().join("/")
        : birthdayRaw;

    const [dayBirthday, monthBirthday, yearBirthday] = birthdayInput.split("/").map(Number);

    if (!dayBirthday || !monthBirthday || !yearBirthday) {
        throw new Error("Ngày sinh không hợp lệ, vui lòng nhập theo định dạng dd/mm/yyyy hoặc yyyy-mm-dd");
    }

    return {
        birthdayInput,
        dayBirthday,
        monthBirthday,
        yearBirthday,
    };
}

export function normalizeVietnameseFullName(fullName) {
    const normalized = normalizeName(fullName);
    return normalized
        .replace(/[^A-Z\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

export function validateVietnameseFullName(fullName) {
    const normalized = normalizeVietnameseFullName(fullName);

    if (!normalized) {
        return { valid: false, message: "Họ và tên không được để trống" };
    }

    if (!/^[A-Z\s]+$/.test(normalized)) {
        return { valid: false, message: "Chỉ được nhập chữ cái tiếng Việt và khoảng trắng" };
    }

    const words = normalized.split(" ").filter(Boolean);
    if (words.length < 2) {
        return { valid: false, message: "Họ và tên phải có ít nhất 2 từ" };
    }

    return { valid: true, normalized };
}

export function parseAndValidateFullName(fullName = "NGUYEN ANH THU") {
    const result = validateVietnameseFullName(fullName);
    if (!result.valid) {
        throw new Error(result.message);
    }

    return result.normalized;
}
