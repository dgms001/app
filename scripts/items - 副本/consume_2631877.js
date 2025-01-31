let itemId1 = Array(//性向 隨機
	Array("charisma"),//
	Array("sense"),
	Array("insight"),
	Array("will"),
	Array("craft"),
	Array("charm"),
	);

let AS =  Math.floor(Math.random() * itemId1.length);

player.addTrait(itemId1[AS], 50);//魅力
player.loseItem(npc.getItemId(), 1);