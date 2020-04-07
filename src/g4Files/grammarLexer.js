// Generated from grammarLexer.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\f5\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0006\u0005!\n\u0005\r\u0005\u000e\u0005\"",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0006\u000b0\n\u000b\r\u000b",
    "\u000e\u000b1\u0003\u000b\u0003\u000b\u0002\u0002\f\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b",
    "\u0015\f\u0003\u0002\u0006\u0003\u00022;\r\u0002##%(*.00<=??AB]]_a}",
    "}\u007f\u0080\u0004\u0002\f\f\u000f\u000f\u0004\u0002\u000b\u000b\"",
    "\"\u00028\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002",
    "\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002",
    "\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002",
    "\u0002\u0002\u0003\u0017\u0003\u0002\u0002\u0002\u0005\u0019\u0003\u0002",
    "\u0002\u0002\u0007\u001b\u0003\u0002\u0002\u0002\t \u0003\u0002\u0002",
    "\u0002\u000b$\u0003\u0002\u0002\u0002\r&\u0003\u0002\u0002\u0002\u000f",
    "(\u0003\u0002\u0002\u0002\u0011*\u0003\u0002\u0002\u0002\u0013,\u0003",
    "\u0002\u0002\u0002\u0015/\u0003\u0002\u0002\u0002\u0017\u0018\u0007",
    "\u2194\u0002\u0002\u0018\u0004\u0003\u0002\u0002\u0002\u0019\u001a\u0007",
    "\u03bd\u0002\u0002\u001a\u0006\u0003\u0002\u0002\u0002\u001b\u001c\u0007",
    "~\u0002\u0002\u001c\b\u0003\u0002\u0002\u0002\u001d!\u0005\u000b\u0006",
    "\u0002\u001e!\u0005\u000f\b\u0002\u001f!\u0005\u0011\t\u0002 \u001d",
    "\u0003\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002 \u001f\u0003",
    "\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002",
    "\"#\u0003\u0002\u0002\u0002#\n\u0003\u0002\u0002\u0002$%\u0004c|\u0002",
    "%\f\u0003\u0002\u0002\u0002&\'\u0004C\\\u0002\'\u000e\u0003\u0002\u0002",
    "\u0002()\t\u0002\u0002\u0002)\u0010\u0003\u0002\u0002\u0002*+\t\u0003",
    "\u0002\u0002+\u0012\u0003\u0002\u0002\u0002,-\t\u0004\u0002\u0002-\u0014",
    "\u0003\u0002\u0002\u0002.0\t\u0005\u0002\u0002/.\u0003\u0002\u0002\u0002",
    "01\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002",
    "\u000223\u0003\u0002\u0002\u000234\b\u000b\u0002\u00024\u0016\u0003",
    "\u0002\u0002\u0002\u0006\u0002 \"1\u0003\b\u0002\u0002"].join("");


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
grammarLexer.PIPE = 3;
grammarLexer.WORDORDIG = 4;
grammarLexer.LOWW = 5;
grammarLexer.UPPW = 6;
grammarLexer.DIGITS = 7;
grammarLexer.SYMBOLS = 8;
grammarLexer.NEWLINE = 9;
grammarLexer.WS = 10;

grammarLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

grammarLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

grammarLexer.prototype.literalNames = [ null, "'\u2192'", "'\u03BB'", "'|'" ];

grammarLexer.prototype.symbolicNames = [ null, "ARROW", "LAMBDA", "PIPE", 
                                         "WORDORDIG", "LOWW", "UPPW", "DIGITS", 
                                         "SYMBOLS", "NEWLINE", "WS" ];

grammarLexer.prototype.ruleNames = [ "ARROW", "LAMBDA", "PIPE", "WORDORDIG", 
                                     "LOWW", "UPPW", "DIGITS", "SYMBOLS", 
                                     "NEWLINE", "WS" ];

grammarLexer.prototype.grammarFileName = "grammarLexer.g4";



exports.grammarLexer = grammarLexer;

