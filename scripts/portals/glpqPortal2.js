var event = portal.getEvent("CWKPQ");
//java.lang.System.out.println("pass_number:" + event.getVariable("pass_number") + "---glpq3:" + parseInt(event.getVariable("glpq3")));
if (event != null) {

    map.revertReactor(6109000); //destroy the fake ones, non-GMS like or is this necessary
    map.revertReactor(6109001);
    map.revertReactor(6109002);
    map.revertReactor(6109003);
    map.revertReactor(6109004);

    //java.lang.System.out.println(parseInt(event.getVariable("glpq3")));
    if (parseInt(event.getVariable("glpq3")) < 5) {
        map.blowWeatherEffectNotice("請先啟用所有的祭壇！", 162, 15000);
    } else if (parseInt(event.getVariable("glpq3")) == 5) {
        if (parseInt(event.getVariable("pass_number")) >= 1) {
            map.blowWeatherEffectNotice("所有玩家都透過了，請從左下角移動到下一關卡去。", 162, 15000);
            map.screenEffect("quest/party/clear");//透過
            player.changeMap(610030400, 0);

        } else {
            player.changeMap(610030300, 0);
            map.reset();
            event.setVariable("glpq3", 0);
            event.setVariable("pass_number", parseInt(event.getVariable("pass_number")) + 1);
            var pass_number = event.getVariable("pass_number");
            map.blowWeatherEffectNotice("第" + pass_number + "個冒險家透過了!", 162, 15000);
        }
    }
}


portal.abortWarp();