import { Mesh } from "@babylonjs/core/Meshes/mesh";

import { IScript } from "babylonjs-editor-tools";

import { A, B, setA, setB } from "./logic";
import { setGate } from "./logic";

export default class SceneComponent implements IScript {

    public constructor(public mesh: Mesh) {}

    public onStart(): void {

        window.addEventListener("keydown", (ev) => {
             if (ev.repeat) {
             return;
             }


    switch (ev.key) {

        case "1":
            setGate("AND");
            console.log("Gate = AND");
            break;

        case "2":
            setGate("OR");
            console.log("Gate = OR");
            break;

        case "3":
            setGate("NOT");
            console.log("Gate = NOT");
            break;

        case "4":
            setGate("NAND");
            console.log("Gate = NAND");
            break;

        case "5":
            setGate("NOR");
            console.log("Gate = NOR");
            break;

        case "6":
            setGate("XOR");
            console.log("Gate = XOR");
            break;

        case "7":
            setGate("XNOR");
            console.log("Gate = XNOR");
            break;
    }

    if (ev.key.toLowerCase() === "q") {
        const newA = !A;
        setA(newA);
        console.log(`A=${newA ? 1 : 0}, B=${B ? 1 : 0}`);
    }

    if (ev.key.toLowerCase() === "e") {
        const newB = !B;
        setB(newB);
        console.log(`A=${A ? 1 : 0}, B=${newB ? 1 : 0}`);
    }
        });
    }

    public onUpdate(): void {

    }
}