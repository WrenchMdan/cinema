import { getUserData, UserData } from "@decentraland/Identity";
//import { sceneMessageBus } from "./game";
import * as ui from "../node_modules/@dcl/ui-utils/index";

export let fireBaseServer =
    'https://us-central1-decentraland-events.cloudfunctions.net/app/';

export let userData: UserData;

type eventData = {
  secret: string;
  event_id: string;
};

type signedEventData = {
  signed_message: string;
  event_id: string;
};

let qrHex: string;

let secret: eventData;

let signature: signedEventData;

export async function callQRAPI(event: string) {
    const url = fireBaseServer + 'get-poap-code/?event=' + event;
  try {
    let response = await fetch(url);
    let data = await response.json();
    log("TOKEN: ", data.token);
    return data.token.toString();
  } catch {
    log("error fetching from token server ", url);
  }
}

export async function fetchUserData() {
  const data = await getUserData();
  log(data.displayName);
  return data;
}

export async function getSecret(qrHex: string) {
  const url = "https://api.poap.xyz/actions/claim-qr?qr_hash=" + qrHex;

  try {
    let response = await fetch(url);
    let data = await response.json();
    let json: eventData = { secret: data.secret, event_id: data.event_id };
    log("secret :", json);
    return json;
  } catch {
    log("error fetching from POAP server ", url);
  }
}

export async function getPoap(data: eventData, qrHex: string) {
  const url = "https://api.poap.xyz/actions/claim-qr";
  let method = "POST";
  let headers = { "Content-Type": "application/json" };
  let body = JSON.stringify({
    address: userData.publicKey,
    qr_hash: qrHex,
    secret: data.secret,
  });
  log("sending ", body);

  try {
    let response = await fetch(url, {
      headers: headers,
      method: method,
      body: body,
    });
    let data = await response.json();
    let json: signedEventData = {
      signed_message: data.delegated_signed_message,
      event_id: data.event_id,
    };
    return json;
  } catch {
    log("error fetching from POAP server ", url);
  }
}

export async function makeTransaction(event: string) {
  if (!userData) {
    userData = await fetchUserData();
  }
  if (!userData.hasConnectedWeb3 || userData.publicKey == null) {
    let p = new ui.OkPrompt(
      "You need to have a browser-connected Ethereum wallet to claim this token."
    );
    return;
  }

  if (!qrHex) {
    qrHex = await callQRAPI(event);
  }
  if (!qrHex) {
    ui.displayAnnouncement(
      "We are out of POAP, sorry",
      2,
      false,
      Color4.White(),
      50,
      false
    );
    return;
  }
  if (!secret) {
    secret = await getSecret(qrHex);
  }

  if (!signature) {
    signature = await getPoap(secret, qrHex);
  }

  //sceneMessageBus.emit("activatePoap", {});
  ui.displayAnnouncement(
    "The POAP has been delivered to your address!",
    3,
    false,
    Color4.White(),
    50,
    false
  );

  return;
}
