function findCommonPart(wordsList: string[]): string {
    const setsList: Set<string>[] = wordsList.map(word => new Set(word));

    const commonLetters: Set<string> = setsList.reduce((intersection, currentSet) => {
        const common = new Set([...intersection].filter(letter => currentSet.has(letter)))
        return common;
    });

    const commonWord: string = Array.from(commonLetters).join('');

    return commonWord;
}

const wordsList1 = ['BATHROOM', 'BATHS ALTS', 'BLOODBATH'];
const result1 = findCommonPart(wordsList1);

const wordsList2 = ['BEFRIEND', 'GIRLFRIEND', 'FRIENDSHIP'];
const result2 = findCommonPart(wordsList2);
