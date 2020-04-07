// Generated from grammarParser.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarParserListener = require('./grammarParserListener').grammarParserListener;
var grammarFileName = "grammarParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\fQ\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0006\u0002\u000e",
    "\n\u0002\r\u0002\u000e\u0002\u000f\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0006\u0003\u0015\n\u0003\r\u0003\u000e\u0003\u0016\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003\u001c\n\u0003\u0003\u0004\u0006\u0004",
    "\u001f\n\u0004\r\u0004\u000e\u0004 \u0003\u0004\u0007\u0004$\n\u0004",
    "\f\u0004\u000e\u0004\'\u000b\u0004\u0003\u0004\u0003\u0004\u0007\u0004",
    "+\n\u0004\f\u0004\u000e\u0004.\u000b\u0004\u0003\u0004\u0006\u00041",
    "\n\u0004\r\u0004\u000e\u00042\u0003\u0004\u0007\u00046\n\u0004\f\u0004",
    "\u000e\u00049\u000b\u0004\u0003\u0004\u0003\u0004\u0007\u0004=\n\u0004",
    "\f\u0004\u000e\u0004@\u000b\u0004\u0005\u0004B\n\u0004\u0003\u0005\u0006",
    "\u0005E\n\u0005\r\u0005\u000e\u0005F\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006L\n\u0006\u0003\u0006\u0005\u0006O\n\u0006\u0003\u0006\u0002",
    "\u0002\u0007\u0002\u0004\u0006\b\n\u0002\u0003\u0005\u0002\u0006\u0006",
    "\b\b\n\n\u0002Z\u0002\r\u0003\u0002\u0002\u0002\u0004\u0014\u0003\u0002",
    "\u0002\u0002\u0006A\u0003\u0002\u0002\u0002\bD\u0003\u0002\u0002\u0002",
    "\nN\u0003\u0002\u0002\u0002\f\u000e\u0005\u0004\u0003\u0002\r\f\u0003",
    "\u0002\u0002\u0002\u000e\u000f\u0003\u0002\u0002\u0002\u000f\r\u0003",
    "\u0002\u0002\u0002\u000f\u0010\u0003\u0002\u0002\u0002\u0010\u0011\u0003",
    "\u0002\u0002\u0002\u0011\u0012\u0007\u0002\u0002\u0003\u0012\u0003\u0003",
    "\u0002\u0002\u0002\u0013\u0015\u0005\b\u0005\u0002\u0014\u0013\u0003",
    "\u0002\u0002\u0002\u0015\u0016\u0003\u0002\u0002\u0002\u0016\u0014\u0003",
    "\u0002\u0002\u0002\u0016\u0017\u0003\u0002\u0002\u0002\u0017\u0018\u0003",
    "\u0002\u0002\u0002\u0018\u0019\u0007\u0003\u0002\u0002\u0019\u001b\u0005",
    "\u0006\u0004\u0002\u001a\u001c\u0007\u000b\u0002\u0002\u001b\u001a\u0003",
    "\u0002\u0002\u0002\u001b\u001c\u0003\u0002\u0002\u0002\u001c\u0005\u0003",
    "\u0002\u0002\u0002\u001d\u001f\u0007\u0006\u0002\u0002\u001e\u001d\u0003",
    "\u0002\u0002\u0002\u001f \u0003\u0002\u0002\u0002 \u001e\u0003\u0002",
    "\u0002\u0002 !\u0003\u0002\u0002\u0002!%\u0003\u0002\u0002\u0002\"$",
    "\u0005\n\u0006\u0002#\"\u0003\u0002\u0002\u0002$\'\u0003\u0002\u0002",
    "\u0002%#\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&B\u0003\u0002",
    "\u0002\u0002\'%\u0003\u0002\u0002\u0002(,\u0007\u0004\u0002\u0002)+",
    "\u0005\n\u0006\u0002*)\u0003\u0002\u0002\u0002+.\u0003\u0002\u0002\u0002",
    ",*\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-B\u0003\u0002\u0002",
    "\u0002.,\u0003\u0002\u0002\u0002/1\u0007\b\u0002\u00020/\u0003\u0002",
    "\u0002\u000212\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u000223\u0003",
    "\u0002\u0002\u000237\u0003\u0002\u0002\u000246\u0005\n\u0006\u00025",
    "4\u0003\u0002\u0002\u000269\u0003\u0002\u0002\u000275\u0003\u0002\u0002",
    "\u000278\u0003\u0002\u0002\u00028B\u0003\u0002\u0002\u000297\u0003\u0002",
    "\u0002\u0002:>\u0005\b\u0005\u0002;=\u0005\n\u0006\u0002<;\u0003\u0002",
    "\u0002\u0002=@\u0003\u0002\u0002\u0002><\u0003\u0002\u0002\u0002>?\u0003",
    "\u0002\u0002\u0002?B\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002",
    "A\u001e\u0003\u0002\u0002\u0002A(\u0003\u0002\u0002\u0002A0\u0003\u0002",
    "\u0002\u0002A:\u0003\u0002\u0002\u0002B\u0007\u0003\u0002\u0002\u0002",
    "CE\t\u0002\u0002\u0002DC\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002",
    "\u0002FD\u0003\u0002\u0002\u0002FG\u0003\u0002\u0002\u0002G\t\u0003",
    "\u0002\u0002\u0002HI\u0007\u0005\u0002\u0002IK\u0005\u0006\u0004\u0002",
    "JL\u0005\u0004\u0003\u0002KJ\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002",
    "\u0002LO\u0003\u0002\u0002\u0002MO\u0005\u0004\u0003\u0002NH\u0003\u0002",
    "\u0002\u0002NM\u0003\u0002\u0002\u0002O\u000b\u0003\u0002\u0002\u0002",
    "\u000f\u000f\u0016\u001b %,27>AFKN"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'\u2192'", "'\u03BB'", "'|'" ];

