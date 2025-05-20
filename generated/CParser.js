// Generated from c:/Users/marti/ssl-c.-antlr/C.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CListener from './CListener.js';
import CVisitor from './CVisitor.js';

const serializedATN = [4,1,16,70,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,1,4,1,23,8,1,11,1,
12,1,24,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,4,3,38,8,3,11,3,12,3,
39,1,3,3,3,43,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,53,8,4,1,5,1,5,1,5,
1,5,1,6,4,6,60,8,6,11,6,12,6,61,1,7,1,7,1,7,1,7,3,7,68,8,7,1,7,0,0,8,0,2,
4,6,8,10,12,14,0,0,70,0,17,1,0,0,0,2,22,1,0,0,0,4,26,1,0,0,0,6,42,1,0,0,
0,8,52,1,0,0,0,10,54,1,0,0,0,12,59,1,0,0,0,14,67,1,0,0,0,16,18,3,2,1,0,17,
16,1,0,0,0,18,19,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,1,1,0,0,0,21,23,
3,4,2,0,22,21,1,0,0,0,23,24,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,3,1,0,
0,0,26,27,5,8,0,0,27,28,5,3,0,0,28,29,3,6,3,0,29,30,5,4,0,0,30,31,5,9,0,
0,31,32,5,1,0,0,32,33,5,12,0,0,33,34,5,2,0,0,34,35,5,7,0,0,35,5,1,0,0,0,
36,38,3,8,4,0,37,36,1,0,0,0,38,39,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,
43,1,0,0,0,41,43,5,16,0,0,42,37,1,0,0,0,42,41,1,0,0,0,43,7,1,0,0,0,44,45,
5,11,0,0,45,46,5,1,0,0,46,47,3,10,5,0,47,48,5,2,0,0,48,49,5,7,0,0,49,53,
1,0,0,0,50,51,5,10,0,0,51,53,5,7,0,0,52,44,1,0,0,0,52,50,1,0,0,0,53,9,1,
0,0,0,54,55,5,6,0,0,55,56,3,12,6,0,56,57,5,6,0,0,57,11,1,0,0,0,58,60,3,14,
7,0,59,58,1,0,0,0,60,61,1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,13,1,0,0,
0,63,68,5,14,0,0,64,68,5,13,0,0,65,68,5,15,0,0,66,68,5,12,0,0,67,63,1,0,
0,0,67,64,1,0,0,0,67,65,1,0,0,0,67,66,1,0,0,0,68,15,1,0,0,0,7,19,24,39,42,
52,61,67];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CParser extends antlr4.Parser {

    static grammarFileName = "C.g4";
    static literalNames = [ null, "'('", "')'", "'{'", "'}'", null, "'\"'", 
                            "';'", "'do'", "'while'", "'break'", "'puts'" ];
    static symbolicNames = [ null, "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
                             "SPACE", "QUOTES", "SEMIC", "DO", "WHILE", 
                             "BREAK", "PUTS", "CD", "INT", "ID", "SIM", 
                             "NEWLINE" ];
    static ruleNames = [ "prog", "instructions", "bucle", "expr", "expr1", 
                         "string", "crts", "c" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CParser.ruleNames;
        this.literalNames = CParser.literalNames;
        this.symbolicNames = CParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.instructions();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===8);
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
	}



	instructions() {
	    let localctx = new InstructionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CParser.RULE_instructions);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 21;
	        		this.bucle();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 24; 
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
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CParser.RULE_bucle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(CParser.DO);
	        this.state = 27;
	        this.match(CParser.LBRACE);
	        this.state = 28;
	        this.expr();
	        this.state = 29;
	        this.match(CParser.RBRACE);
	        this.state = 30;
	        this.match(CParser.WHILE);
	        this.state = 31;
	        this.match(CParser.LPAREN);
	        this.state = 32;
	        this.match(CParser.CD);
	        this.state = 33;
	        this.match(CParser.RPAREN);
	        this.state = 34;
	        this.match(CParser.SEMIC);
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
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CParser.RULE_expr);
	    var _la = 0;
	    try {
	        this.state = 42;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	        case 11:
	            localctx = new ExprListContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 37; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 36;
	                this.expr1();
	                this.state = 39; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===10 || _la===11);
	            break;
	        case 16:
	            localctx = new BlankContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 41;
	            this.match(CParser.NEWLINE);
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
	}



	expr1() {
	    let localctx = new Expr1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CParser.RULE_expr1);
	    try {
	        this.state = 52;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            localctx = new SimpleexprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.match(CParser.PUTS);
	            this.state = 45;
	            this.match(CParser.LPAREN);
	            this.state = 46;
	            this.string();
	            this.state = 47;
	            this.match(CParser.RPAREN);
	            this.state = 48;
	            this.match(CParser.SEMIC);
	            break;
	        case 10:
	            localctx = new BreakContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 50;
	            this.match(CParser.BREAK);
	            this.state = 51;
	            this.match(CParser.SEMIC);
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
	}



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(CParser.QUOTES);
	        this.state = 55;
	        this.crts();
	        this.state = 56;
	        this.match(CParser.QUOTES);
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
	}



	crts() {
	    let localctx = new CrtsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CParser.RULE_crts);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 58;
	            this.c();
	            this.state = 61; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 61440) !== 0));
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
	}



	c() {
	    let localctx = new CContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CParser.RULE_c);
	    try {
	        this.state = 67;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            localctx = new IDContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 63;
	            this.match(CParser.ID);
	            break;
	        case 13:
	            localctx = new INTContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 64;
	            this.match(CParser.INT);
	            break;
	        case 15:
	            localctx = new SIMContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 65;
	            this.match(CParser.SIM);
	            break;
	        case 12:
	            localctx = new CDContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 66;
	            this.match(CParser.CD);
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
	}


}

