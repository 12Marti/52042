import { Parser } from "antlr4ts";
import CVisitor from "./generated/CVisitor.js";
import  CParser  from "./generated/CParser.js";

class CustomCVisitor extends CVisitor {
    constructor(initialCD=1){
        super();
        this.CD = initialCD;
    }
    visitSimpleexpr(ctx){
        const texto = this.visit(ctx.string());
        console.log(texto);
        return null;
    }
    visitCrts(ctx) {
        return ctx.c().map(child => this.visit(child)).join(' ');
    }
    visitID(ctx) {
        return ctx.getText();
    }
    visitINT(ctx) {
        return ctx.getText();
    }
    visitSIM(ctx) {
        return ctx.getText();
    }
    visitCD(ctx) {
        return ctx.getText();
    }
    visitStat(ctx) {
        console.log("Visiting statement:", ctx.text);
        return super.visitStat(ctx);
    }
    visitString(ctx) {
        return this.visit(ctx.crts()) ;
    }
    visitBreak(ctx) {
        console.log("Has ingresado la instruccion break por lo que se ha finalizado la instruccion");
        this.CD = 0;
        return null;
    }

}

export {CustomCVisitor};