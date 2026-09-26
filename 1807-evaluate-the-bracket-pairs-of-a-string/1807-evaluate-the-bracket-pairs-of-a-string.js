/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
const evaluate = function(s, knowledge) {
    let map = new Map();

    for (let [key, value] of knowledge) {
        map.set(key, value);
    }

    let ans = "";

    for (let i = 0; i < s.length; i++) {

        if (s[i] !== "(") {
            ans += s[i];
            continue;
        }

        let j = i + 1;
        let key = "";

        while (s[j] !== ")") {
            key += s[j];
            j++;
        }

        ans += map.has(key) ? map.get(key) : "?";

        i = j;
    }

    return ans;
};