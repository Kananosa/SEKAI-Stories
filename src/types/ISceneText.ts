import * as PIXI from "pixi.js";

export default interface ISceneText {
    sceneTextContainer: PIXI.Container;
    type: {
        default: PIXI.Container;
        classic: PIXI.Container;
    };
    variant: {
        middle: PIXI.Container[];
        topLeft: PIXI.Container[];
    };
    text: PIXI.Text[];
    textString: string;
    variantSelected: string;
    typeSelected: string;
    visible: boolean;
}
