import { Building } from "./building";

export class Office extends Building{
    constructor(override name:string, override height:number, public N:number){
        super(name, height);
    }
    override show(): string {
        return "Це офіс " + this.name + ". Кількість поверхів: " + this.N  + "\n" +  super.show();
    }
    override foundationHeight() {
        this.height = 0.05 * this.N;
    }
}