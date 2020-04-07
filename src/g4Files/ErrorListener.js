
const antlr4 = require('antlr4');
//const path = require('path');

// const {SyntaxGenericError} = require(path.resolve('error', 'helper'));

/**
 * Custom Error Listener
 *
 * @returns {object}
 */
class ErrorListener extends antlr4.error.ErrorListener {

    /**
     * Checks syntax error
     *
     * @param {object} recognizer The parsing support code essentially. Most of it is error recovery stuff
     * @param {object} symbol Offending symbol
     * @param {int} line Line of offending symbol
     * @param {int} column Position in line of offending symbol
     * @param {string} message Error message
     * @param {string} payload Stack trace
     */
    syntaxError(recognizer, symbol, line, column, message, payload) {
        let lang = navigator.languages;
        const arrowMissing = ["Faltando →","Without →"];
        const valueMissing = ["Regra sem definição", "Rule missing"];
        const barMissing = ["Faltando argumentos após |", "Expecting arguments after |"];
        const lineMissing = ["Linha", "Line"];
        const columnMissing = ["Coluna", "Column"];
        let index = 1;
        let containsPT = false;
        lang.every(ele => { if (ele.includes("pt")) { containsPT= true; }  } )
        if (containsPT) { index = 0; }

        let test = message.split("expecting")[1]
          .trim().replace('{', "").replace('}',"").split(',')[0];
        console.log("test");
        console.log(test);

        let messageError = lineMissing[index] + ": " + line + " " +
                            columnMissing[index] + ": " + column + " ";

        if (test === "'→'")  messageError += arrowMissing[index];
        else if (test === "'λ'") messageError += valueMissing[index];
        else if (test === "<EOF>") messageError += barMissing[index];

        throw  messageError;
    }
}

module.exports = ErrorListener;
