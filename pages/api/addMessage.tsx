import type { NextApiRequest, NextApiResponse } from "next";
import { serverPusher } from "../../pusher";
import redis from "../../redis";
import { Message } from "../../typings";

type Data = {
	message: Message;
};

type ErrorData = {
	body: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data | ErrorData>
) {
	if (req.method !== "POST") {
		res.status(405).json({ body: "Method not allowed" });
		return;
	}

	const { message } = req.body;
	// We replace timestamp of user to timestamp of server
	const newMessage = {
		...message,
		created_at: Date.now(),
	};

	// Push to Upstash redis
	await redis.hset("message", message.id, JSON.stringify(newMessage));
	// Update the channel of new message
	serverPusher.trigger("messages", "new-message", newMessage);

	res.status(200).json({ message: newMessage });
}
