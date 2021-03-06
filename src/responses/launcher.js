/* launcher.js
 * contains responses for launcher requests
 * dependencies: EmuTarkov-Launcher
 */

"use strict";

function connect() {
    return json.stringify({"backendUrl": server.getBackendUrl(), "name": server.getName(), "editions": Object.keys(db.profile)});
}

function login(url, info, sessionID) {
    let output = account_f.accountServer.exists(info);
    return output.toString();
}

function register(url, info, sessionID) {
    account_f.accountServer.register(info);
    return "OK";
}

function remove(url, info, sessionID) {
    let output = account_f.accountServer.remove(info);
    return (output === 0) ? "FAILED" : "OK";
}

function get(url, info, sessionID) {
    return account_f.accountServer.find(info.accountId);
}

function changeEmail(url, info, sessionID) {
    let output = account_f.accountServer.changeEmail(info);
    return (output === 0) ? "FAILED" : "OK";
}

function changePassword(url, info, sessionID) {
    let output = account_f.accountServer.changePassword(info);
    return (output === 0) ? "FAILED" : "OK";
}

function wipe(url, info, sessionID) {
    let output = account_f.accountServer.wipe(info);
    return (output === 0) ? "FAILED" : "OK";
}

router.addStaticRoute("/launcher/server/connect", connect);
router.addStaticRoute("/launcher/profile/login", login);
router.addStaticRoute("/launcher/profile/register", register);
router.addStaticRoute("/launcher/profile/remove", remove);
router.addStaticRoute("/launcher/profile/get", remove);
router.addStaticRoute("/launcher/profile/change/email", changeEmail);
router.addStaticRoute("/launcher/profile/change/password", changePassword);
router.addStaticRoute("/launcher/profile/change/wipe", wipe);
