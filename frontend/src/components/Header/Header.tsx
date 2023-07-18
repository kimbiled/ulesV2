"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { close, logo, menu, profilePhoto, uleslogo } from "public/assets/index";
import { useUser } from "@context/User/useUser";
import { useAuth } from "@context/Auth/useAuth";

const Header = () => {
	const { user } = useUser();
	const { logOut } = useAuth();

	const [active, setActive] = useState("Home");
	const [toggle, setToggle] = useState(false);
	const [isOpen, setOpen] = useState(false);

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
		<nav className="fontInter w-full bg-gradient-linear px-16 flex py-2 justify-between items-center navbar">
			<div className="flex bg-gradientBlueBlack w-[100%] justify-between">
				<Link href="/" className="flex justify-center space-x-4 items-center cursor-pointer ">
					<Image src={uleslogo} alt="ules" className=" h-[60px] " />
					<p className=" font-poppins font-semibold text-[20px]  text-white ">Úles</p>
				</Link>

				<ul className="list-none sm:flex hidden justify-end items-center gap-6">
					{navLinks.map((nav) => {
						if (user !== null && (nav.id === "register" || nav.id === "login")) return;
						return (
							<li
								key={nav.id}
								className={`font-poppins font-normal cursor-pointer text-[16px] ${
									active === nav.title ? "text-gray-200" : "text-white"
								}`}
								onClick={() => setActive(nav.title)}
							>
								<Link href={`${nav.id}`}>{nav.title}</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<div
				className="flex items-center space-x-4 relative cursor-pointer"
				onClick={() => setOpen((prevState) => !prevState)}
				style={{ display: user ? "flex" : "none" }}
			>
				<Image src={profilePhoto} alt="Profile Photo" className="h-8 w-8 rounded-full dropDown-menu-active" />
				<p className="font-poppins text-white ml-2 dropDown-menu-active cursor-pointer">{user && user.name}</p>

				{isOpen && (
					<div className="dropDown h-56 w-48 rounded-2xl bg-gradient-linearDropDown flex flex-col justify-start items-center">
						<div className="flex flex-row h-20 justify-between items-center gap-3">
							<Link href={"/"} className="flex justify-center space-x-4 items-center cursor-pointer ">
								<Image src={uleslogo} alt="ules" className="h-[60px]" />
								<p className="font-poppins font-semibold text-[20px] text-white">Úles</p>
							</Link>
						</div>
						<div className="w-full h-28 border-t-[1px] border-b-[1px] flex flex-col items-center justify-center gap-4">
							<Link href={"/profile"}>
								<button className="fontInter w-32 h-8 rounded-3xl bg-white text-sm">Профиль</button>
							</Link>
							<button
								className="fontInter w-32 h-8 rounded-3xl bg-white text-sm"
								type={"button"}
								onClick={logOut}
							>
								Выйти
							</button>
						</div>
					</div>
				)}
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
							if (user !== null && (nav.id === "register" || nav.id === "login")) return;
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
