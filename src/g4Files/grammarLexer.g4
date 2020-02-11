lexer grammar grammarLexer;

ARROW: '→';
LAMBDA: 'λ';
VERTBAR: '|';
WORDORDIG: (LOWW | DIGITS)+;
LOWW: 'a'..'z';
UPPW: 'A'..'Z';
DIGITS: [0-9] ([0-9_]* [0-9])?;

WS: [ \t\r\n\u000C]+ -> channel(HIDDEN);