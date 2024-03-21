export abstract class Building{
    name!: string;
    height?: number;
    constructor(name: string, height?: number){
        if (!name) {
            throw new Error('Name is required for a building.');
        }
        if (height !== undefined && height < 0) {
            throw new Error('Height must be a non-negative number.');
        }
        
        this.name = name;
        this.height = height;
    }
    show(){
        return "Це будівля " + this.name + ". Висота: " + this.height;
    }
    abstract foundationHeight(): any;
}