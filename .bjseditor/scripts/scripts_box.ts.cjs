var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../../../OneDrive/Documents/CreatorProjects/src/scripts/box.ts
var box_exports = {};
__export(box_exports, {
  default: () => SceneComponent
});
module.exports = __toCommonJS(box_exports);

// ../../../../OneDrive/Documents/CreatorProjects/src/scripts/logic.ts
var A = false;
var B = false;
var currentGate = "AND";
function setA(value) {
  A = value;
}
__name(setA, "setA");
function setB(value) {
  B = value;
}
__name(setB, "setB");
function setGate(gate) {
  currentGate = gate;
}
__name(setGate, "setGate");

// ../../../../OneDrive/Documents/CreatorProjects/src/scripts/box.ts
var SceneComponent = class {
  constructor(mesh) {
    this.mesh = mesh;
  }
  static {
    __name(this, "SceneComponent");
  }
  onStart() {
    window.addEventListener("keydown", (ev) => {
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
  onUpdate() {
  }
};
