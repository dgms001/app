var event = portal.getEvent();
if (event != null) {
	var playerX = player.getPosition().getX();
	var playerY = player.getPosition().getY();
	if(playerX < 1118){
		player.teleportToPortalId(2);
	}else if(playerX < 2090){
        player.teleportToPortalId(3);
		}else if(playerX < 3085){
        player.teleportToPortalId(4);
}
}
portal.abortWarp();