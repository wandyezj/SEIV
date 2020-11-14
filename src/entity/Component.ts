export class Component {
    constructor(public readonly values: Map<string, string>) {

    }

    // Getters for various components

    private value(key: string): string | undefined {
        return this.values.get(key);
    }

    get name() {
        return this.value("Name");
    }

    get picNum() {
        return this.value("Pic Num");
    }

    get generalGroup() {
        return this.value("General Group");
    }

    get weaponTarget() {
        return this.value("Weapon Target");
    }

    get weaponDamageAtRange() {
        return this.value("Weapon Damage At Rng");
    }

    get weaponDamage() {
        const damage= this.weaponDamageAtRange;
        if (damage) {
            return damage.split(" ").map(i => Number.parseInt(i));
        }

        return undefined;
    }
    
}