CParser.EOF = antlr4.Token.EOF;
CParser.LPAREN = 1;
CParser.RPAREN = 2;
CParser.LBRACE = 3;
CParser.RBRACE = 4;
CParser.SPACE = 5;
CParser.QUOTES = 6;
CParser.SEMIC = 7;
CParser.DO = 8;
CParser.WHILE = 9;
CParser.BREAK = 10;
CParser.PUTS = 11;
CParser.CD = 12;
CParser.INT = 13;
CParser.ID = 14;
CParser.SIM = 15;
CParser.NEWLINE = 16;

CParser.RULE_prog = 0;
CParser.RULE_instructions = 1;
CParser.RULE_bucle = 2;
CParser.RULE_expr = 3;
CParser.RULE_expr1 = 4;
CParser.RULE_string = 5;
CParser.RULE_crts = 6;
CParser.RULE_c = 7;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParser.RULE_prog;
    }

	instructions = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstructionsContext);
	    } else {
	        return this.getTypedRuleContext(InstructionsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstructionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParser.RULE_instructions;
    }

	bucle = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BucleContext);
	    } else {
	        return this.getTypedRuleContext(BucleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.enterInstructions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.exitInstructions(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
	        return visitor.visitInstructions(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParser.RULE_bucle;
    }

	DO() {
	    return this.getToken(CParser.DO, 0);
	};

	LBRACE() {
	    return this.getToken(CParser.LBRACE, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RBRACE() {
	    return this.getToken(CParser.RBRACE, 0);
	};

	WHILE() {
	    return this.getToken(CParser.WHILE, 0);
	};

	LPAREN() {
	    return this.getToken(CParser.LPAREN, 0);
	};

	CD() {
	    return this.getToken(CParser.CD, 0);
	};

	RPAREN() {
	    return this.getToken(CParser.RPAREN, 0);
	};

	SEMIC() {
	    return this.getToken(CParser.SEMIC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.enterBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.exitBucle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
	        return visitor.visitBucle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BlankContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NEWLINE() {
	    return this.getToken(CParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.enterBlank(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.exitBlank(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
	        return visitor.visitBlank(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CParser.BlankContext = BlankContext;

class ExprListContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr1 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expr1Context);
	    } else {
	        return this.getTypedRuleContext(Expr1Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.enterExprList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.exitExprList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
	        return visitor.visitExprList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CParser.ExprListContext = ExprListContext;

class Expr1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParser.RULE_expr1;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SimpleexprContext extends Expr1Context {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PUTS() {
	    return this.getToken(CParser.PUTS, 0);
	};

	LPAREN() {
	    return this.getToken(CParser.LPAREN, 0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	RPAREN() {
	    return this.getToken(CParser.RPAREN, 0);
	};

	SEMIC() {
	    return this.getToken(CParser.SEMIC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.enterSimpleexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.exitSimpleexpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
	        return visitor.visitSimpleexpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CParser.SimpleexprContext = SimpleexprContext;

class BreakContext extends Expr1Context {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BREAK() {
	    return this.getToken(CParser.BREAK, 0);
	};

	SEMIC() {
	    return this.getToken(CParser.SEMIC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.enterBreak(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.exitBreak(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
	        return visitor.visitBreak(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CParser.BreakContext = BreakContext;

class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParser.RULE_string;
    }

	QUOTES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CParser.QUOTES);
	    } else {
	        return this.getToken(CParser.QUOTES, i);
	    }
	};


	crts() {
	    return this.getTypedRuleContext(CrtsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.exitString(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CrtsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParser.RULE_crts;
    }

	c = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CContext);
	    } else {
	        return this.getTypedRuleContext(CContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.enterCrts(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.exitCrts(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
	        return visitor.visitCrts(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CParser.RULE_c;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CDContext extends CContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CD() {
	    return this.getToken(CParser.CD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.enterCD(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.exitCD(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
	        return visitor.visitCD(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CParser.CDContext = CDContext;

class SIMContext extends CContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SIM() {
	    return this.getToken(CParser.SIM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.enterSIM(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.exitSIM(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
	        return visitor.visitSIM(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CParser.SIMContext = SIMContext;

class IDContext extends CContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.enterID(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.exitID(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
	        return visitor.visitID(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CParser.IDContext = IDContext;

class INTContext extends CContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(CParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.enterINT(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CListener ) {
	        listener.exitINT(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CVisitor ) {
	        return visitor.visitINT(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CParser.INTContext = INTContext;


CParser.ProgContext = ProgContext; 
CParser.InstructionsContext = InstructionsContext; 
CParser.BucleContext = BucleContext; 
CParser.ExprContext = ExprContext; 
CParser.Expr1Context = Expr1Context; 
CParser.StringContext = StringContext; 
CParser.CrtsContext = CrtsContext; 
CParser.CContext = CContext; 
