/*
 * AuroMS MapleStory server emulator written in Java
 * Copyright (C) 2018 Kent
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* global npc, player, map */

let event = npc.getEvent("party_dragon_rider");
if (event != null) {
    npc.sayNextS("等等,好像還有人?!");
    npc.sayNextS("禦龍魔那個傢伙還活著呀!");
    let ret = npc.askYesNoS("是否想離開這裡麼?");
    if (ret == 1) {
        player.addTrait("will", 35);
        player.addTrait("charisma", 10);
        //player.runScript("禦魔龍組隊通關獎勵");

        var members = party.getLocalMembers();
        for (let dd = 0; dd < members.length; dd++) {
            //members[dd].runScript("廢棄組隊通關獎勵")
            members[dd].addEventValue("龍騎士通關");
            members[dd].addPQLog("一條龍總次數", 1, 3000);
            members[dd].changeMap(100000000, "sp");
            //getTaskCount(members[dd],1,1);
            //getTaskCount(members[dd],1,2);
            //getTaskCount(members[dd],1,3);
            //getTaskCount(members[dd],1,4);
        }
    }
}
