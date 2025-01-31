if(player.getEventValue("測謊時間") < (new Date().getTime()/1000/60))
{
    player.addEventValue("測謊開始時間", (new Date().getTime()/1000), -1);
    var ErrorTimes = 3;
    var currentTime = new Date();
    var formattedCurrentDate = (currentTime.getMonth() + 1) + "月" + currentTime.getDate() + "日 " + currentTime.getHours() + ":" + (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes() + ":" + (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

    while(ErrorTimes > 0)
    {
        var RandomNumber1 = Math.floor(Math.random()*5);
        var RandomNumber2 = Math.floor(Math.random()*4);
        var Answer = RandomNumber1 + RandomNumber2;
        var MacroNumber = npc.askNumberSNoEsc("#fs14##e#r\r\n\r\n測謊每次間隔時間30-33分鐘\r\n\r\n你有90秒的回答時間。\r\n\r\n#b請在60秒內回答正確否則傳送小黑屋\r\n\r\n進入三次小黑屋永ban賬號\r\n\r\n#r請回答以下問題：(剩餘" + ErrorTimes + "次機會)\r\n#b" + RandomNumber1 + " ＋ " + RandomNumber2 + " ＝ ？", 0, 0, 9);//"+formattedCurrentDate+" 

        if(MacroNumber == Answer)
        {
            if( ((new Date().getTime()/1000) -  player.getEventValue("測謊開始時間")) >= 90 )//一分半
            {
                player.addEventValue("測謊時間超時", 1, -1);
                player.resetEventValue("測謊開始時間");
                player.resetEventValue("測謊時間");
                player.addEventValue("測謊時間", ((new Date().getTime()/1000/60) + 30), -1);
                player.changeMap(993073000,0);
                npc.saySNoEsc("\r\n#fs14##e測謊時間已超時，送往監獄！");
            }
            else
            {
                player.showSystemMessage("完成測謊！");
                player.resetEventValue("測謊開始時間");
                player.resetEventValue("測謊時間");
                player.addEventValue("測謊時間", ((new Date().getTime()/1000/60) + 30), -1);
            }
            break;
        }
        else
        {
            ErrorTimes--;
            player.showSystemMessage("答錯，剩餘"+ErrorTimes+"次機會！");
            if(ErrorTimes == 0)
            {
                player.addEventValue("測謊失敗",1,-1);
                player.resetEventValue("測謊開始時間");
                player.resetEventValue("測謊時間");
                player.addEventValue("測謊時間", ((new Date().getTime()/1000/60) + 30), -1);
                player.changeMap(993073000,0);
                npc.saySNoEsc("\r\n#fs14##e測謊錯誤次數已用完，送往監獄！");
            }
        }
    }
}