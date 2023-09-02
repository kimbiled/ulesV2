import React from "react";
import styles from "@root/style";
import Image from "next/image";
import { arrowUp } from "@public/assets";

const GetStarted = () => {
	return (
		<div
			className={`${styles.flexCenter} w-[120px] h-[120px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
		>
			<div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
				<div className={`${styles.flexStart} ${styles.flexCenter} flex-col`}>
					<Image src={arrowUp} className="w-[23px] h-[23px] object-contain" alt="arrow"></Image>
					<p className="font-poppins fonr-medium text-[18px] leading-[23px]">
						<span className="text-gradient">ÚLESIÑDI </span>
					</p>
				</div>
				<p className="font-poppins font-medium text-[18px] leading-[23px]">
					<span className="text-gradient">QOS!</span>
				</p>
			</div>
		</div>
	);
};

export default GetStarted;
