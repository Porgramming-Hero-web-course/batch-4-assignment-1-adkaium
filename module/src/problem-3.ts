// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

function countWordOccurrences(sentence: string, word: string): number {
    // input string covert to lower case
    const lowerSentence = sentence.toLowerCase();
    const lowerWord = word.toLowerCase();

    // regular expresson use 
    const regex = new RegExp(`\\b${lowerWord}\\w*\\b`, 'g');

//    use regExp match method for identefi matching word
    const matches = lowerSentence.match(regex);

    // count matching word
    return matches ? matches.length : 0;
}


console.log(countWordOccurrences("I love typescript", "typescript"));
