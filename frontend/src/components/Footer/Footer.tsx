import { uleslogo } from '../../app/assets/index';
import Image from 'next/image';


const Footer = () => {
	return(
		<footer className="bg-[#0D2435] w-full m-auto">
			<div className="m-auto w-[1200px] max-w-screen-xl lg:py-8 p-4">
				<div className="md:flex md:justify-between">
				<div className='flex flex-col gap-8'>
					<div className="md:mb-0 flex flex-row gap-4 items-center">
							<Image src={uleslogo} height={70} width={60} alt="UlesLogo"/>
							<span className="text-4xl font-bold text-white">Úles</span>
					</div>
					<div className='w-[315px] text-lg text-white'>
						<p>Присоединяйся, меняй мир к лучшему</p>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
					<div>
						<h2 className="mb-4 text-lg font-medium text-white">Страницы</h2>
						<ul className="text-white flex flex-col gap-3">
							<li>
								<a href="#" className="hover:underline">Главная</a>
							</li>
							<li>
								<a href="#" className="hover:underline">О нас</a>
							</li>
							<li>
								<a href="#" className="hover:underline">Сервисы</a>
							</li>
							<li>
								<a href="#" className="hover:underline">Поддержка</a>
							</li>
						</ul>
					</div>

					<div>
						<h2 className="mb-4 text-lg font-medium text-white">Про нас</h2>
						<ul className="text-white flex flex-col gap-3">
							<li>
								<a href="#" className="hover:underline">СМИ</a>
							</li>
							<li>
								<a href="#" className="hover:underline">Партнеры</a>
							</li>
							<li>
								<a href="#" className="hover:underline">Сервисы</a>
							</li>
							<li>
								<a href="#" className="hover:underline">Клиенты</a>
							</li>
						</ul>
					</div>

					<div>
						<h2 className="mb-4 text-lg font-medium text-white">Наши контакты</h2>
						<ul className="text-white flex flex-col gap-3">
							<li>
								<a href="#" className="hover:underline">Ules@temirqazyq.kz</a>
							</li>
							<li>
								<a href="#" className="hover:underline">+7 (777) 777 77 77</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr className="my-6 border-white sm:mx-auto lg:my-8" />
			<div className="sm:flex sm:items-center sm:justify-between">
				<span className="text-lg text-white sm:text-center ">Copyright © 2023 <a href="https://flowbite.com/" className="hover:underline">Ules</a>. All Rights Reserved.
				</span>
			</div>
		</div>
	</footer>
	);
}
  export default Footer;
