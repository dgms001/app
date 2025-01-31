/*
 * 安哈林防禦
 */

const EXIT_MAP = 993195800;
const FIELD_1 = 993195700;
const TIME_MINUTE = 10

/**
 * @type {ScriptPlayer}
 */
let player;

export default defineEventScript({
    init(attachment) {

        player = attachment;

        let map_1 = event.makeMap(FIELD_1);
        map_1.reset();
        player.changeMap(map_1);
        map_1.showTimer(TIME_MINUTE * 60);
        event.startTimer("kick", TIME_MINUTE * 60 * 1000);
        player.setEvent(event)
    },
    playerDisconnected(player) {
        event.destroyEvent()
    },
    playerChangedMap(player, destination) {
        switch (destination.getId()) {
            case FIELD_1:
                break
            case EXIT_MAP:
                event.stopTimer("kick")
                event.destroyEvent()
                break;
            default:
                event.destroyEvent()
                break;
        }
    },
    timerExpired(key) {
        switch (key) {
            case "kick":
                player.setEvent(null);
                player.changeMap(EXIT_MAP);
                event.destroyEvent();
                break;
        }
    },
    deinit() {
        player.setEvent(null);
    },
});
