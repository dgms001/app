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
 * Tory (NPC 1012112)
 * Victoria Road: Henesys Park (Map 100000200),
 *   Hidden Street: Shortcut (Map 910010100),
 *   Hidden Street: Shortcut (Map 910010400)
 *
 * Admits players into Henesys PQ and warps players that have successfully
 * completed the PQ, either with or without the bonus stage, back to Henesys
 * Park.
 *
 * @author dgms
 */
var event = npc.getEvent("moonrabbit");
switch (map.getId()) {
    case 910196001:
        if (party == null || player.getId() != party.getLeader()) {
            npc.sayNext("請開設組隊/有成員外出");
        } else {
            npc.sayNext("山中夜來月,到曉不曾看");
            npc.sayNext("各位中秋快樂");
            npc.sayNext("晚上記得去和心愛之人看看月亮喲");
            let selection = npc.askMenu("妳願意去迎月花山丘，和妳的隊員一起幫助妹妹嗎?\r\n#b"
                + "#L0# 是的, 我要去.#l");
            switch (selection) {
                case 0:
                    let totalMembers = party.numberOfMembersInChannel();
                    if (totalMembers >= 3
                        && party.getMembersCount(map.getId(), 265, 300) == totalMembers
                        && party.getMembersCount(map.getId(), 265, 300) == totalMembers) {
                        if (npc.makeEvent("moonrabbit", true, party) == null)
                            //TODO: GMS-like line
                            npc.sayNext("很抱歉，但還有另壹個團隊在裡面愛愛。");
                    } else {
                        npc.sayNext("很抱歉，請調整您的團隊，以確保您的團隊至少由3名成員組成，所有成員均為265級或更高級別。完成後告訴我。");
                    }
                    break;
            }
        }
        break;
    case 910010100: {
        let selection = npc.askMenu("我很感謝妳給饑餓的孩子們壹些年糕。看來妳現在沒有別的事可做了。妳想離開這個地方嗎？\r\n#b"
            + "#L0# 是的,我要離開,順便拿獎勵#l");
        switch (selection) {
            case 0:
                player.loseItem(4001095);
                player.loseItem(4001096);
                player.loseItem(4001097);
                player.loseItem(4001098);
                player.loseItem(4001099);
                player.loseItem(4001100);
                player.loseItem(4001101);
                player.loseItem(4001453);
                if (player.getEventValue("中秋獎勵") == 0) {
                    player.addEventValue("中秋獎勵", 1, 1);
                    player.gainItem(2436102, 1);
                    player.changeMap(910196001, "st00");
                    event.destroyEvent();
                } else {
                    player.showSystemMessage("今天已經領過一次了獎勵了,請明天再來");
                    player.changeMap(910196001, "st00");
                    event.destroyEvent();
                }

                break;
        }
        break;
    }
    case 910010400: {
        let selection = npc.askMenu("妳們對那些豬大喊大叫了嗎？看來妳現在在這裡沒有別的事可做了。妳想離開這個地方嗎？?\r\n#b"
            + "#L0# 是的，我想離開這裡.#l");
        switch (selection) {
            case 0:
                player.loseItem(4001095);
                player.loseItem(4001096);
                player.loseItem(4001097);
                player.loseItem(4001098);
                player.loseItem(4001099);
                player.loseItem(4001100);
                player.loseItem(4001101);
                player.loseItem(4001453);
                event.destroyEvent();
                player.changeMap(910196001, "st00");
                break;
        }
        break;
    }
}
