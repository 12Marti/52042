import CLexer from "./generated/CLexer.js";
import CParser from "./generated/CParser.js";
import { CustomCListener } from "./CustomCListener.js";
import { CustomCVisitor } from "./CustomCVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';

class SyntaxErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.syntaxErrors = 0;
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.syntaxErrors++;
        console.error(`Error de sintaxis en línea ${line}, columna ${column}: ${msg}`);
    }
}

async function main() {
    
    let input;

    // Intento leer la entrada desde el archivo input - en forma sincrona.
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena(); // Simula lectura síncrona
        console.log(input);
    }
    

    // Proceso la entrada con el analizador e imprimo el arbol de analisis en formato texto
    let inputStream = CharStreams.fromString(input);
    let lexer = new CLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new CParser(tokenStream);
    const errorListener = new SyntaxErrorListener();
    parser.removeErrorListeners(); // Quita los listeners por defecto
    parser.addErrorListener(errorListener);

    let tree = parser.prog();
        
    // Verifico si se produjeron errores
    if (errorListener.syntaxErrors > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);
        // Utilizo un listener y un walker para recorrer el arbol e indicar cada vez que reconoce una sentencia (stat)
        //const listener = new CustomCalculatorListener();
        // ParseTreeWalker.DEFAULT.walk(listener, tree);
        // Utilizo un visitor para visitar los nodos que me interesan de mi arbol
    }

    let initialCD = 1;
    const match = input.match(/while\s*\(\s*([01])\s*\)/);
    if (match) {
        initialCD = parseInt(match[1], 10);
    }

    const visitor = new CustomCVisitor(initialCD);

    visitor.visit(tree);

    while (visitor.CD !== 0 && errorListener.syntaxErrors === 0) {
       visitor.visit(tree);
       const userInput = await preguntar("Si quiere finalizar la instrucción ingrese la palabra break, de lo contrario coloque cualquier cosa: ");
        if (userInput.trim() === "break") {
            visitor.CD = 0;
        }
    }
    
}
function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese las instrucciones que desee: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}
function preguntar(mensaje) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => {
        rl.question(mensaje, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Ejecuta la función principal
main();
