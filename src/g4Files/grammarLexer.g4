lexer grammar grammarLexer;

ARROW: '→';
LAMBDA: 'λ';
PIPE: '|';
WORDORDIG: (LOWW|DIGITS|SYMBOLS)+;
LOWW: 'a'..'z';
UPPW: 'A'..'Z';
DIGITS: [0-9];
SYMBOLS: '!' | '@' | '#' | '$' | '%' |
'^' | '&' | '*' | '(' | ')' | '_' |
'+' | '=' | '{' | '}' | '[' | ']' |
':' | ';' | ',' | '.' | '?' | '~';

NEWLINE : [\r\n] ;
WS: [ \t]+ -> skip;
