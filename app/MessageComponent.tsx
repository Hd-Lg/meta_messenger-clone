import Image from "next/image";
import React from "react";
import { Message } from "../typings";

import Profile_Pic from "../assets/Profile_pic.webp";

type Props = {
	message: Message;
};

const MessageComponent = ({ message }: Props) => {
	const isUser = true;
	return (
		<div className={`flex w-fit ${isUser && "ml-auto"}`}>
			<div className={`flex-shrink-0 ${isUser && "order-2"}`}>
				<Image
					src={Profile_Pic}
					alt="profile picture"
					height={10}
					width={50}
					className="rounded-full mx-2"
				/>
			</div>
			<div>
				<p
					className={`text-[0.65rem] px-[2px] pb-[2px] ${
						isUser
							? "text-blue-400 text-right"
							: "text-red-400 text-left"
					}`}>
					{message.username}
				</p>
				<div className="flex items-end">
					<div
						className={`px-3 py-2 rounded-lg w-fit text-white bg-red-400 ${
							isUser
								? "bg-blue-400 ml-auto order-2"
								: "bg-red-400"
						}`}>
						<p className="">{message.message}</p>
					</div>
				</div>
				<p
					className={`text-[0.65rem] italic px-2 text-gray-300 ${
						isUser && "text-right"
					}`}>
					{message.created_at.toLocaleString()}
				</p>
			</div>
		</div>
	);
};

export default MessageComponent;
