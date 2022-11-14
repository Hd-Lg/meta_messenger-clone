"use client";
import { FormEvent, useState } from "react";
type Props = {};

const ChatInput = (props: Props) => {
	const [input, setInput] = useState("");
	const addMessage = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!input) return;

		const messageToSend = input;
		setInput("");
	};
	return (
		<form onSubmit={(e) => addMessage} className="formStyle">
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder="Enter a message..."
				className="inputStyle"
			/>
			<button type="submit" disabled={!input} className="buttonStyle">
				Send
			</button>
		</form>
	);
};

export default ChatInput;
