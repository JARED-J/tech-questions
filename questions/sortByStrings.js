function sortByStrings(s, t) {
    let result = '';
    let amount = {};

    for (let i = 0; i < s.length; i++) {
        if (amount[s[i]]) {
        amount[s[i]]++
        } else {
        amount[s[i]] = 1
        }
    }

    for (let i = 0; i < t.length; i++){
        if (amount[t[i]]) {
        result += t[i].repeat(amount[t[i]])
        }
    }

    return result;
}

sortByStrings('good', 'odg') // "oodg"
