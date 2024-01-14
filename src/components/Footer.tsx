import loopstudiosLogo from '../assets/images/logo.svg';
import facebookLogo from '../assets/images/icon-facebook.svg';
import twitterLogo from '../assets/images/icon-twitter.svg';
import pinterestLogo from '../assets/images/icon-pinterest.svg';
import instagramLogo from '../assets/images/icon-instagram.svg';

const Footer = () => {
	return (
		<footer className="w-full bg-black text-white mt-[6rem] pt-[3.5rem] grid grid-cols-1 justify-items-center">
			<img src={loopstudiosLogo} alt="" className="w-[9rem]" />
			<nav className="mt-[3.5rem]">
				<ul className="grid grid=cols-1 gap-y-[1rem]">
					<li>About</li>
					<li>Careers</li>
					<li>Events</li>
					<li>Products</li>
					<li>Support</li>
				</ul>
			</nav>
			<div className="flex h-[1.5rem] gap-x-[2rem] mt-[3rem]">
				<img src={facebookLogo} alt="" />
				<img src={twitterLogo} alt="" />
				<img src={pinterestLogo} alt="" />
				<img src={instagramLogo} alt="" />
			</div>
			<p className="mt-[1rem]">© 2021 Loopstudios. All rights reserved.</p>
		</footer>
	);
};

export default Footer;
