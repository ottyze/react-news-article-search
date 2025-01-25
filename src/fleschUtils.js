// fleschUtils.js

/**
 * Counts the number of sentences in the text.
 * @param {string} text
 * @returns {number}
 */
export function countSentences(text) {
    const sentenceEndings = /[.!?;:]/g;
    return (text.match(sentenceEndings) || []).length || 1;  // Ensure at least 1 sentence
}

/**
 * Counts the number of words in the text.
 * @param {string} text
 * @returns {number}
 */
export function countWords(text) {
    const words = text.trim().split(/\s+/);
    return words.length;
}

/**
 * Counts the number of syllables in the text.
 * @param {string} text
 * @returns {number}
 */
export function countSyllables(text) {
    const words = text.toLowerCase().split(/\s+/);
    let syllableCount = 0;

    words.forEach(word => {
        let wordSyllables = word.match(/[aeiouy]+/g) || [];
        // Adjust for silent 'e', and other English rules
        if (word.endsWith('es') || word.endsWith('ed')) {
            if (!/[aeiouy]{2}/.test(word)) wordSyllables.pop();
        } else if (word.endsWith('e') && wordSyllables.length > 1) {
            wordSyllables.pop();
        }
        syllableCount += wordSyllables.length;
    });

    return syllableCount;
}

/**
 * Computes the Flesch Index for readability.
 * @param {number} syllableCount
 * @param {number} wordCount
 * @param {number} sentenceCount
 * @returns {number}
 */
export function computeFleschIndex(syllableCount, wordCount, sentenceCount) {
    return 206.835 - 1.015 * (wordCount / sentenceCount) - 84.6 * (syllableCount / wordCount);
}

/**
 * Computes the Flesch Grade for readability.
 * @param {number} syllableCount
 * @param {number} wordCount
 * @param {number} sentenceCount
 * @returns {number}
 */
export function computeGradeLevel(syllableCount, wordCount, sentenceCount) {
    return 0.39 * (wordCount / sentenceCount) + 11.8 * (syllableCount / wordCount) - 15.59;
}

/**
 * Classifies readability based on Flesch Index.
 * @param {number} fleschIndex
 * @returns {string} The grade level as per Flesch Index
 */
export function classifyArticleReadability(fleschIndex) {
    if (fleschIndex >= 90) return "5th grade";
    if (fleschIndex >= 80) return "6th grade";
    if (fleschIndex >= 70) return "7th grade";
    if (fleschIndex >= 60) return "8th & 9th grade";
    if (fleschIndex >= 50) return "10th to 12th grade";
    if (fleschIndex >= 30) return "College";
    return "College graduate";
}
