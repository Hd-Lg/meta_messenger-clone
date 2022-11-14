import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo_Meta from "../assets/Logo_Meta.png";
import LogoutButton from "./LogoutButton";

type Props = {};

const Header = (props: Props) => {
	const session = false;
	if (session === true)
		return (
			<header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
				<div className="flex space-x-2">
					<Image
						src={Logo_Meta}
						alt="Profile picture"
						height={10}
						width={50}
						className="rounded-full mx-2 object-contain"
					/>
					<div>
						<p className="text-blue-400">Logged in as:</p>
						<p className="font-bold text-lg">Jean Dupont</p>
					</div>
				</div>
				<LogoutButton />
			</header>
		);

	return (
		<header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
			<div className="flex flex-col items-center space-y-5">
				<div className="flex space-x-2 items-center">
					<Image src={Logo_Meta} alt="Logo" height={10} width={50} />
					<p className="text-blue-400">Welcome to Meta Messenger</p>
				</div>
				<Link href={"/auth/signin"} className="buttonStyle">
					Sign In
				</Link>
			</div>
		</header>
	);
};

export default Header;
