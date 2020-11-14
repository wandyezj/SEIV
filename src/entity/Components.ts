import { Component } from "./Component";

import {listWithoutDuplicateElements} from "@wandyezj/standard-node"

export class Components {
    constructor(public readonly components: Component[]) {
    }

    get names() {
        return this.components.map((item) => item.name);
    }

    get generalGroups() {
        const elements = listWithoutDuplicateElements(this.components.map((item) => item.generalGroup));
        elements.sort();
        return elements;
    }

    getComponentsInGroup(group: string): Component[] {
        return this.components.filter(item => item.generalGroup === group);
    }
}