grammar C;
//gramatica
prog: instructions+;
instructions: bucle+;
bucle: DO LBRACE expr RBRACE WHILE LPAREN CD RPAREN SEMIC;  
expr: expr1+   #exprList
    | NEWLINE #blank
    | BREAK SEMIC   #break
;

expr1: PUTS  LPAREN string RPAREN SEMIC #simpleexpr
    | BREAK SEMIC   #break
;
string: QUOTES crts QUOTES
;
crts: c+;
c: ID   #ID
    | INT   #INT
    | SIM   #SIM
    | CD   #CD
;
// lexemas
LPAREN : '(';
RPAREN : ')';
LBRACE : '{';
RBRACE : '}';
SPACE : [ \t]+ -> skip;
QUOTES : '"';
SEMIC : ';';
DO : 'do';
WHILE : 'while';
BREAK : 'break';
PUTS : 'puts';
CD : [0-1];
INT : [0-9]+;
ID : [a-zA-Z]+;
SIM : [.,!?:;\t];
NEWLINE: '\r'? '\n';