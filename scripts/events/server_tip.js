/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  dgms
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * 
 * @author dgms
 */

let message = new Array(
        "發現遊戲BUG或遊戲漏洞時，請即時向管理方回報!",
        "請勿使用任何第三方程式，發現時將會進行懲處!",
        "遊戲常用指令請輸入 #help 獲取！",
        "如果無法和NPC進行對話，請嘗試使用 @ea 指令。",
        "如果你有好的意見或建議，歡迎你隨時在 Discord 回報。");

function init(attachment) {
        event.startTimer("notice", Math.random() * 3 * 60000);
	event.startTimer("test", Math.random() * 3 * 60000);
}


function timerExpired(key) {
        switch (key) {
                case "notice":
                        event.broadcastPlayerNotice(7, "[幫助] " + message[Math.floor(Math.random() * message.length)]);
                        event.startTimer("notice", Math.random() * 15 * 60000);
                        break;
		case "test":
                        event.startTimer("test", Math.random() * 1000);
                        break;
        }
}
