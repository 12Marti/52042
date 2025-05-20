import CListener from "./generated/CListener.js";
import antlr4 from "antlr4";

export class CustomCListener extends CListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);

    }


}