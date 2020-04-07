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

    function onChange (grammarText) {



        let tempGrammar = grammarText;
        let len = grammarText.length;
        let wordTest = grammarText[len-2] + grammarText[len-1];

        let wordTesLambda = grammarText.split(".");

        // Condição que verifica se houve split, se houve é porque existe ponto.
        if ( wordTesLambda.length > 1) {
            wordTesLambda[0] = wordTesLambda[0] + "λ" + wordTesLambda[1];
            tempGrammar = wordTesLambda[0];
        }else if (wordTest === "->"){
            let tmp = grammarText.split("->");
            tmp[0] += "→";
            tempGrammar = tmp[0];
        }else {
            tempGrammar = grammarText;
        }


        setValueStr(tempGrammar);

        //Instanciando métodos do ANTLR4
       let input = grammarText;
       let chars = new antlr4.InputStream(input);
       let lexer = new grammarLexer(chars);
       lexer.strictMode = false;
       let tokens  = new antlr4.CommonTokenStream(lexer);
       let parser = new grammarParser(tokens);


       //Instânciando o Parser para custom métodos.
       parser.buildParseTrees = true;
       let errorListerner = new ErrorListener();
       let sematicError = new grammarParserListener(grammarText).semanaticError;
       parser.addParseListener(new grammarParserListener(grammarText));
       parser.removeErrorListeners(); // Remove default ConsoleErrorListener
       parser.addErrorListener(errorListerner); // Add custom error listener

       try {
           let tree = parser.compilationUnit();
           console.log(tree.toStringTree(parser.ruleNames));

           setMessageError("");
           setColor("green");
           setShowError("none");
       } catch (e) {
           setMessageError(e);
           setColor("red");
           setShowError("block");
       }
       finally {

           if (!sematicError[0]) {
               setMessageError( `Sua gramática não está definido ${sematicError[1]}
               como regra da esquerda.`);


               setColor("red");
               setShowError("block");
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
