import { normalizeName, reduceNumber, charToNumber, isVowel } from "../helper/pythaforasTable.js";


/**
 * Calculates the subconscious strength number of a person based on their name.
 *
 * This function takes the full name of a person, normalizes it, and then
 * converts each letter to its corresponding Pythagorean number. It then
 * creates a set of unique numbers from the list of Pythagorean numbers.
 *
 * @param {string} fullname The full name of the person.
 * @returns {Set<number>} A set of unique Pythagorean numbers representing the subconscious strength of the person.
 */
function calculateSubconsciousStrength(fullname) {
    console.log("==== Chỉ số SỨC MẠNH TIỀM THỨC ====");

    const normalized = normalizeName(fullname);

    const numbers = normalized
        .split('')
        .map(char => charToNumber(char))
        .filter(num => num != null);

        //Bỏ qua số 0 và các ký tự không phải chữ cái
    const filteredNumbers = numbers.filter(num => num !== 0);
    const result = new Set(filteredNumbers);
    console.log("Kết quả: ", result);

    return Array.from(result).length;
}


export { calculateSubconsciousStrength };