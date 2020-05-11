function validAnagram(string1, string2) {
//     1. check string length
//     2. count chars
//     3. Iterate over counters and compare
//      Big O is o(n)
// Input? Expected output? Naming the data

    frequencyCounter1 = {};
    frequencyCounter2 = {};

    if (string1.length !== string2.length) {
        return false;
    }
    
    for (let char of string1) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
    }
    for (let char of string2) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
    }
    
    for (let key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }

    return true;
}

validAnagram("anagram", "nagaram");