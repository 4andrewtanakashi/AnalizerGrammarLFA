// Generated from grammarParser.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarParserListener = require('./grammarParserListener').grammarParserListener;
var grammarFileName = "grammarParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\n[\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0006\u0003\u0011\n\u0003\r\u0003\u000e\u0003\u0012",
    "\u0003\u0003\u0003\u0003\u0006\u0003\u0017\n\u0003\r\u0003\u000e\u0003",
    "\u0018\u0003\u0004\u0006\u0004\u001c\n\u0004\r\u0004\u000e\u0004\u001d",
    "\u0003\u0004\u0007\u0004!\n\u0004\f\u0004\u000e\u0004$\u000b\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u0004(\n\u0004\f\u0004\u000e\u0004+\u000b\u0004",
    "\u0003\u0004\u0006\u0004.\n\u0004\r\u0004\u000e\u0004/\u0003\u0004\u0007",
    "\u00043\n\u0004\f\u0004\u000e\u00046\u000b\u0004\u0003\u0004\u0006\u0004",
    "9\n\u0004\r\u0004\u000e\u0004:\u0003\u0004\u0007\u0004>\n\u0004\f\u0004",
    "\u000e\u0004A\u000b\u0004\u0005\u0004C\n\u0004\u0003\u0005\u0006\u0005",
    "F\n\u0005\r\u0005\u000e\u0005G\u0003\u0005\u0006\u0005K\n\u0005\r\u0005",
    "\u000e\u0005L\u0006\u0005O\n\u0005\r\u0005\u000e\u0005P\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u0006V\n\u0006\u0003\u0006\u0005\u0006",
    "Y\n\u0006\u0003\u0006\u0002\u0002\u0007\u0002\u0004\u0006\b\n\u0002",
    "\u0002\u0002g\u0002\f\u0003\u0002\u0002\u0002\u0004\u0010\u0003\u0002",
    "\u0002\u0002\u0006B\u0003\u0002\u0002\u0002\bN\u0003\u0002\u0002\u0002",
    "\nX\u0003\u0002\u0002\u0002\f\r\u0005\u0004\u0003\u0002\r\u000e\u0007",
    "\u0002\u0002\u0003\u000e\u0003\u0003\u0002\u0002\u0002\u000f\u0011\u0007",
    "\b\u0002\u0002\u0010\u000f\u0003\u0002\u0002\u0002\u0011\u0012\u0003",
    "\u0002\u0002\u0002\u0012\u0010\u0003\u0002\u0002\u0002\u0012\u0013\u0003",
    "\u0002\u0002\u0002\u0013\u0014\u0003\u0002\u0002\u0002\u0014\u0016\u0007",
    "\u0003\u0002\u0002\u0015\u0017\u0005\u0006\u0004\u0002\u0016\u0015\u0003",
    "\u0002\u0002\u0002\u0017\u0018\u0003\u0002\u0002\u0002\u0018\u0016\u0003",
    "\u0002\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002\u0019\u0005\u0003",
    "\u0002\u0002\u0002\u001a\u001c\u0007\u0006\u0002\u0002\u001b\u001a\u0003",
    "\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002\u0002\u001d\u001b\u0003",
    "\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e\"\u0003",
    "\u0002\u0002\u0002\u001f!\u0005\n\u0006\u0002 \u001f\u0003\u0002\u0002",
    "\u0002!$\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002\"#\u0003",
    "\u0002\u0002\u0002#C\u0003\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002",
    "%)\u0007\u0004\u0002\u0002&(\u0005\n\u0006\u0002\'&\u0003\u0002\u0002",
    "\u0002(+\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002)*\u0003",
    "\u0002\u0002\u0002*C\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002",
    ",.\u0007\b\u0002\u0002-,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002",
    "\u0002/-\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002\u000204\u0003\u0002",
    "\u0002\u000213\u0005\n\u0006\u000221\u0003\u0002\u0002\u000236\u0003",
    "\u0002\u0002\u000242\u0003\u0002\u0002\u000245\u0003\u0002\u0002\u0002",
    "5C\u0003\u0002\u0002\u000264\u0003\u0002\u0002\u000279\u0005\b\u0005",
    "\u000287\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:8\u0003\u0002",
    "\u0002\u0002:;\u0003\u0002\u0002\u0002;?\u0003\u0002\u0002\u0002<>\u0005",
    "\n\u0006\u0002=<\u0003\u0002\u0002\u0002>A\u0003\u0002\u0002\u0002?",
    "=\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@C\u0003\u0002\u0002",
    "\u0002A?\u0003\u0002\u0002\u0002B\u001b\u0003\u0002\u0002\u0002B%\u0003",
    "\u0002\u0002\u0002B-\u0003\u0002\u0002\u0002B8\u0003\u0002\u0002\u0002",
    "C\u0007\u0003\u0002\u0002\u0002DF\u0007\b\u0002\u0002ED\u0003\u0002",
    "\u0002\u0002FG\u0003\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002GH\u0003",
    "\u0002\u0002\u0002HO\u0003\u0002\u0002\u0002IK\u0007\u0006\u0002\u0002",
    "JI\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002",
    "\u0002LM\u0003\u0002\u0002\u0002MO\u0003\u0002\u0002\u0002NE\u0003\u0002",
    "\u0002\u0002NJ\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002PN\u0003",
    "\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002Q\t\u0003\u0002\u0002\u0002",
    "RS\u0007\u0005\u0002\u0002SU\u0005\u0006\u0004\u0002TV\u0005\u0004\u0003",
    "\u0002UT\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002VY\u0003\u0002",
    "\u0002\u0002WY\u0005\u0004\u0003\u0002XR\u0003\u0002\u0002\u0002XW\u0003",
    "\u0002\u0002\u0002Y\u000b\u0003\u0002\u0002\u0002\u0012\u0012\u0018",
    "\u001d\")/4:?BGLNPUX"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'\u2192'", "'\u03BB'", "'|'" ];

