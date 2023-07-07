import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { close, menu, profilePhoto, uleslogo } from "public/assets/index";
import { useAuth } from "@context/Auth/useAuth";

const Header = () => {
	const { user } = useAuth();

	const [active, setActive] = useState("Home");
	const [toggle, setToggle] = useState(false);

	const navLinks = [
		// {
		// 	id: "/",
		// 	title: "Home",
		// },
		// {
		// 	id: "aboutUs",
		// 	title: "About Us",
		// },
		{
			id: "register",
			title: "Register",
		},
		{
			id: "login",
			title: "Login",
		},
	];

	return (
		<nav className="w-full bg-[#5C97CD] px-16 flex py-2 justify-between items-center navbar">
			<div className="flex space-x-24">
				<Link href="/" className="flex justify-center space-x-4 items-center cursor-pointer">
					<Image src={uleslogo} alt="ules" className=" h-[60px] " />
					<p className=" font-poppins font-semibold text-[20px]  text-white ">Úles</p>
				</Link>
				<ul className="list-none sm:flex hidden justify-end items-center flex-1">
					{navLinks.map((nav, index) => {
						if (user !== null && (nav.id === "register" || nav.id === "login")) return <></>;
						return (
							<li
								key={index}
								className={`font-poppins font-normal cursor-pointer text-[16px] ${
									active === nav.title ? "text-gray-200" : "text-white"
								} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
								onClick={() => setActive(nav.title)}
							>
								<Link href={`${nav.id}`}>{nav.title}</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="flex items-center space-x-4" style={{ display: user ? "flex" : "none" }}>
				<Image src={profilePhoto} alt="Profile Photo" className="h-8 w-8 rounded-full" />
				<p className="font-poppins text-white ml-2">Андрей Братан</p>
			</div>

			<div className="sm:hidden flex flex-1 justify-end items-center">
				<Image
					src={toggle ? close : menu}
					alt="menu"
					className="w-[28px] h-[28px] object-contain"
					onClick={() => setToggle((prevState) => !prevState)}
				/>

				<div
					className={`${
						!toggle ? "hidden" : "flex"
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
				>
					<ul className="list-none flex justify-end items-start flex-1 flex-col">
						{navLinks.map((nav, index) => {
							if (user !== null && (nav.id === "register" || nav.id === "login")) return <></>;
							return (
								<li
									key={nav.id}
									className={`font-poppins font-medium cursor-pointer text-[16px] ${
										active === nav.title ? "text-white" : "text-dimWhite"
									} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
									onClick={() => setActive(nav.title)}
								>
									<Link href={`#${nav.id}`}>{nav.title}</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