var symbolicNames = [ null, "ARROW", "LAMBDA", "PIPE", "WORDORDIG", "LOWW", 
                      "UPPW", "DIGITS", "SYMBOLS", "NEWLINE", "WS" ];

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
grammarParser.PIPE = 3;
grammarParser.WORDORDIG = 4;
grammarParser.LOWW = 5;
grammarParser.UPPW = 6;
grammarParser.DIGITS = 7;
grammarParser.SYMBOLS = 8;
grammarParser.NEWLINE = 9;
grammarParser.WS = 10;

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

CompilationUnitContext.prototype.EOF = function() {
    return this.getToken(grammarParser.EOF, 0);
};

CompilationUnitContext.prototype.initialSetence = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InitialSetenceContext);
    } else {
        return this.getTypedRuleContext(InitialSetenceContext,i);
    }
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
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 11; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 10;
            this.initialSetence();
            this.state = 13; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << grammarParser.WORDORDIG) | (1 << grammarParser.UPPW) | (1 << grammarParser.SYMBOLS))) !== 0));
        this.state = 15;
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

InitialSetenceContext.prototype.setenses = function() {
    return this.getTypedRuleContext(SetensesContext,0);
};

InitialSetenceContext.prototype.wordComplex = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WordComplexContext);
    } else {
        return this.getTypedRuleContext(WordComplexContext,i);
    }
};

InitialSetenceContext.prototype.NEWLINE = function() {
    return this.getToken(grammarParser.NEWLINE, 0);
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
        this.state = 18; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 17;
            this.wordComplex();
            this.state = 20; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << grammarParser.WORDORDIG) | (1 << grammarParser.UPPW) | (1 << grammarParser.SYMBOLS))) !== 0));
        this.state = 22;
        this.match(grammarParser.ARROW);
        this.state = 23;
        this.setenses();
        this.state = 25;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        if(la_===1) {
            this.state = 24;
            this.match(grammarParser.NEWLINE);

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


SetensesContext.prototype.wordComplex = function() {
    return this.getTypedRuleContext(WordComplexContext,0);
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
        this.state = 63;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 28; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 27;
            		this.match(grammarParser.WORDORDIG);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 30; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 35;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 32;
                    this.moreSetences(); 
                }
                this.state = 37;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 38;
            this.match(grammarParser.LAMBDA);
            this.state = 42;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 39;
                    this.moreSetences(); 
                }
                this.state = 44;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
            }

            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 46; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 45;
            		this.match(grammarParser.UPPW);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 48; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,6, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 53;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 50;
                    this.moreSetences(); 
                }
                this.state = 55;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
            }

            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 56;
            this.wordComplex();
            this.state = 60;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 57;
                    this.moreSetences(); 
                }
                this.state = 62;
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


WordComplexContext.prototype.SYMBOLS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(grammarParser.SYMBOLS);
    } else {
        return this.getToken(grammarParser.SYMBOLS, i);
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
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 65;
        		_la = this._input.LA(1);
        		if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << grammarParser.WORDORDIG) | (1 << grammarParser.UPPW) | (1 << grammarParser.SYMBOLS))) !== 0))) {
        		this._errHandler.recoverInline(this);
        		}
        		else {
        			this._errHandler.reportMatch(this);
        		    this.consume();
        		}
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 68; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,10, this._ctx);
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

MoreSetencesContext.prototype.PIPE = function() {
    return this.getToken(grammarParser.PIPE, 0);
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
        this.state = 76;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case grammarParser.PIPE:
            this.enterOuterAlt(localctx, 1);
            this.state = 70;
            this.match(grammarParser.PIPE);
            this.state = 71;
            this.setenses();
            this.state = 73;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
            if(la_===1) {
                this.state = 72;
                this.initialSetence();

            }
            break;
        case grammarParser.WORDORDIG:
        case grammarParser.UPPW:
        case grammarParser.SYMBOLS:
            this.enterOuterAlt(localctx, 2);
            this.state = 75;
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