var symbolicNames = [ null, "ARROW", "LAMBDA", "VERTBAR", "WORDORDIG", "LOWW", 
                      "UPPW", "DIGITS", "WS" ];

var ruleNames =  [ "compilationUnit", "initialSetence", "setenses", "wordComplex", 
                   "moreSetences" ];

function grammarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

grammarParser.prototype = Object.create(antlr4.Parser.prototype);
grammarParser.prototype.constructor = grammarParser;

Object.defineProperty(grammarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

grammarParser.EOF = antlr4.Token.EOF;
grammarParser.ARROW = 1;
grammarParser.LAMBDA = 2;
grammarParser.VERTBAR = 3;
grammarParser.WORDORDIG = 4;
grammarParser.LOWW = 5;
grammarParser.UPPW = 6;
grammarParser.DIGITS = 7;
grammarParser.WS = 8;

grammarParser.RULE_compilationUnit = 0;
grammarParser.RULE_initialSetence = 1;
grammarParser.RULE_setenses = 2;
grammarParser.RULE_wordComplex = 3;
grammarParser.RULE_moreSetences = 4;

function CompilationUnitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarParser.RULE_compilationUnit;
    return this;
}

CompilationUnitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompilationUnitContext.prototype.constructor = CompilationUnitContext;

CompilationUnitContext.prototype.initialSetence = function() {
    return this.getTypedRuleContext(InitialSetenceContext,0);
};

CompilationUnitContext.prototype.EOF = function() {
    return this.getToken(grammarParser.EOF, 0);
};

CompilationUnitContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarParserListener ) {
        listener.enterCompilationUnit(this);
	}
};

CompilationUnitContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarParserListener ) {
        listener.exitCompilationUnit(this);
	}
};




grammarParser.CompilationUnitContext = CompilationUnitContext;

grammarParser.prototype.compilationUnit = function() {

    var localctx = new CompilationUnitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, grammarParser.RULE_compilationUnit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        this.initialSetence();
        this.state = 11;
        this.match(grammarParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InitialSetenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarParser.RULE_initialSetence;
    return this;
}

InitialSetenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InitialSetenceContext.prototype.constructor = InitialSetenceContext;

InitialSetenceContext.prototype.ARROW = function() {
    return this.getToken(grammarParser.ARROW, 0);
};

InitialSetenceContext.prototype.UPPW = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(grammarParser.UPPW);
    } else {
        return this.getToken(grammarParser.UPPW, i);
    }
};


InitialSetenceContext.prototype.setenses = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SetensesContext);
    } else {
        return this.getTypedRuleContext(SetensesContext,i);
    }
};

InitialSetenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarParserListener ) {
        listener.enterInitialSetence(this);
	}
};

InitialSetenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarParserListener ) {
        listener.exitInitialSetence(this);
	}
};




grammarParser.InitialSetenceContext = InitialSetenceContext;

grammarParser.prototype.initialSetence = function() {

    var localctx = new InitialSetenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, grammarParser.RULE_initialSetence);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 14; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 13;
            this.match(grammarParser.UPPW);
            this.state = 16; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===grammarParser.UPPW);
        this.state = 18;
        this.match(grammarParser.ARROW);
        this.state = 20; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 19;
        		this.setenses();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 22; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SetensesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarParser.RULE_setenses;
    return this;
}

SetensesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetensesContext.prototype.constructor = SetensesContext;

SetensesContext.prototype.WORDORDIG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(grammarParser.WORDORDIG);
    } else {
        return this.getToken(grammarParser.WORDORDIG, i);
    }
};


SetensesContext.prototype.moreSetences = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MoreSetencesContext);
    } else {
        return this.getTypedRuleContext(MoreSetencesContext,i);
    }
};

SetensesContext.prototype.LAMBDA = function() {
    return this.getToken(grammarParser.LAMBDA, 0);
};

SetensesContext.prototype.UPPW = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(grammarParser.UPPW);
    } else {
        return this.getToken(grammarParser.UPPW, i);
    }
};


