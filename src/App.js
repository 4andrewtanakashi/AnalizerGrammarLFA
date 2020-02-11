import React, {useState} from 'react';
import './App.css';

function App() {

    const [color, setColor] = useState("red");
    const [valueStr, setValueStr] = useState("");
    const [messageError, setMessageError] = useState("");
    const [showError, setShowError] = useState("none");

    const antlr4 = require('antlr4');
    const grammarLexer = require('./g4Files/grammarLexer').grammarLexer;
    const grammarParser = require('./g4Files/grammarParser').grammarParser;
    const grammarParserListener = require('./g4Files/grammarParserListener').grammarParserListener;
    const ErrorListener = require('./g4Files/ErrorListener');

    function onChange (value) {



        let tempGrammar = value;
        let len = value.length;
        let wordTest = value[len-2] + value[len-1];

        let wordTesLambda = value.split(".");

        // Condição que verifica se houve split, se houve é porque existe ponto.
        if ( wordTesLambda.length > 1) {
            wordTesLambda[0] = wordTesLambda[0] + "λ" + wordTesLambda[1];
            tempGrammar = wordTesLambda[0];
        }else if (wordTest === "->"){
            let tmp = value.split("->");
            tmp[0] += "→";
            tempGrammar = tmp[0];
        }else {
            tempGrammar = value;
        }

        
        setValueStr(tempGrammar);

        let input = tempGrammar;
        let chars = new antlr4.InputStream(input);
        let lexer = new grammarLexer(chars);
        lexer.strictMode = false;
        let tokens  = new antlr4.CommonTokenStream(lexer);
        let parser = new grammarParser(tokens);



        parser.buildParseTrees = true;

        let errorListerner = new ErrorListener();

        let sematicError = new grammarParserListener(tempGrammar).semanaticError;

        parser.addParseListener(new grammarParserListener(tempGrammar));
        parser.removeErrorListeners(); // Remove default ConsoleErrorListener
        parser.addErrorListener(errorListerner); // Add custom error listener

        let tempMessageError;

        try {
            let tree = parser.compilationUnit();

            console.log(parser._syntaxErrors);
            console.log(tree.toStringTree(parser.ruleNames));
            console.log();

            setMessageError("");
            setColor("green");
            setShowError("none");
            tempMessageError = "";
        } catch (e) {
            console.log("ENTROU ERROR catch")
            setMessageError(e);
            tempMessageError = (tempGrammar === "")? "" : e;
            console.log(e);
        } 
        finally {
            if (tempMessageError !== "") {

                setColor("red");
                setShowError("block");
            } else if (tempGrammar === "") {

                setColor("red");
                setShowError("none");
            }

            if (!sematicError[0]) {
                setColor("red");
                setShowError("block");
                setMessageError("Your grammar not definided " + sematicError[1]);
            }
        }

        
    }



    return (
        <div className="App">
            <div style={{ "background-color": "red", 
                        "color":"black",
                        "display": showError}}>
                {messageError}
            </div>
            <div style={{"position": "relative",
                        "top": "2em"}}>
                <textarea id="story" name="story"
                            rows="5" cols="33" value={valueStr}
                            onChange={event => onChange(event.target.value)}/>
                  <button style={{"position": "relative",
                            "top": "2em", "left":"2em",
                            "height": "2em", "width": "2em",
                            "background-color": `${color}` }}/>
            </div>
        </div>
    );
}

export default App;
 
