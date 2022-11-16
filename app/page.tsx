import { Message } from "../typings";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

type Props = {};

const page = async (props: Props) => {
	// SSR Before the page render, it loads the data.
	const data = await fetch(`${process.env.VERCEL_URL}/api/getMessages`).then(
		(res) => res.json()
	);
	const messages: Message[] = data.messages;

	return (
		<div>
			<MessageList initialMessages={messages} />
			<ChatInput />
		</div>
	);
};

export default page;
