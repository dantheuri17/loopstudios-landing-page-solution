import mobileHeaderImg from '../assets/images/mobile/image-hero.jpg'

const Header = () => {
	return (
		<header className="max-w-[23.4375rem] relative">
			<picture>
				<source media="(max-width: 480px)" srcSet={mobileHeaderImg} />
				<img src={mobileHeaderImg} alt="" className="h-[40.625rem]" />
			</picture>
			<nav className="border border-black">
				About Careers Events Products Support
			</nav>
			<div className="absolute top-[14.19rem] left-[1.5rem] px-[1.5rem] pt-[1.63rem] pb-[1.5rem] w-[20.4375rem] border  border-white ">
				<h1 className="w-[17.4375rem] font-josefinSans uppercase text-white text-[2.5rem] font-[300] leading-[2.375rem]">
					Immersive experiences that deliver
				</h1>
			</div>
		</header>
	);
};

export default Header;
