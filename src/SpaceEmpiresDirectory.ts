
import * as path from 'path';
export class SpaceEmpiresDirectory {
    constructor (private rootDirectory: string) {

    }

    get data() {
        return path.join(this.rootDirectory, "Data");
    }

    get pictures() {
        return path.join(this.rootDirectory, "Pictures");
    }

    get componentPictures() {
        return path.join(this.pictures, "Components");
    }

    get componentData() {
        return path.join(this.data, "Components.txt");
    }

    getComponentPicturePath(n: number): string {
        const name = `Comp_${n.toString().padStart(3, "0")}.bmp`;
        return path.join(this.componentPictures, name);
    }
}