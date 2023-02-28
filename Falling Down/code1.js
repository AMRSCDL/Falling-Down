gdjs.main_32game_32sceneCode = {};
gdjs.main_32game_32sceneCode.GDmaincharacterObjects1= [];
gdjs.main_32game_32sceneCode.GDmaincharacterObjects2= [];
gdjs.main_32game_32sceneCode.GDmaincharacterObjects3= [];
gdjs.main_32game_32sceneCode.GDenemyObjects1= [];
gdjs.main_32game_32sceneCode.GDenemyObjects2= [];
gdjs.main_32game_32sceneCode.GDenemyObjects3= [];
gdjs.main_32game_32sceneCode.GDenemy2Objects1= [];
gdjs.main_32game_32sceneCode.GDenemy2Objects2= [];
gdjs.main_32game_32sceneCode.GDenemy2Objects3= [];
gdjs.main_32game_32sceneCode.GDenemy3Objects1= [];
gdjs.main_32game_32sceneCode.GDenemy3Objects2= [];
gdjs.main_32game_32sceneCode.GDenemy3Objects3= [];
gdjs.main_32game_32sceneCode.GDenemy4Objects1= [];
gdjs.main_32game_32sceneCode.GDenemy4Objects2= [];
gdjs.main_32game_32sceneCode.GDenemy4Objects3= [];
gdjs.main_32game_32sceneCode.GDspawnerObjects1= [];
gdjs.main_32game_32sceneCode.GDspawnerObjects2= [];
gdjs.main_32game_32sceneCode.GDspawnerObjects3= [];
gdjs.main_32game_32sceneCode.GDspawner2Objects1= [];
gdjs.main_32game_32sceneCode.GDspawner2Objects2= [];
gdjs.main_32game_32sceneCode.GDspawner2Objects3= [];
gdjs.main_32game_32sceneCode.GDspawner3Objects1= [];
gdjs.main_32game_32sceneCode.GDspawner3Objects2= [];
gdjs.main_32game_32sceneCode.GDspawner3Objects3= [];
gdjs.main_32game_32sceneCode.GDspawner4Objects1= [];
gdjs.main_32game_32sceneCode.GDspawner4Objects2= [];
gdjs.main_32game_32sceneCode.GDspawner4Objects3= [];
gdjs.main_32game_32sceneCode.GDrightwallObjects1= [];
gdjs.main_32game_32sceneCode.GDrightwallObjects2= [];
gdjs.main_32game_32sceneCode.GDrightwallObjects3= [];
gdjs.main_32game_32sceneCode.GDleftwallObjects1= [];
gdjs.main_32game_32sceneCode.GDleftwallObjects2= [];
gdjs.main_32game_32sceneCode.GDleftwallObjects3= [];
gdjs.main_32game_32sceneCode.GDNewSpriteObjects1= [];
gdjs.main_32game_32sceneCode.GDNewSpriteObjects2= [];
gdjs.main_32game_32sceneCode.GDNewSpriteObjects3= [];
gdjs.main_32game_32sceneCode.GDcoinObjects1= [];
gdjs.main_32game_32sceneCode.GDcoinObjects2= [];
gdjs.main_32game_32sceneCode.GDcoinObjects3= [];
gdjs.main_32game_32sceneCode.GDcoin2Objects1= [];
gdjs.main_32game_32sceneCode.GDcoin2Objects2= [];
gdjs.main_32game_32sceneCode.GDcoin2Objects3= [];
gdjs.main_32game_32sceneCode.GDcoin3Objects1= [];
gdjs.main_32game_32sceneCode.GDcoin3Objects2= [];
gdjs.main_32game_32sceneCode.GDcoin3Objects3= [];
gdjs.main_32game_32sceneCode.GDcoinspawnerObjects1= [];
gdjs.main_32game_32sceneCode.GDcoinspawnerObjects2= [];
gdjs.main_32game_32sceneCode.GDcoinspawnerObjects3= [];
gdjs.main_32game_32sceneCode.GDcoinspawner2Objects1= [];
gdjs.main_32game_32sceneCode.GDcoinspawner2Objects2= [];
gdjs.main_32game_32sceneCode.GDcoinspawner2Objects3= [];
gdjs.main_32game_32sceneCode.GDcoinspawner3Objects1= [];
gdjs.main_32game_32sceneCode.GDcoinspawner3Objects2= [];
gdjs.main_32game_32sceneCode.GDcoinspawner3Objects3= [];
gdjs.main_32game_32sceneCode.GDScoreObjects1= [];
gdjs.main_32game_32sceneCode.GDScoreObjects2= [];
gdjs.main_32game_32sceneCode.GDScoreObjects3= [];

