import { Building } from "./building";

export class Factory extends Building{
    constructor(override name:string, override height:number, public G:number){
        super(name, height);
    }
    override show(): string {
        return "Це фабрика " + this.name + ". Кількість цехів: " + this.G + ". \n" +  super.show();
    }
    override foundationHeight() {
        this.height = 0.000002*this.G;
    }
}