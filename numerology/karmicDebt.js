
/*
    * Tính toán nợ nghiệp dựa trên các con số đã tính được
    * Trên bảng Pythagoras, những con số 13, 14, 16 và 19 được coi là những con số nợ nghiệp. Nếu một người có một trong những con số này trong biểu đồ của họ, điều đó có thể chỉ ra rằng họ có một số nợ nghiệp để trả trong cuộc sống này.
    * Nợ nghiệp có thể liên quan đến những thách thức hoặc bài học mà một người cần phải học để tiến bộ về mặt tinh thần. Ví dụ, số 13 thường được liên kết với sự biến đổi và có thể chỉ ra rằng một người cần phải học cách buông bỏ và chấp nhận thay đổi. Số 14 có thể liên quan đến sự tự do và có thể chỉ ra rằng một người cần phải học cách cân bằng giữa tự do cá nhân và trách nhiệm. Số 16 thường được liên kết với sự sụp đổ và có thể chỉ ra rằng một người cần phải học cách xây dựng lại sau khi trải qua khó khăn. Số 19 có thể liên quan đến sự hoàn thành và có thể chỉ ra rằng một người cần phải học cách hoàn thành những gì họ bắt đầu.
    * Tuy nhiên, điều quan trọng là phải nhớ rằng nợ nghiệp không phải là một điều xấu. Nó chỉ đơn giản là
*/
function normalizeDebtValue(value) {
    if (value === null || value === undefined) return null;
    if (typeof value === "number") return value;
    if (typeof value === "string") {
        const parsed = Number.parseInt(value, 10);
        return Number.isNaN(parsed) ? null : parsed;
    }
    if (typeof value === "object" && "rawTotal" in value) {
        return normalizeDebtValue(value.rawTotal);
    }
    return null;
}

function calculateKarmicDebt(numbers) {
    const debts = [13, 14, 16, 19];
    const result = [];

    for (const value of numbers) {
        const normalized = normalizeDebtValue(value);
        if (normalized !== null && debts.includes(normalized) && !result.includes(normalized)) {
            result.push(normalized);
        }
    }

    return result.length === 0 ? 0 : result;
}

export { calculateKarmicDebt };
