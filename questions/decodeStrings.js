function decodeStrings(s) {
    let snippet = '';
    let times;

    for (let i = s.length - 1; i >= 0; i--) {
        if (typeof +s[i] === 'number' && !isNaN(+s[i])) {
        times = s[i];
        snippet = snippet.repeat(times);
        } else if (s[i] === '[' || s[i] === ']') {
        // do nothing
        } else {
        snippet += s[i] 
        }
    }
    return snippet.split('').reverse().join('');
}

decodeStrings('4[ab]') // "baaabaaa"