gdjs.main_32game_32sceneCode.conditionTrue_0 = {val:false};
gdjs.main_32game_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.main_32game_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.main_32game_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.main_32game_32sceneCode.conditionTrue_1 = {val:false};
gdjs.main_32game_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.main_32game_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.main_32game_32sceneCode.condition2IsTrue_1 = {val:false};


gdjs.main_32game_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = false;
gdjs.main_32game_32sceneCode.condition1IsTrue_0.val = false;
{
{gdjs.main_32game_32sceneCode.conditionTrue_1 = gdjs.main_32game_32sceneCode.condition0IsTrue_0;
gdjs.main_32game_32sceneCode.condition0IsTrue_1.val = false;
{
gdjs.main_32game_32sceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.main_32game_32sceneCode.condition0IsTrue_1.val ) {
    gdjs.main_32game_32sceneCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.main_32game_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.main_32game_32sceneCode.conditionTrue_1 = gdjs.main_32game_32sceneCode.condition1IsTrue_0;
gdjs.main_32game_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8397900);
}
}}
if (gdjs.main_32game_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("maincharacter"), gdjs.main_32game_32sceneCode.GDmaincharacterObjects2);
{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDmaincharacterObjects2.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDmaincharacterObjects2[i].putAroundObject(gdjs.main_32game_32sceneCode.GDmaincharacterObjects2[i], 11, 0);
}
}}

}


{


gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = false;
gdjs.main_32game_32sceneCode.condition1IsTrue_0.val = false;
{
{gdjs.main_32game_32sceneCode.conditionTrue_1 = gdjs.main_32game_32sceneCode.condition0IsTrue_0;
gdjs.main_32game_32sceneCode.condition0IsTrue_1.val = false;
{
gdjs.main_32game_32sceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.main_32game_32sceneCode.condition0IsTrue_1.val ) {
    gdjs.main_32game_32sceneCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.main_32game_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.main_32game_32sceneCode.conditionTrue_1 = gdjs.main_32game_32sceneCode.condition1IsTrue_0;
gdjs.main_32game_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8399540);
}
}}
if (gdjs.main_32game_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("maincharacter"), gdjs.main_32game_32sceneCode.GDmaincharacterObjects1);
{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDmaincharacterObjects1.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDmaincharacterObjects1[i].putAroundObject(gdjs.main_32game_32sceneCode.GDmaincharacterObjects1[i], -(11), 0);
}
}}

}


};gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDmaincharacterObjects2Objects = Hashtable.newFrom({"maincharacter": gdjs.main_32game_32sceneCode.GDmaincharacterObjects2});
gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDenemyObjects2Objects = Hashtable.newFrom({"enemy": gdjs.main_32game_32sceneCode.GDenemyObjects2});
gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDmaincharacterObjects2Objects = Hashtable.newFrom({"maincharacter": gdjs.main_32game_32sceneCode.GDmaincharacterObjects2});
gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDenemy2Objects2Objects = Hashtable.newFrom({"enemy2": gdjs.main_32game_32sceneCode.GDenemy2Objects2});
gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDmaincharacterObjects2Objects = Hashtable.newFrom({"maincharacter": gdjs.main_32game_32sceneCode.GDmaincharacterObjects2});
gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDenemy3Objects2Objects = Hashtable.newFrom({"enemy3": gdjs.main_32game_32sceneCode.GDenemy3Objects2});
gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDmaincharacterObjects1Objects = Hashtable.newFrom({"maincharacter": gdjs.main_32game_32sceneCode.GDmaincharacterObjects1});
gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDenemy4Objects1Objects = Hashtable.newFrom({"enemy4": gdjs.main_32game_32sceneCode.GDenemy4Objects1});
gdjs.main_32game_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.main_32game_32sceneCode.GDenemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("maincharacter"), gdjs.main_32game_32sceneCode.GDmaincharacterObjects2);

gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDmaincharacterObjects2Objects, gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDenemyObjects2Objects, false, runtimeScene, false);
}if (gdjs.main_32game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.main_32game_32sceneCode.GDmaincharacterObjects2 */
{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDmaincharacterObjects2.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDmaincharacterObjects2[i].setAnimationName("dead");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy2"), gdjs.main_32game_32sceneCode.GDenemy2Objects2);
gdjs.copyArray(runtimeScene.getObjects("maincharacter"), gdjs.main_32game_32sceneCode.GDmaincharacterObjects2);

gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDmaincharacterObjects2Objects, gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDenemy2Objects2Objects, false, runtimeScene, false);
}if (gdjs.main_32game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.main_32game_32sceneCode.GDmaincharacterObjects2 */
{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDmaincharacterObjects2.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDmaincharacterObjects2[i].setAnimationName("dead");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy3"), gdjs.main_32game_32sceneCode.GDenemy3Objects2);
gdjs.copyArray(runtimeScene.getObjects("maincharacter"), gdjs.main_32game_32sceneCode.GDmaincharacterObjects2);

gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDmaincharacterObjects2Objects, gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDenemy3Objects2Objects, false, runtimeScene, false);
}if (gdjs.main_32game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.main_32game_32sceneCode.GDmaincharacterObjects2 */
{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDmaincharacterObjects2.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDmaincharacterObjects2[i].setAnimationName("dead");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy4"), gdjs.main_32game_32sceneCode.GDenemy4Objects1);
gdjs.copyArray(runtimeScene.getObjects("maincharacter"), gdjs.main_32game_32sceneCode.GDmaincharacterObjects1);

gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDmaincharacterObjects1Objects, gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDenemy4Objects1Objects, false, runtimeScene, false);
}if (gdjs.main_32game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.main_32game_32sceneCode.GDmaincharacterObjects1 */
{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDmaincharacterObjects1.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDmaincharacterObjects1[i].setAnimationName("dead");
}
}}

}


};gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.main_32game_32sceneCode.GDenemyObjects1});
gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDenemy2Objects1Objects = Hashtable.newFrom({"enemy2": gdjs.main_32game_32sceneCode.GDenemy2Objects1});
gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDenemy3Objects1Objects = Hashtable.newFrom({"enemy3": gdjs.main_32game_32sceneCode.GDenemy3Objects1});
gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDenemy4Objects1Objects = Hashtable.newFrom({"enemy4": gdjs.main_32game_32sceneCode.GDenemy4Objects1});
gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDcoinObjects1Objects = Hashtable.newFrom({"coin": gdjs.main_32game_32sceneCode.GDcoinObjects1});
gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDcoin2Objects1Objects = Hashtable.newFrom({"coin2": gdjs.main_32game_32sceneCode.GDcoin2Objects1});
gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDcoin3Objects1Objects = Hashtable.newFrom({"coin3": gdjs.main_32game_32sceneCode.GDcoin3Objects1});
gdjs.main_32game_32sceneCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("coin"), gdjs.main_32game_32sceneCode.GDcoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("coin2"), gdjs.main_32game_32sceneCode.GDcoin2Objects1);
gdjs.copyArray(runtimeScene.getObjects("coin3"), gdjs.main_32game_32sceneCode.GDcoin3Objects1);
gdjs.copyArray(runtimeScene.getObjects("coinspawner"), gdjs.main_32game_32sceneCode.GDcoinspawnerObjects1);
gdjs.copyArray(runtimeScene.getObjects("coinspawner2"), gdjs.main_32game_32sceneCode.GDcoinspawner2Objects1);
gdjs.copyArray(runtimeScene.getObjects("coinspawner3"), gdjs.main_32game_32sceneCode.GDcoinspawner3Objects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.main_32game_32sceneCode.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy2"), gdjs.main_32game_32sceneCode.GDenemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("enemy3"), gdjs.main_32game_32sceneCode.GDenemy3Objects1);
gdjs.copyArray(runtimeScene.getObjects("enemy4"), gdjs.main_32game_32sceneCode.GDenemy4Objects1);
gdjs.copyArray(runtimeScene.getObjects("spawner"), gdjs.main_32game_32sceneCode.GDspawnerObjects1);
gdjs.copyArray(runtimeScene.getObjects("spawner2"), gdjs.main_32game_32sceneCode.GDspawner2Objects1);
gdjs.copyArray(runtimeScene.getObjects("spawner3"), gdjs.main_32game_32sceneCode.GDspawner3Objects1);
gdjs.copyArray(runtimeScene.getObjects("spawner4"), gdjs.main_32game_32sceneCode.GDspawner4Objects1);
{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDspawnerObjects1.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDspawnerObjects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDenemyObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDspawner2Objects1.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDspawner2Objects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDenemy2Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDspawner3Objects1.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDspawner3Objects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDenemy3Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDspawner4Objects1.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDspawner4Objects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDenemy4Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDcoinspawnerObjects1.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDcoinspawnerObjects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDcoinObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDcoinspawner2Objects1.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDcoinspawner2Objects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDcoin2Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDcoinspawner3Objects1.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDcoinspawner3Objects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDcoin3Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.main_32game_32sceneCode.eventsList3 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("coin"), gdjs.main_32game_32sceneCode.GDcoinObjects2);
gdjs.copyArray(runtimeScene.getObjects("coin2"), gdjs.main_32game_32sceneCode.GDcoin2Objects2);
gdjs.copyArray(runtimeScene.getObjects("coin3"), gdjs.main_32game_32sceneCode.GDcoin3Objects2);
{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDcoinObjects2.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDcoinObjects2[i].getBehavior("Flash").Flash(200000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDcoin2Objects2.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDcoin2Objects2[i].getBehavior("Flash").Flash(200000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDcoin3Objects2.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDcoin3Objects2[i].getBehavior("Flash").Flash(200000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("coin"), gdjs.main_32game_32sceneCode.GDcoinObjects2);

gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.main_32game_32sceneCode.GDcoinObjects2.length;i<l;++i) {
    if ( !(gdjs.main_32game_32sceneCode.GDcoinObjects2[i].getBehavior("InOnScreen").IsOnScreen(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.main_32game_32sceneCode.GDcoinObjects2[k] = gdjs.main_32game_32sceneCode.GDcoinObjects2[i];
        ++k;
    }
}
gdjs.main_32game_32sceneCode.GDcoinObjects2.length = k;}if (gdjs.main_32game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.main_32game_32sceneCode.GDcoinObjects2 */
{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDcoinObjects2.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDcoinObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("coin2"), gdjs.main_32game_32sceneCode.GDcoin2Objects2);

gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.main_32game_32sceneCode.GDcoin2Objects2.length;i<l;++i) {
    if ( !(gdjs.main_32game_32sceneCode.GDcoin2Objects2[i].getBehavior("InOnScreen").IsOnScreen(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.main_32game_32sceneCode.GDcoin2Objects2[k] = gdjs.main_32game_32sceneCode.GDcoin2Objects2[i];
        ++k;
    }
}
gdjs.main_32game_32sceneCode.GDcoin2Objects2.length = k;}if (gdjs.main_32game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.main_32game_32sceneCode.GDcoin2Objects2 */
{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDcoin2Objects2.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDcoin2Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("coin3"), gdjs.main_32game_32sceneCode.GDcoin3Objects1);

gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.main_32game_32sceneCode.GDcoin3Objects1.length;i<l;++i) {
    if ( !(gdjs.main_32game_32sceneCode.GDcoin3Objects1[i].getBehavior("InOnScreen").IsOnScreen(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.main_32game_32sceneCode.GDcoin3Objects1[k] = gdjs.main_32game_32sceneCode.GDcoin3Objects1[i];
        ++k;
    }
}
gdjs.main_32game_32sceneCode.GDcoin3Objects1.length = k;}if (gdjs.main_32game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.main_32game_32sceneCode.GDcoin3Objects1 */
{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDcoin3Objects1.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDcoin3Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.main_32game_32sceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.main_32game_32sceneCode.GDenemyObjects2);

gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.main_32game_32sceneCode.GDenemyObjects2.length;i<l;++i) {
    if ( !(gdjs.main_32game_32sceneCode.GDenemyObjects2[i].getBehavior("InOnScreen").IsOnScreen(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.main_32game_32sceneCode.GDenemyObjects2[k] = gdjs.main_32game_32sceneCode.GDenemyObjects2[i];
        ++k;
    }
}
gdjs.main_32game_32sceneCode.GDenemyObjects2.length = k;}if (gdjs.main_32game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.main_32game_32sceneCode.GDenemyObjects2 */
{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDenemyObjects2.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDenemyObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy2"), gdjs.main_32game_32sceneCode.GDenemy2Objects2);

gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.main_32game_32sceneCode.GDenemy2Objects2.length;i<l;++i) {
    if ( !(gdjs.main_32game_32sceneCode.GDenemy2Objects2[i].getBehavior("InOnScreen").IsOnScreen(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.main_32game_32sceneCode.GDenemy2Objects2[k] = gdjs.main_32game_32sceneCode.GDenemy2Objects2[i];
        ++k;
    }
}
gdjs.main_32game_32sceneCode.GDenemy2Objects2.length = k;}if (gdjs.main_32game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.main_32game_32sceneCode.GDenemy2Objects2 */
{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDenemy2Objects2.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDenemy2Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy3"), gdjs.main_32game_32sceneCode.GDenemy3Objects2);

gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.main_32game_32sceneCode.GDenemy3Objects2.length;i<l;++i) {
    if ( !(gdjs.main_32game_32sceneCode.GDenemy3Objects2[i].getBehavior("InOnScreen").IsOnScreen(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.main_32game_32sceneCode.GDenemy3Objects2[k] = gdjs.main_32game_32sceneCode.GDenemy3Objects2[i];
        ++k;
    }
}
gdjs.main_32game_32sceneCode.GDenemy3Objects2.length = k;}if (gdjs.main_32game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.main_32game_32sceneCode.GDenemy3Objects2 */
{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDenemy3Objects2.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDenemy3Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy4"), gdjs.main_32game_32sceneCode.GDenemy4Objects1);

gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.main_32game_32sceneCode.GDenemy4Objects1.length;i<l;++i) {
    if ( !(gdjs.main_32game_32sceneCode.GDenemy4Objects1[i].getBehavior("InOnScreen").IsOnScreen(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.main_32game_32sceneCode.GDenemy4Objects1[k] = gdjs.main_32game_32sceneCode.GDenemy4Objects1[i];
        ++k;
    }
}
gdjs.main_32game_32sceneCode.GDenemy4Objects1.length = k;}if (gdjs.main_32game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.main_32game_32sceneCode.GDenemy4Objects1 */
{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDenemy4Objects1.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDenemy4Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDmaincharacterObjects2Objects = Hashtable.newFrom({"maincharacter": gdjs.main_32game_32sceneCode.GDmaincharacterObjects2});
gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDcoinObjects2Objects = Hashtable.newFrom({"coin": gdjs.main_32game_32sceneCode.GDcoinObjects2});
gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDmaincharacterObjects2Objects = Hashtable.newFrom({"maincharacter": gdjs.main_32game_32sceneCode.GDmaincharacterObjects2});
gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDcoin2Objects2Objects = Hashtable.newFrom({"coin2": gdjs.main_32game_32sceneCode.GDcoin2Objects2});
gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDmaincharacterObjects2Objects = Hashtable.newFrom({"maincharacter": gdjs.main_32game_32sceneCode.GDmaincharacterObjects2});
gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDcoin3Objects2Objects = Hashtable.newFrom({"coin3": gdjs.main_32game_32sceneCode.GDcoin3Objects2});
gdjs.main_32game_32sceneCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("coin"), gdjs.main_32game_32sceneCode.GDcoinObjects2);
gdjs.copyArray(runtimeScene.getObjects("maincharacter"), gdjs.main_32game_32sceneCode.GDmaincharacterObjects2);

gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDmaincharacterObjects2Objects, gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDcoinObjects2Objects, false, runtimeScene, false);
}if (gdjs.main_32game_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.main_32game_32sceneCode.GDScoreObjects2);
/* Reuse gdjs.main_32game_32sceneCode.GDcoinObjects2 */
{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDcoinObjects2.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDcoinObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "nokiajam coin.mp3", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDScoreObjects2[i].setString("" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("coin2"), gdjs.main_32game_32sceneCode.GDcoin2Objects2);
gdjs.copyArray(runtimeScene.getObjects("maincharacter"), gdjs.main_32game_32sceneCode.GDmaincharacterObjects2);

gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDmaincharacterObjects2Objects, gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDcoin2Objects2Objects, false, runtimeScene, false);
}if (gdjs.main_32game_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.main_32game_32sceneCode.GDScoreObjects2);
/* Reuse gdjs.main_32game_32sceneCode.GDcoin2Objects2 */
{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDcoin2Objects2.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDcoin2Objects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "nokiajam coin.mp3", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDScoreObjects2[i].setString("" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("coin3"), gdjs.main_32game_32sceneCode.GDcoin3Objects2);
gdjs.copyArray(runtimeScene.getObjects("maincharacter"), gdjs.main_32game_32sceneCode.GDmaincharacterObjects2);

gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDmaincharacterObjects2Objects, gdjs.main_32game_32sceneCode.mapOfGDgdjs_46main_9532game_9532sceneCode_46GDcoin3Objects2Objects, false, runtimeScene, false);
}if (gdjs.main_32game_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.main_32game_32sceneCode.GDScoreObjects2);
/* Reuse gdjs.main_32game_32sceneCode.GDcoin3Objects2 */
{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDcoin3Objects2.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDcoin3Objects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "nokiajam coin.mp3", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}{for(var i = 0, len = gdjs.main_32game_32sceneCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.main_32game_32sceneCode.GDScoreObjects2[i].setString("" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.main_32game_32sceneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.main_32game_32sceneCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("maincharacter"), gdjs.main_32game_32sceneCode.GDmaincharacterObjects1);

gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.main_32game_32sceneCode.GDmaincharacterObjects1.length;i<l;++i) {
    if ( gdjs.main_32game_32sceneCode.GDmaincharacterObjects1[i].isCurrentAnimationName("dead") ) {
        gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.main_32game_32sceneCode.GDmaincharacterObjects1[k] = gdjs.main_32game_32sceneCode.GDmaincharacterObjects1[i];
        ++k;
    }
}
gdjs.main_32game_32sceneCode.GDmaincharacterObjects1.length = k;}if (gdjs.main_32game_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


};gdjs.main_32game_32sceneCode.eventsList7 = function(runtimeScene) {

{


gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.main_32game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.main_32game_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "nokiajam music.mp3", true, 25, 1);
}}

}


{


gdjs.main_32game_32sceneCode.eventsList0(runtimeScene);
}


{


gdjs.main_32game_32sceneCode.eventsList1(runtimeScene);
}


{


gdjs.main_32game_32sceneCode.eventsList2(runtimeScene);
}


{


gdjs.main_32game_32sceneCode.eventsList3(runtimeScene);
}


{


gdjs.main_32game_32sceneCode.eventsList4(runtimeScene);
}


{


gdjs.main_32game_32sceneCode.eventsList5(runtimeScene);
}


{


gdjs.main_32game_32sceneCode.eventsList6(runtimeScene);
}


};

gdjs.main_32game_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.main_32game_32sceneCode.GDmaincharacterObjects1.length = 0;
gdjs.main_32game_32sceneCode.GDmaincharacterObjects2.length = 0;
gdjs.main_32game_32sceneCode.GDmaincharacterObjects3.length = 0;
gdjs.main_32game_32sceneCode.GDenemyObjects1.length = 0;
gdjs.main_32game_32sceneCode.GDenemyObjects2.length = 0;
gdjs.main_32game_32sceneCode.GDenemyObjects3.length = 0;
gdjs.main_32game_32sceneCode.GDenemy2Objects1.length = 0;
gdjs.main_32game_32sceneCode.GDenemy2Objects2.length = 0;
gdjs.main_32game_32sceneCode.GDenemy2Objects3.length = 0;
gdjs.main_32game_32sceneCode.GDenemy3Objects1.length = 0;
gdjs.main_32game_32sceneCode.GDenemy3Objects2.length = 0;
gdjs.main_32game_32sceneCode.GDenemy3Objects3.length = 0;
gdjs.main_32game_32sceneCode.GDenemy4Objects1.length = 0;
gdjs.main_32game_32sceneCode.GDenemy4Objects2.length = 0;
gdjs.main_32game_32sceneCode.GDenemy4Objects3.length = 0;
gdjs.main_32game_32sceneCode.GDspawnerObjects1.length = 0;
gdjs.main_32game_32sceneCode.GDspawnerObjects2.length = 0;
gdjs.main_32game_32sceneCode.GDspawnerObjects3.length = 0;
gdjs.main_32game_32sceneCode.GDspawner2Objects1.length = 0;
gdjs.main_32game_32sceneCode.GDspawner2Objects2.length = 0;
gdjs.main_32game_32sceneCode.GDspawner2Objects3.length = 0;
gdjs.main_32game_32sceneCode.GDspawner3Objects1.length = 0;
gdjs.main_32game_32sceneCode.GDspawner3Objects2.length = 0;
gdjs.main_32game_32sceneCode.GDspawner3Objects3.length = 0;
gdjs.main_32game_32sceneCode.GDspawner4Objects1.length = 0;
gdjs.main_32game_32sceneCode.GDspawner4Objects2.length = 0;
gdjs.main_32game_32sceneCode.GDspawner4Objects3.length = 0;
gdjs.main_32game_32sceneCode.GDrightwallObjects1.length = 0;
gdjs.main_32game_32sceneCode.GDrightwallObjects2.length = 0;
gdjs.main_32game_32sceneCode.GDrightwallObjects3.length = 0;
gdjs.main_32game_32sceneCode.GDleftwallObjects1.length = 0;
gdjs.main_32game_32sceneCode.GDleftwallObjects2.length = 0;
gdjs.main_32game_32sceneCode.GDleftwallObjects3.length = 0;
gdjs.main_32game_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.main_32game_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.main_32game_32sceneCode.GDNewSpriteObjects3.length = 0;
gdjs.main_32game_32sceneCode.GDcoinObjects1.length = 0;
gdjs.main_32game_32sceneCode.GDcoinObjects2.length = 0;
gdjs.main_32game_32sceneCode.GDcoinObjects3.length = 0;
gdjs.main_32game_32sceneCode.GDcoin2Objects1.length = 0;
gdjs.main_32game_32sceneCode.GDcoin2Objects2.length = 0;
gdjs.main_32game_32sceneCode.GDcoin2Objects3.length = 0;
gdjs.main_32game_32sceneCode.GDcoin3Objects1.length = 0;
gdjs.main_32game_32sceneCode.GDcoin3Objects2.length = 0;
gdjs.main_32game_32sceneCode.GDcoin3Objects3.length = 0;
gdjs.main_32game_32sceneCode.GDcoinspawnerObjects1.length = 0;
gdjs.main_32game_32sceneCode.GDcoinspawnerObjects2.length = 0;
gdjs.main_32game_32sceneCode.GDcoinspawnerObjects3.length = 0;
gdjs.main_32game_32sceneCode.GDcoinspawner2Objects1.length = 0;
gdjs.main_32game_32sceneCode.GDcoinspawner2Objects2.length = 0;
gdjs.main_32game_32sceneCode.GDcoinspawner2Objects3.length = 0;
gdjs.main_32game_32sceneCode.GDcoinspawner3Objects1.length = 0;
gdjs.main_32game_32sceneCode.GDcoinspawner3Objects2.length = 0;
gdjs.main_32game_32sceneCode.GDcoinspawner3Objects3.length = 0;
gdjs.main_32game_32sceneCode.GDScoreObjects1.length = 0;
gdjs.main_32game_32sceneCode.GDScoreObjects2.length = 0;
gdjs.main_32game_32sceneCode.GDScoreObjects3.length = 0;

gdjs.main_32game_32sceneCode.eventsList7(runtimeScene);

return;

}

gdjs['main_32game_32sceneCode'] = gdjs.main_32game_32sceneCode;
