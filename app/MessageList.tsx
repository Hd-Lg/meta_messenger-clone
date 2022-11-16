"use client";

import { useEffect } from "react";
import useSWR from "swr";
import { clientPusher } from "../pusher";
import { Message } from "../typings";
import fetcher from "../utils/fetchMessages";
import MessageComponent from "./MessageComponent";

type Props = {};

const MessageList = (props: Props) => {
	const {
		data: messages,
		error,
		mutate,
	} = useSWR<Message[]>("/api/getMessages", fetcher);

	useEffect(() => {
		const channel = clientPusher.subscribe("messages");

		// We listen for new messages on channel
		channel.bind("new-message", async (data: Message) => {
			if (!messages) {
				mutate(fetcher);
			} else {
				// Optimistically collect all messages
				mutate(fetcher, {
					optimisticData: [data, ...messages!],
					rollbackOnError: true,
				});
			}
		});
		return () => {
			channel.unbind_all();
			channel.unsubscribe();
		};
	}, [messages, mutate, clientPusher]);

	return (
		<div className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto">
			{messages?.map((message) => (
				<MessageComponent message={message} key={message.id} />
			))}
		</div>
	);
};

export default MessageList;
