/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    let rows = new Array(numRows).fill("");

    let currentRow = 0;
    let goingDown = true;

    for (let i = 0; i < s.length; i++) {

        rows[currentRow] += s[i];
        if (currentRow === numRows - 1) {
            goingDown = false;
        }

      
        if (currentRow === 0) {
            goingDown = true;
        }

        if (goingDown) {
            currentRow++;
        } else {
            currentRow--;
        }
    }

    return rows.join("");
}