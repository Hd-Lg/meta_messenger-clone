"use client";
import { v4 as uuid } from "uuid";
import { FormEvent, useState } from "react";

import Profile_Pic from "../assets/Profile_Pic.webp";
import { Message } from "../typings";

type Props = {};

const ChatInput = (props: Props) => {
	const [input, setInput] = useState("");
	const addMessage = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!input) return;

		const messageToSend = input;
		setInput("");
		const id = uuid();

		const message: Message = {
			id,
			message: messageToSend,
			created_at: Date.now(),
			username: "Jean Dupont",
			// Change the type of profilePic to string
			profilePic: { Profile_Pic },
			email: "test@test.com",
		};

		const uploadMessage = async () => {
			const res = await fetch("/api/addMessage", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					message,
				}),
			});

			const data = await res.json();
		};
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
