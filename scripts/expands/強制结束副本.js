var text = npc.askText("請輸入卡死的(事件腳本名)：","",1,30);
var event = npc.getEvent(text);
if(event == null){
	npc.say("事件不存在或者沒有再進行中");
}else{
	event.destroyEvent();
	npc.say("強制結束成功!");
}
 