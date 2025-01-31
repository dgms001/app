/**
 * out00 [custom]
 * Hidden Street: Dark Lord's Practice Field <1st Stage> (Map 910300000)
 *
 * The One Hidden in the Shadow -  The Night Warrior (Quest 6141) portal.
 * Overridden from script-less portal because the WZ data is broken. Victoria
 * Road: Kerning City (Map 103000000) does not have a portal named hide00, so
 * the portal would not warp the player out of the map. The ninjaAmbush event
 * would be canceled even if this portal was scriptless because the
 * playerChangedMap trigger would be fired, so no special event code handling is
 * done here.
 *
 *
 */

player.changeMap(103000000);