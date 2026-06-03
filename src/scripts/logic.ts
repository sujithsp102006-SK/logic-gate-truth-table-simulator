export let A = false;
export let B = false;

export let currentGate = "AND";

export function setA(value: boolean) {
    A = value;
}

export function setB(value: boolean) {
    B = value;
}

export function setGate(gate: string) {
    currentGate = gate;
}