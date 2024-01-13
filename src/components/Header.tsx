import mobileHeaderImg from '../assets/images/mobile/image-hero.jpg'

const Header = () => {
	return (
		<header className="max-w-[23.4375rem]">
			<picture>
				<source media="(max-width: 480px)" srcSet={mobileHeaderImg} />
				<img src={mobileHeaderImg} alt="" className="h-[40.625rem]" />
			</picture>
			<nav className="">About Careers Events Products Support</nav>
			<div>
				<h1 className="uppercase">Immersive experiences that deliver</h1>
			</div>
		</header>
	);
};

export default Header;
