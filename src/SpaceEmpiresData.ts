import {readTextKeyValueGroups} from "./readTextKeyValueGroups";
import {Component} from "./entity/Component";
import {Components} from "./entity/Components";
import * as fs from 'fs';
import { SpaceEmpiresDirectory } from "./SpaceEmpiresDirectory";

function readFile(path: string): string {
    return fs.readFileSync(path, "utf8");
}

export class SpaceEmpiresData {
    constructor(private se: SpaceEmpiresDirectory) {
    }

    get components(): Components {
        const text = readFile(this.se.componentData);
        const groups = readTextKeyValueGroups(text);
        const components = groups.map((group) => new Component(group));
        return new Components(components);
    };
}