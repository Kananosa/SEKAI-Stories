import * as PIXI from "pixi.js";

export default interface ISceneText {
    sceneTextContainer: PIXI.Container;
    type: {
    variant: {
        middle: PIXI.Container;
        topLeft: PIXI.Container;
    };
    text: PIXI.Text[];
    textString: string;
    variantSelected: string;
    visible: boolean;
}
