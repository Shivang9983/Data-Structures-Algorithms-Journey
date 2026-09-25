/**
 * @param {string} expression
 * @return {string[]}
 */
const braceExpansionII = function(expression) {
    let i = 0;

    function parse() {
        let res = new Set();
        let cur = new Set([""]);

        while (i < expression.length && expression[i] !== '}') {

            if (expression[i] === ',') {
                cur.forEach(x => res.add(x));
                cur = new Set([""]);
                i++;
            } 
            else {
                let part = getPart();
                let next = new Set();

                for (let a of cur)
                    for (let b of part)
                        next.add(a + b);

                cur = next;
            }
        }

        cur.forEach(x => res.add(x));
        return res;
    }

    function getPart() {
        if (expression[i] === '{') {
            i++;
            let res = parse();
            i++;
            return res;
        }

        return new Set([expression[i++]]);
    }

    return [...parse()].sort();
};