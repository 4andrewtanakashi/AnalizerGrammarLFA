// Generated from grammarParser.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by grammarParser.
function grammarParserListener(txt) {

	antlr4.tree.ParseTreeListener.call(this);

    this.semanaticError = verificationSemantic(txt);

	return this;
}

function verificationSemantic(txt) {
    let rules = txt.split("\n");
    let tmp = rules[0].split("→");

    let rightSide = [];
        for (let rule of rules) {
            let aux = rule.replace(/ /g,'');

            aux = aux.split("→");
            if (aux.length > 1){
                aux = aux[1].split("|");
                for (let v of aux){
                    rightSide.push(v);
                }
            }
        }

		const symbols = ['!', '@', '#', '$', '%',
		'^', '&', '*', '(', ')', '_',
		'+', '=', '{', '}', '[', ']',
		':', ';', ',', '.', '?', '~'];
        let variablesTemp = [];
        let popped;
        for (let r of rules) {
            tmp = r.split("→");
			console.log("tmp[0].trim()");
			console.log(tmp[0].trim().split('').filter( letters => {
				return (letters.toUpperCase() === letters);
			})[0] );
		    variablesTemp.push(tmp[0].trim().split('').filter( letters => {
				return (letters.toUpperCase() === letters);
			})[0]);
        }
		console.log('\n');
        variablesTemp.reverse();
        popped = variablesTemp.pop();

        //Lista de regra da direita do S -> A
        let listRule = [];
        let leftSide = variablesTemp;
        leftSide.push(popped);
        let eqif = true;
        for (let v of rightSide) {
            for (let l of v) {


                if ( !(/[0-9]/.test(l)) &&
					(symbols.every(sym => sym !== l)) &&
					(l.toUpperCase() === l) &&
					 !leftSide.includes(l) ) {
					console.log("toUpperCase");
					console.log(symbols);
					console.log();
					console.log( !(symbols === l) );
					console.log(l.toUpperCase());
                    listRule.push(l);
                    eqif = false;
                }
            }
        }

        if (!eqif) {
            let subtractionElem = [];

            listRule.every( elem => {
                if (!variablesTemp.includes(elem)){subtractionElem.push(elem); }
                return 0;
            } );

            let letter = subtractionElem.toString();

            return [false, letter];
        }

        return [true, ""];
}

grammarParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
grammarParserListener.prototype.constructor = grammarParserListener;

// Enter a parse tree produced by grammarParser#compilationUnit.
grammarParserListener.prototype.enterCompilationUnit = function(ctx) {

};

// Exit a parse tree produced by grammarParser#compilationUnit.
grammarParserListener.prototype.exitCompilationUnit = function(ctx) {
};


// Enter a parse tree produced by grammarParser#initialSetence.
grammarParserListener.prototype.enterInitialSetence = function(ctx) {

};

// Exit a parse tree produced by grammarParser#initialSetence.
grammarParserListener.prototype.exitInitialSetence = function(ctx) {
};


// Enter a parse tree produced by grammarParser#setenses.
grammarParserListener.prototype.enterSetenses = function(ctx) {
};

// Exit a parse tree produced by grammarParser#setenses.
grammarParserListener.prototype.exitSetenses = function(ctx) {
};


// Enter a parse tree produced by grammarParser#wordComplex.
grammarParserListener.prototype.enterWordComplex = function(ctx) {
};

// Exit a parse tree produced by grammarParser#wordComplex.
grammarParserListener.prototype.exitWordComplex = function(ctx) {
};


// Enter a parse tree produced by grammarParser#moreSetences.
grammarParserListener.prototype.enterMoreSetences = function(ctx) {
};

// Exit a parse tree produced by grammarParser#moreSetences.
grammarParserListener.prototype.exitMoreSetences = function(ctx) {
};



exports.grammarParserListener = grammarParserListener;
