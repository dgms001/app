/* This is a piece of code

 * author dgms

 * global player

 * 腳本定制 技術支持 QQ 381991414

 */
let time = 1 * 10 * 1000;
function init(attachment) {
    var players = Array();
    event.setVariable("players", players);
    event.startTimer("PD", time);
}

function timerExpired(key) {
    switch (key) {
    case "PD":
        players = event.getVariable("players");
        if (players.length > 0) {
            for (let i = 0; i < players.length; i++) {
                try {
                    if (null != players[i]) {
                        //players[i].modifyCashShopCurrency(2, 0); //用于觸發error

                        players[i].runScript("泡點獎勵2")
                    }
                } catch (e) {
                    var ppp = players.splice(i, 1);
                }
            }
        }
        event.startTimer("PD", time);
        break;
    }
}

function removePlayer(playerId, changeMap) {
	players = event.getVariable("players");
	for (let i = 0; i < players.length; i++) {
			if (players[i].getId() == playerId) {
					//dissociate event before changing map so playerChangedMap is
					//not called and this method is not called again by the player
					//players[i].showSystemMessage("removePlayer");
					players[i].setEvent(null);
					if (changeMap)
					//collapse the members array so we don't accidentally warp
					//this member again if the leader leaves later.
					players[i].splice(i, 1);
					break;
			}
	}
}


function playerChangedMap(player, destination) {//地圖
	removePlayer(player.getId(), true);
}

function playerDisconnected(player) {//斷開連接
	removePlayer(player.getId(), true);
}
