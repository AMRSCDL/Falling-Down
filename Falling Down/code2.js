gdjs.GameOverCode = {};
gdjs.GameOverCode.GDScoreObjects1= [];
gdjs.GameOverCode.GDScoreObjects2= [];
gdjs.GameOverCode.GDNewSpriteObjects1= [];
gdjs.GameOverCode.GDNewSpriteObjects2= [];
gdjs.GameOverCode.GDNewSprite2Objects1= [];
gdjs.GameOverCode.GDNewSprite2Objects2= [];
gdjs.GameOverCode.GDscoretextObjects1= [];
gdjs.GameOverCode.GDscoretextObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};
gdjs.GameOverCode.conditionTrue_1 = {val:false};
gdjs.GameOverCode.condition0IsTrue_1 = {val:false};
gdjs.GameOverCode.condition1IsTrue_1 = {val:false};
gdjs.GameOverCode.condition2IsTrue_1 = {val:false};


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.GameOverCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDScoreObjects1[i].setString("" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


};gdjs.GameOverCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "nokiajam dead2.mp3", false, 75, 1);
}}

}


{


gdjs.GameOverCode.eventsList0(runtimeScene);
}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.condition0IsTrue_1.val = false;
gdjs.GameOverCode.condition1IsTrue_1.val = false;
{
gdjs.GameOverCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num0");
if( gdjs.GameOverCode.condition0IsTrue_1.val ) {
    gdjs.GameOverCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameOverCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad0");
if( gdjs.GameOverCode.condition1IsTrue_1.val ) {
    gdjs.GameOverCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11160828);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main game scene", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.GameOverCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.GameOverCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDNewSprite2Objects1[i].getBehavior("Flash").Flash(20000000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDScoreObjects1.length = 0;
gdjs.GameOverCode.GDScoreObjects2.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects1.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects2.length = 0;
gdjs.GameOverCode.GDNewSprite2Objects1.length = 0;
gdjs.GameOverCode.GDNewSprite2Objects2.length = 0;
gdjs.GameOverCode.GDscoretextObjects1.length = 0;
gdjs.GameOverCode.GDscoretextObjects2.length = 0;

gdjs.GameOverCode.eventsList1(runtimeScene);

return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
