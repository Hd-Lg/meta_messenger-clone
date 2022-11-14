import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

type Props = {};

const page = (props: Props) => {
	return (
		<div>
			<MessageList />
			<ChatInput />
		</div>
	);
};

export default page;
