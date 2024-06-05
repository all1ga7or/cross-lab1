import { Building } from "./building";

export class Factory extends Building {
    constructor(override name: string, override height: number, public G: number) {
        super(name, height);
        if (height < 0) {
            throw new Error('Height must be a non-negative number');
        }
    }
    
    override show(): string {
        return "Це фабрика " + this.name + ". Кількість цехів: " + this.G + ". \n" + super.show();
    }

    override foundationHeight() {
        this.height = 2 * this.G;
    }
}
