import React from "react";
import { heroBg } from "@public/assets/index";
import Image from "next/image";

const Hero = () => {
	return (
		<section className="fontRaleway  overflow-hidden">
			<div className="flex relative  w-full min-h-max py-32 md:py-48  justify-center  items-center  px-10 md:px-5  ">
				<div className="absolute inset-0">
					<Image src={heroBg} alt="background image" fill />
				</div>
				<div className="relative z-10 ">
					<h1 className="max-w-sm md:max-w-5xl  mb-4  text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-white">
						Úles – платформа сбалансированного распределения гуманитарной помощи.
					</h1>
					<p className="md:max-w-2xl mb-6 font-light lg:mb-8 text-xs md:text-lg lg:text-xl text-white">
						Веб-сайт по автоматическому распределению пожертвования для поддержки социально-уязвимых
						категорий населения, используя алгоритмы для эффективного сбора и распределения прямой помощи.
					</p>
					<a
						href="/auth/register"
						className="hover:bg-ulsDark hover:text-white ease-in-out duration-300 inline-flex items-center justify-center px-3 py-2 md:px-5 md:py-3 mr-3 text-sm md:text-base font-medium text-center text-ulsDark rounded-lg bg-white  focus:ring-4  focus:ring-primary-900"
					>
						Помочь
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
