import Pusher from "pusher";
import ClientPusher from "pusher-js";

let secret: string = process.env.PUSHER_SECRET;

export const serverPusher = new Pusher({
	appId: "1507507",
	key: "dad2930fed5c6b644b8c",
	secret: secret,
	cluster: "eu",
	useTLS: true,
});

export const clientPusher = new ClientPusher("dad2930fed5c6b644b8c", {
	cluster: "eu",
});
