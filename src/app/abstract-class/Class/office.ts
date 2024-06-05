import { Building } from "./building";

export class Office extends Building{
    constructor(override name:string, override height:number, public N:number){
        super(name, height);
        if (height < 0) {
            throw new Error('Height must be a non-negative number');
        }
    }
    override show(): string {
        return "Це офіс " + this.name + ". Кількість поверхів: " + this.N  + "\n" +  super.show();
    }
    override foundationHeight() {
        this.height = 0.05 * this.N;
    }
}