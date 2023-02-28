gdjs.AboutCode = {};
gdjs.AboutCode.GDNewSpriteObjects1= [];
gdjs.AboutCode.GDNewSpriteObjects2= [];
gdjs.AboutCode.GDNewSprite2Objects1= [];
gdjs.AboutCode.GDNewSprite2Objects2= [];
gdjs.AboutCode.GDNewSprite3Objects1= [];
gdjs.AboutCode.GDNewSprite3Objects2= [];

gdjs.AboutCode.conditionTrue_0 = {val:false};
gdjs.AboutCode.condition0IsTrue_0 = {val:false};
gdjs.AboutCode.condition1IsTrue_0 = {val:false};
gdjs.AboutCode.condition2IsTrue_0 = {val:false};
gdjs.AboutCode.conditionTrue_1 = {val:false};
gdjs.AboutCode.condition0IsTrue_1 = {val:false};
gdjs.AboutCode.condition1IsTrue_1 = {val:false};
gdjs.AboutCode.condition2IsTrue_1 = {val:false};


gdjs.AboutCode.eventsList0 = function(runtimeScene) {

{


gdjs.AboutCode.condition0IsTrue_0.val = false;
gdjs.AboutCode.condition1IsTrue_0.val = false;
{
{gdjs.AboutCode.conditionTrue_1 = gdjs.AboutCode.condition0IsTrue_0;
gdjs.AboutCode.condition0IsTrue_1.val = false;
gdjs.AboutCode.condition1IsTrue_1.val = false;
{
gdjs.AboutCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num0");
if( gdjs.AboutCode.condition0IsTrue_1.val ) {
    gdjs.AboutCode.conditionTrue_1.val = true;
}
}
{
gdjs.AboutCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad0");
if( gdjs.AboutCode.condition1IsTrue_1.val ) {
    gdjs.AboutCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.AboutCode.condition0IsTrue_0.val ) {
{
{gdjs.AboutCode.conditionTrue_1 = gdjs.AboutCode.condition1IsTrue_0;
gdjs.AboutCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8354764);
}
}}
if (gdjs.AboutCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Screen", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.AboutCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.AboutCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.AboutCode.GDNewSprite3Objects1[i].getBehavior("Flash").Flash(20000000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.AboutCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AboutCode.GDNewSpriteObjects1.length = 0;
gdjs.AboutCode.GDNewSpriteObjects2.length = 0;
gdjs.AboutCode.GDNewSprite2Objects1.length = 0;
gdjs.AboutCode.GDNewSprite2Objects2.length = 0;
gdjs.AboutCode.GDNewSprite3Objects1.length = 0;
gdjs.AboutCode.GDNewSprite3Objects2.length = 0;

gdjs.AboutCode.eventsList0(runtimeScene);

return;

}

gdjs['AboutCode'] = gdjs.AboutCode;
