import { Building } from "./building";
export class House extends Building {
    constructor(name: string, height: number, public  floors: number) {
      super(name, height);
      if (height < 0) {
        throw new Error('Height must be a non-negative number');
      }
      this.name = name;
      this.height = height;
    }
    override show(): string {
        return "Це житловий будинок " + this.name + ". Кількість поверхів: " + this.floors  + "\n" +  super.show();
    }
    foundationHeight() {
      this.height = 0.1 * this.floors;
    }
  }