SetensesContext.prototype.wordComplex = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WordComplexContext);
    } else {
        return this.getTypedRuleContext(WordComplexContext,i);
    }
};

SetensesContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarParserListener ) {
        listener.enterSetenses(this);
	}
};

SetensesContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarParserListener ) {
        listener.exitSetenses(this);
	}
};




grammarParser.SetensesContext = SetensesContext;

grammarParser.prototype.setenses = function() {

    var localctx = new SetensesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, grammarParser.RULE_setenses);
    try {
        this.state = 64;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 25; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 24;
            		this.match(grammarParser.WORDORDIG);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 27; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 32;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 29;
                    this.moreSetences(); 
                }
                this.state = 34;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 35;
            this.match(grammarParser.LAMBDA);
            this.state = 39;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 36;
                    this.moreSetences(); 
                }
                this.state = 41;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
            }

            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 43; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 42;
            		this.match(grammarParser.UPPW);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 45; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 50;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 47;
                    this.moreSetences(); 
                }
                this.state = 52;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
            }

            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 54; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 53;
            		this.wordComplex();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 56; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,7, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 61;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 58;
                    this.moreSetences(); 
                }
                this.state = 63;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
            }

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WordComplexContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarParser.RULE_wordComplex;
    return this;
}

WordComplexContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WordComplexContext.prototype.constructor = WordComplexContext;

WordComplexContext.prototype.UPPW = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(grammarParser.UPPW);
    } else {
        return this.getToken(grammarParser.UPPW, i);
    }
};


WordComplexContext.prototype.WORDORDIG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(grammarParser.WORDORDIG);
    } else {
        return this.getToken(grammarParser.WORDORDIG, i);
    }
};


WordComplexContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarParserListener ) {
        listener.enterWordComplex(this);
	}
};

WordComplexContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarParserListener ) {
        listener.exitWordComplex(this);
	}
};




grammarParser.WordComplexContext = WordComplexContext;

grammarParser.prototype.wordComplex = function() {

    var localctx = new WordComplexContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, grammarParser.RULE_wordComplex);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 76;
        		this._errHandler.sync(this);
        		switch(this._input.LA(1)) {
        		case grammarParser.UPPW:
        		    this.state = 67; 
        		    this._errHandler.sync(this);
        		    var _alt = 1;
        		    do {
        		    	switch (_alt) {
        		    	case 1:
        		    		this.state = 66;
        		    		this.match(grammarParser.UPPW);
        		    		break;
        		    	default:
        		    		throw new antlr4.error.NoViableAltException(this);
        		    	}
        		    	this.state = 69; 
        		    	this._errHandler.sync(this);
        		    	_alt = this._interp.adaptivePredict(this._input,10, this._ctx);
        		    } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        		    break;
        		case grammarParser.WORDORDIG:
        		    this.state = 72; 
        		    this._errHandler.sync(this);
        		    var _alt = 1;
        		    do {
        		    	switch (_alt) {
        		    	case 1:
        		    		this.state = 71;
        		    		this.match(grammarParser.WORDORDIG);
        		    		break;
        		    	default:
        		    		throw new antlr4.error.NoViableAltException(this);
        		    	}
        		    	this.state = 74; 
        		    	this._errHandler.sync(this);
        		    	_alt = this._interp.adaptivePredict(this._input,11, this._ctx);
        		    } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        		    break;
        		default:
        		    throw new antlr4.error.NoViableAltException(this);
        		}
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 78; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,13, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MoreSetencesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = grammarParser.RULE_moreSetences;
    return this;
}

MoreSetencesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MoreSetencesContext.prototype.constructor = MoreSetencesContext;

MoreSetencesContext.prototype.VERTBAR = function() {
    return this.getToken(grammarParser.VERTBAR, 0);
};

MoreSetencesContext.prototype.setenses = function() {
    return this.getTypedRuleContext(SetensesContext,0);
};

MoreSetencesContext.prototype.initialSetence = function() {
    return this.getTypedRuleContext(InitialSetenceContext,0);
};

MoreSetencesContext.prototype.enterRule = function(listener) {
    if(listener instanceof grammarParserListener ) {
        listener.enterMoreSetences(this);
	}
};

MoreSetencesContext.prototype.exitRule = function(listener) {
    if(listener instanceof grammarParserListener ) {
        listener.exitMoreSetences(this);
	}
};




grammarParser.MoreSetencesContext = MoreSetencesContext;

grammarParser.prototype.moreSetences = function() {

    var localctx = new MoreSetencesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, grammarParser.RULE_moreSetences);
    try {
        this.state = 86;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case grammarParser.VERTBAR:
            this.enterOuterAlt(localctx, 1);
            this.state = 80;
            this.match(grammarParser.VERTBAR);
            this.state = 81;
            this.setenses();
            this.state = 83;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
            if(la_===1) {
                this.state = 82;
                this.initialSetence();

            }
            break;
        case grammarParser.UPPW:
            this.enterOuterAlt(localctx, 2);
            this.state = 85;
            this.initialSetence();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.grammarParser = grammarParser;
