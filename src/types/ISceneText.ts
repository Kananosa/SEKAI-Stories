import * as PIXI from "pixi.js";

export default interface ISceneText {
    sceneTextContainer: PIXI.Container;
    type: {
        middle: PIXI.Container;
        topLeft: PIXI.Container;
    };
    text: PIXI.Text[];
    textString: string;
    variant: string;
    visible: boolean;
}
