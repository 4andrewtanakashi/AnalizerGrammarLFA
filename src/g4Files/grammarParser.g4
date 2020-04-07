parser grammar grammarParser;

options { tokenVocab=grammarLexer; }

compilationUnit: initialSetence+ EOF ;

initialSetence: wordComplex+ ARROW setenses NEWLINE?;

setenses: WORDORDIG+ moreSetences*
            | LAMBDA moreSetences*
            | UPPW+ moreSetences*
            | wordComplex moreSetences*
            ;

wordComplex: (UPPW|WORDORDIG|SYMBOLS)+ ;

moreSetences: PIPE setenses initialSetence?
                | initialSetence
                ;
