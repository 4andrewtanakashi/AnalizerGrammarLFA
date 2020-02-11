// Generated from grammarLexer.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\n4\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0006\u0005\u001c\n",
    "\u0005\r\u0005\u000e\u0005\u001d\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0007\b&\n\b\f\b\u000e\b)\u000b\b\u0003",
    "\b\u0005\b,\n\b\u0003\t\u0006\t/\n\t\r\t\u000e\t0\u0003\t\u0003\t\u0002",
    "\u0002\n\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b",
    "\u000f\t\u0011\n\u0003\u0002\u0005\u0003\u00022;\u0004\u00022;aa\u0005",
    "\u0002\u000b\f\u000e\u000f\"\"\u00028\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0003\u0013\u0003\u0002\u0002",
    "\u0002\u0005\u0015\u0003\u0002\u0002\u0002\u0007\u0017\u0003\u0002\u0002",
    "\u0002\t\u001b\u0003\u0002\u0002\u0002\u000b\u001f\u0003\u0002\u0002",
    "\u0002\r!\u0003\u0002\u0002\u0002\u000f#\u0003\u0002\u0002\u0002\u0011",
    ".\u0003\u0002\u0002\u0002\u0013\u0014\u0007\u2194\u0002\u0002\u0014",
    "\u0004\u0003\u0002\u0002\u0002\u0015\u0016\u0007\u03bd\u0002\u0002\u0016",
    "\u0006\u0003\u0002\u0002\u0002\u0017\u0018\u0007~\u0002\u0002\u0018",
    "\b\u0003\u0002\u0002\u0002\u0019\u001c\u0005\u000b\u0006\u0002\u001a",
    "\u001c\u0005\u000f\b\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b",
    "\u001a\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002\u0002\u001d",
    "\u001b\u0003\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e",
    "\n\u0003\u0002\u0002\u0002\u001f \u0004c|\u0002 \f\u0003\u0002\u0002",
    "\u0002!\"\u0004C\\\u0002\"\u000e\u0003\u0002\u0002\u0002#+\t\u0002\u0002",
    "\u0002$&\t\u0003\u0002\u0002%$\u0003\u0002\u0002\u0002&)\u0003\u0002",
    "\u0002\u0002\'%\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002(",
    "*\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002*,\t\u0002\u0002",
    "\u0002+\'\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,\u0010\u0003",
    "\u0002\u0002\u0002-/\t\u0004\u0002\u0002.-\u0003\u0002\u0002\u0002/",
    "0\u0003\u0002\u0002\u00020.\u0003\u0002\u0002\u000201\u0003\u0002\u0002",
    "\u000212\u0003\u0002\u0002\u000223\b\t\u0002\u00023\u0012\u0003\u0002",
    "\u0002\u0002\b\u0002\u001b\u001d\'+0\u0003\u0002\u0003\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function grammarLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

grammarLexer.prototype = Object.create(antlr4.Lexer.prototype);
grammarLexer.prototype.constructor = grammarLexer;

Object.defineProperty(grammarLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

grammarLexer.EOF = antlr4.Token.EOF;
grammarLexer.ARROW = 1;
grammarLexer.LAMBDA = 2;
grammarLexer.VERTBAR = 3;
grammarLexer.WORDORDIG = 4;
grammarLexer.LOWW = 5;
grammarLexer.UPPW = 6;
grammarLexer.DIGITS = 7;
grammarLexer.WS = 8;

grammarLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

grammarLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

grammarLexer.prototype.literalNames = [ null, "'\u2192'", "'\u03BB'", "'|'" ];

grammarLexer.prototype.symbolicNames = [ null, "ARROW", "LAMBDA", "VERTBAR", 
                                         "WORDORDIG", "LOWW", "UPPW", "DIGITS", 
                                         "WS" ];

grammarLexer.prototype.ruleNames = [ "ARROW", "LAMBDA", "VERTBAR", "WORDORDIG", 
                                     "LOWW", "UPPW", "DIGITS", "WS" ];

grammarLexer.prototype.grammarFileName = "grammarLexer.g4";



exports.grammarLexer = grammarLexer;

