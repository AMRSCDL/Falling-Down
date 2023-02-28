gdjs.Start_32ScreenCode = {};
gdjs.Start_32ScreenCode.GDNewSpriteObjects1= [];
gdjs.Start_32ScreenCode.GDNewSpriteObjects2= [];
gdjs.Start_32ScreenCode.GDNewSprite2Objects1= [];
gdjs.Start_32ScreenCode.GDNewSprite2Objects2= [];
gdjs.Start_32ScreenCode.GDNewSprite3Objects1= [];
gdjs.Start_32ScreenCode.GDNewSprite3Objects2= [];
gdjs.Start_32ScreenCode.GDStartObjects1= [];
gdjs.Start_32ScreenCode.GDStartObjects2= [];
gdjs.Start_32ScreenCode.GDxObjects1= [];
gdjs.Start_32ScreenCode.GDxObjects2= [];

gdjs.Start_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Start_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Start_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Start_32ScreenCode.condition2IsTrue_0 = {val:false};
gdjs.Start_32ScreenCode.conditionTrue_1 = {val:false};
gdjs.Start_32ScreenCode.condition0IsTrue_1 = {val:false};
gdjs.Start_32ScreenCode.condition1IsTrue_1 = {val:false};
gdjs.Start_32ScreenCode.condition2IsTrue_1 = {val:false};


gdjs.Start_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "nokiajam music.mp3", true, 25, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Start_32ScreenCode.GDStartObjects1);
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDStartObjects1[i].getBehavior("Flash").Flash(20000000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Start_32ScreenCode.condition1IsTrue_0.val = false;
{
{gdjs.Start_32ScreenCode.conditionTrue_1 = gdjs.Start_32ScreenCode.condition0IsTrue_0;
gdjs.Start_32ScreenCode.condition0IsTrue_1.val = false;
gdjs.Start_32ScreenCode.condition1IsTrue_1.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num0");
if( gdjs.Start_32ScreenCode.condition0IsTrue_1.val ) {
    gdjs.Start_32ScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.Start_32ScreenCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad0");
if( gdjs.Start_32ScreenCode.condition1IsTrue_1.val ) {
    gdjs.Start_32ScreenCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Start_32ScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.Start_32ScreenCode.conditionTrue_1 = gdjs.Start_32ScreenCode.condition1IsTrue_0;
gdjs.Start_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12499564);
}
}}
if (gdjs.Start_32ScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main game scene", false);
}}

}


{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Start_32ScreenCode.condition1IsTrue_0.val = false;
{
{gdjs.Start_32ScreenCode.conditionTrue_1 = gdjs.Start_32ScreenCode.condition0IsTrue_0;
gdjs.Start_32ScreenCode.condition0IsTrue_1.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if( gdjs.Start_32ScreenCode.condition0IsTrue_1.val ) {
    gdjs.Start_32ScreenCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Start_32ScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.Start_32ScreenCode.conditionTrue_1 = gdjs.Start_32ScreenCode.condition1IsTrue_0;
gdjs.Start_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8352916);
}
}}
if (gdjs.Start_32ScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "About", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("x"), gdjs.Start_32ScreenCode.GDxObjects1);
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDxObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDxObjects1[i].getBehavior("Flash").Flash(20000000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.Start_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32ScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.Start_32ScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.Start_32ScreenCode.GDNewSprite2Objects1.length = 0;
gdjs.Start_32ScreenCode.GDNewSprite2Objects2.length = 0;
gdjs.Start_32ScreenCode.GDNewSprite3Objects1.length = 0;
gdjs.Start_32ScreenCode.GDNewSprite3Objects2.length = 0;
gdjs.Start_32ScreenCode.GDStartObjects1.length = 0;
gdjs.Start_32ScreenCode.GDStartObjects2.length = 0;
gdjs.Start_32ScreenCode.GDxObjects1.length = 0;
gdjs.Start_32ScreenCode.GDxObjects2.length = 0;

gdjs.Start_32ScreenCode.eventsList0(runtimeScene);

return;

}

gdjs['Start_32ScreenCode'] = gdjs.Start_32ScreenCode;
