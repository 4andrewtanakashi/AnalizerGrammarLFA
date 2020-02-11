parser grammar grammarParser;

options { tokenVocab=grammarLexer; }

compilationUnit: initialSetence EOF ;

initialSetence: UPPW+ ARROW setenses+ ;

setenses: WORDORDIG+ moreSetences*
            | LAMBDA moreSetences*
            | UPPW+ moreSetences*
            | wordComplex+ moreSetences*
            ;

wordComplex: (UPPW+ | WORDORDIG+)+ ;

moreSetences: VERTBAR setenses initialSetence?
                | initialSetence
                ;