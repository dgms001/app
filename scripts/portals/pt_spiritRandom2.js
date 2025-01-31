/*
 * Instance: Spirit Savior
 * @description Portal: pt_LeftRandom
 * @author Yukinoshita
 */

portal.abortWarp()
let portals = [4, 5, 6, 11, 13, 14]
player.teleportToPortalId(0, portals[Math.floor(Math.random() * portals.length)])