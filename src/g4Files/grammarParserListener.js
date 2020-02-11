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

        let variablesTemp = [];
        let popped;
        for (let r of rules) {
            tmp = r.split("→");
            variablesTemp.push(tmp[0].trim());
        }
        variablesTemp.reverse();
        popped = variablesTemp.pop();

        //Lista de regra da direita do S -> A 
        let listRule = [];
        let leftSide = variablesTemp;
        leftSide.push(popped);
        let eqif = 1;
        for (let v of rightSide) {
            for (let l of v) {

                if (l.toUpperCase() === l && !leftSide.includes(l) &&!(/[0-9]/.test(l))) {
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

            console.log("\n\nsubtractionElem");
            console.log(listRule);

            let letter = subtractionElem.toString();
            // if (this.state.lang === "pt")
            //     this.setState({menssage: `Sua gramática não está definido ${subtractionElem.toString()}
            //     como regra da esquerda.`});
            // else this.setState({menssage: `Your grammar not definided ${subtractionElem.toString()}
            //     in left rule`});
            return [false, letter];
        }

        return [true, ""];
}

grammarParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
grammarParserListener.prototype.constructor = grammarParserListener;

// Enter a parse tree produced by grammarParser#compilationUnit.
grammarParserListener.prototype.enterCompilationUnit = function(ctx) {
    console.log("CTX enterCompilationUnit");
    console.log(ctx.toString());
    console.log(ctx.toStringTree());
    console.log("\n\n");
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