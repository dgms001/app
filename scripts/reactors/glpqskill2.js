var event = reactor.getEvent("CWKPQ");
if (event != null) {
    if (map.getId() == 610030200) {
        map.broadcastEventNotice("法師祭壇已啟用!");
        event.setVariable("glpq2", parseInt(event.getVariable("glpq2")) + 1);
        if (parseInt(event.getVariable("glpq2")) == 5) { //all 5 done
            map.screenEffect("quest/party/clear");//透過
            //map.playAmbientSound( "Party1/Clear");
            map.broadcastEventNotice("所有祭壇都啟動了，請到下一關卡去！");
            //rm.setObjectState("2pt");
        }
    } else if (map.getId() == 610030300) {
        map.broadcastEventNotice("法師祭壇啟動了!聽到了齒輪轉動的聲音······!防禦系統好像啟動了!必須抓緊時間!");
        event.setVariable("glpq3", parseInt(event.getVariable("glpq3")) + 1);
        //java.lang.System.out.println(parseInt(event.getVariable("glpq3")));
        if (parseInt(event.getVariable("glpq3")) == 5) {
            map.screenEffect("quest/party/clear");//透過
            //map.playAmbientSound( "Party1/Clear");
            map.broadcastEventNotice("所有祭壇都啟動了，請到下一關卡去！");
            //rm.setObjectState("3pt");
        }
    }
}