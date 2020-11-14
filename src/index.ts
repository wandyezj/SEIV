

// Read Space Empires IV files

// Generate a website that can be browsed from the information


function generateHtml(rootDirectory: string) {
    const spaceEmpiresDirectory = new SpaceEmpiresDirectory(rootDirectory);
    const spaceEmpiresData = new SpaceEmpiresData(spaceEmpiresDirectory);

    const components = spaceEmpiresData.components;

    // components.components.forEach((component) => {
    //     console.log(component.name);
    // });

    console.log(
        `${components.generalGroups.join("\n")}

        Weapons:
        ${components.getComponentsInGroup("Weapons").map(i => i.name).join("\n")}
        `);

    console.log()

}


import * as path from 'path';
import { SpaceEmpiresData } from './SpaceEmpiresData';
import { SpaceEmpiresDirectory } from './SpaceEmpiresDirectory';
function run() {
    // repository is the source of the SEIV game files
    const repository = process.env["r"];

    if (repository === undefined) {
        console.log("define r");
        return;
    }

    const rootDirectory = path.join(repository, "SEIV", "se4");
    generateHtml(rootDirectory);
}
run();