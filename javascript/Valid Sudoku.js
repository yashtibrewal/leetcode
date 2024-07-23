/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    function getNumbersOnly(row) {
        const nums = [];
        for (let item of row) {
            if (item == '.') {
                continue;
            } else {
                nums.push(parseInt(item));
            }
        }
        return nums;
    }

    // Check for rows
    for (let row of board) {
        if (new Set(getNumbersOnly(row)).size != getNumbersOnly(row).length) return false;
    }


    const cols = new Array(9);
    for(let i=0;i<9;i++){
        cols[i] = new Array();
    }
    // Check for columns
    for (let row of board) {
        for (let i = 0; i < 9; i++) {
            if (row[i] != '.') {
                cols[i].push(row[i]);
            }
        }
    }

    for (let col of cols) {
        if (new Set(getNumbersOnly(col)).size != getNumbersOnly(col).length) return false;
    }


    /**
     * 
     * @param {number} jS jth start pos 
     * @param {number} jE jth end pos
     */
    function checkMatrix(jS, jE) {

        let matrixCheck = [];

        for (let i = 0; i < 9; i++) {

            if ((i ) % 3 == 0)
                matrixCheck = [];

            for (let j = jS; j < jE; j++) {
                matrixCheck.push(board[i][j]);
            }

            if ((i + 1) % 3 == 0)

                if (new Set(getNumbersOnly(matrixCheck)).size != getNumbersOnly(matrixCheck).length) return false;

        }

        return true;

    }

    if (!checkMatrix(0, 3) || !checkMatrix(3, 6) || !checkMatrix(6, 9)) {
        return false;
    }

    return true;

};

console.log(isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]]));