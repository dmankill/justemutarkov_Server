"use strict";

require('../libs.js');

function nullResponse(url, info, sessionID) {
    return '{"err":0, "errmsg":null, "data":null}';
}

function getGameConfig(url, info, sessionID) {
    let backendUrl = "https://" + ip;
    return '{"err":0, "errmsg":null, "data":{"queued":false, "banTime":0, "hash":"BAN0", "lang":"en", "aid":' + sessionID + ', "token":"token_' + sessionID + '", "taxonomy":"341", "activeProfileId":"user' + sessionID + 'pmc", "nickname":"user", "backend":{"Trading":"' + backendUrl + '", "Messaging":"' + backendUrl + '", "Main":"' + backendUrl + '", "RagFair":"' + backendUrl + '"}, "totalInGame":0}}';
}

function selectProfile(url, info, sessionID) {
    return '{"err":0, "errmsg":null, "data":{"status":"ok", "notifier":{"server":"https://' + server.getIp() + '/", "channel_id":"testChannel"}}}';
}

function getProfileStatus(url, info, sessionID) {
    return '{"err":0, "errmsg":null, "data":[{"profileid":"scav' + sessionID + '", "status":"Free", "sid":"", "ip":"", "port":0}, {"profileid":"pmc' + sessionID + '", "status":"Free", "sid":"", "ip":"", "port":0}]}';
}

function getServer(url, info, sessionID) {
    return '{"err":0, "errmsg":null, "data":[{"ip":"' + server.getIp() + '", "port":"' + server.getHttpsPort() + '"}]}';
}

function validateGameVersion(url, info, sessionID) {
    constants.setVersion(info.version.major);
    return nullResponse(url, info, sessionID);
}

router.addStaticRoute("/client/game/profile/select", selectProfile);
router.addStaticRoute("/client/profile/status", getProfileStatus);
router.addStaticRoute("/client/server/list", getServer);
router.addStaticRoute("/client/game/version/validate", validateGameVersion);
router.addStaticRoute("/client/game/config", getGameConfig);
router.addStaticRoute("/client/game/logout", nullResponse);
router.addStaticRoute("/client/match/exit", nullResponse);