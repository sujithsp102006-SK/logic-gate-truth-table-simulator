import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { Color3 } from "@babylonjs/core/Maths/math.color";

import { IScript } from "babylonjs-editor-tools";
import { A, B, currentGate } from "./logic";

export default class LedScript implements IScript {

    public constructor(public mesh: Mesh) {}

    public onStart(): void {

    const material = this.mesh.material as StandardMaterial;

    this.mesh.getScene().registerBeforeRender(() => {

        let output = false;

switch (currentGate) {

    case "AND":
        output = A && B;
        break;

    case "OR":
        output = A || B;
        break;

    case "NOT":
        output = !A;
        break;

    case "NAND":
        output = !(A && B);
        break;

    case "NOR":
        output = !(A || B);
        break;

    case "XOR":
        output = (A !== B);
        break;

    case "XNOR":
        output = (A === B);
        break;
}
// console.log(currentGate, A, B, output);
if (output) {

    material.emissiveColor = Color3.Green();
    material.diffuseColor = Color3.Green();

} else {

    material.emissiveColor = Color3.Black();
    material.diffuseColor = Color3.White();
}
    });
}

    public onUpdate(): void {

    }
}