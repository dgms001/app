/**
 *
 *
 */

var event = npc.getEvent();
if (event != null) {
    if ("0".equals(event.getVariable("stage38_check"))) {
        npc.sayNext("想透過這一關需要幫我收集到黑暗點！按照我指定的怪物，擊殺怪物收集黑暗點吧！");
        npc.sayNext("現在我將告訴你需要擊殺的怪物是什麼。準備好了嗎？");
        event.startTimer("changeMobS38", 100);
    } else {
        npc.sayNext("快點去消滅怪物收集黑暗點吧！");
    }
}
