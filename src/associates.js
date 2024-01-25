"use strict";
function findCommonPart(wordsList) {
    const setsList = wordsList.map(word => new Set(word));
    const commonLetters = setsList.reduce((intersection, currentSet) => {
        const common = new Set([...intersection].filter(letter => currentSet.has(letter)));
        return common;
    });
    const commonWord = Array.from(commonLetters).join('');
    return commonWord;
}
const wordsList1 = ['BATHROOM', 'BATHSALTS', 'BLOODBATH'];
const result1 = findCommonPart(wordsList1);
const wordsList2 = ['BEFRIEND', 'GIRLFRIEND', 'FRIENDSHIP'];
const result2 = findCommonPart(wordsList2);
