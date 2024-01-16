import mobileHeaderImg from "../assets/images/mobile/image-hero.jpg";
import desktopHeaderImg from "../assets/images/desktop/image-hero.jpg";


import logo from "../assets/images/logo.svg";

const Header = () => {
	return (
		<header className="max-w-[23.4375rem] relative md:max-w-none md:w-full">
			<img
				src={logo}
				alt=""
				className="absolute hidden sm:block md:left-[10.31rem] md:top-[4rem]"
			/>
			<picture>
				<source media="(max-width: 480px)" srcSet={mobileHeaderImg} />
				<source media="(min-width: 1024px)" srcSet={desktopHeaderImg} />

				<img
					src={mobileHeaderImg}
					alt=""
					className="h-[40.625rem] md:w-full md:object-contain lg:object-fill"
				/>
			</picture>
			<nav className="absolute  text-white md:top-[4.25rem] md:left-[55.94rem]">
				<ul className="flex font-alata md:gap-x-[2rem] md:font-[400]">
					<li>About</li>
					<li>Careers</li>
					<li>Events</li>
					<li>Products</li>
					<li>Support</li>
				</ul>
			</nav>
			<div className="absolute top-[14.19rem] md:top-[14.13rem] left-[1.5rem] md:left-[10.31rem] md:p-[2.5rem] px-[1.5rem] pt-[1.63rem] pb-[1.5rem] w-[20.4375rem] md:w-[40.625rem] border  border-white ">
				<h1 className="w-[17.4375rem] font-josefinSans uppercase text-white text-[2.5rem] md:text-[4.5rem] font-[300] leading-[2.375rem] md:leading-[4.375rem]">
					Immersive experiences that deliver
				</h1>
			</div>
		</header>
	);
};

export default Header;
