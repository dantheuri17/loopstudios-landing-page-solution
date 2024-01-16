import mobileInteractiveImage from "../assets/images/mobile/image-interactive.jpg";
import desktopInteractiveImage from '../assets/images/desktop/image-interactive.jpg';

import mobileDeepEarth from "../assets/images/mobile/image-deep-earth.jpg";
import desktopDeepEarth from '../assets/images/desktop/image-deep-earth.jpg';

import mobileNightArcade from "../assets/images/mobile/image-night-arcade.jpg";
import desktopNightArcade from '../assets/images/desktop/image-night-arcade.jpg';

import mobileSoccerTeam from "../assets/images/mobile/image-soccer-team.jpg";
import desktopSoccerTeam from '../assets/images/desktop/image-soccer-team.jpg';

import mobileGridImage from "../assets/images/mobile/image-grid.jpg";
import desktopGridImage from '../assets/images/desktop/image-grid.jpg';

import mobileFromAbove from "../assets/images/mobile/image-from-above.jpg";
import desktopFromAbove from '../assets/images/desktop/image-from-above.jpg';

import mobilePocketBorealis from "../assets/images/mobile/image-pocket-borealis.jpg";
import desktopPocketBorealis from '../assets/images/desktop/image-pocket-borealis.jpg';

import mobileCuriosityImage from "../assets/images/mobile/image-curiosity.jpg";
import desktopCuriosityImage from '../assets/images/desktop/image-curiosity.jpg';

import mobileFisheye from "../assets/images/mobile/image-fisheye.jpg";
import desktopFisheye from '../assets/images/desktop/image-fisheye.jpg';

const Main = () => {
	return (
		<main className="max-w-[23.4375rem] mt-[6rem] md:mt-[10rem] md:max-w-none">
			<div className="md:pl-[10.25rem] md:relative grid grid-cols-1 justify-center">
				<picture className="flex justify-center md:justify-normal">
					<source media="(max-width: 480px)" srcSet={mobileInteractiveImage} />
					<source
						media="(min-width: 1024px)"
						srcSet={desktopInteractiveImage}
					/>
					<img
						src=""
						alt=""
						className="md:h-[31.25rem] h-[14rem]"
					/>
				</picture>
				<div className="md:absolute  bg-white  gap-y-[1rem]  md:top-[11.44rem] md:right-[10.31rem] mt-[5rem] md:mt-0 px-[3rem] md:pl-[6rem] md:pt-[6rem] md:w-[33.8125rem] md:h-[19.8125rem]">
					<h1 className="uppercase font-josefinSans text-[2rem] md:text-[3rem] text-center md:text-left font-[300] leading-[2rem] md:leading-[3rem]">
						The leader in interactive VR
					</h1>
					<p className="font-alata text-[0.9375rem] leading-[1.5625rem] md:w-[27.8125rem] mt-[1rem] font-[400] opacity-[0.5] md:mt-[1.56rem]">
						Founded in 2011, Loopstudios has been producing world-class virtual
						reality projects for some of the best companies around the globe.
						Our award-winning creations have transformed businesses through
						digital experiences that bind to their brand.
					</p>
				</div>
			</div>

			<section className="px-[1.5rem] md:px-[10.25rem]">
				<h2 className="text-[2rem] md:text-[3rem] font-[300] uppercase font-josefinSans text-center md:text-left mt-[6rem]">
					Our creations
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-[repeat(4,16rem)] uppercase md:gap-x-[1.88rem]  md:grid-rows-2  gap-y-[1.5rem] mt-[3rem] font-josefinSans text-[1.5rem] md:text-[2rem] font-[300] leading-[1.5rem] md:leading-[2rem]">
					<div className="relative">
						<h3 className=" text-white absolute left-[1.25rem] md:left-[2.5rem] md:top-[22.12rem] top-[3.25rem] w-[5rem] h-[3rem] ">
							Deep Earth
						</h3>
						<picture>
							<source media="(max-width: 480px)" srcSet={mobileDeepEarth} />
							<source media="(min-width: 1024px)" srcSet={desktopDeepEarth} />
							<img
								src={mobileDeepEarth}
								alt=""
								className="w-full h-[7.5rem] md:w-[16rem] md:h-[28.125rem] object-cover"
							/>
						</picture>
					</div>

					<div className="relative ">
						<h3 className="absolute left-[1.25rem] top-[3.25rem] md:left-[2.5rem] md:top-[22.12rem] text-white w-[6.1875rem]">
							Night Arcade
						</h3>
						<picture>
							<source media="(max-width: 480px)" srcSet={mobileNightArcade} />
							<source media="(min-width: 1024px)" srcSet={desktopNightArcade} />
							<img
								src={mobileDeepEarth}
								alt=""
								className="w-full h-[7.5rem] md:w-[16rem] md:h-[28.125rem] object-contain"
							/>
						</picture>
					</div>

					<div className="relative ">
						<h3 className="absolute left-[1.25rem] top-[3.25rem] md:left-[2.5rem] md:top-[22.12rem] w-[6.75rem] text-white">
							Soccer Team VR
						</h3>
						<picture>
							<source media="(max-width: 480px)" srcSet={mobileSoccerTeam} />
							<source media="(min-width: 1024px)" srcSet={desktopSoccerTeam} />
							<img
								src={mobileDeepEarth}
								alt=""
								className="w-full h-[7.5rem] md:w-[16rem] md:h-[28.125rem] object-cover"
							/>
						</picture>
					</div>

					<div className="relative ">
						<h3 className="absolute left-[1.25rem] top-[3.25rem] md:left-[2.5rem] md:top-[22.12rem] w-[3.625rem] text-white ">
							The Grid
						</h3>
						<picture>
							<source media="(max-width: 480px)" srcSet={mobileGridImage} />
							<source media="(min-width: 1024px)" srcSet={desktopGridImage} />
							<img
								src={mobileDeepEarth}
								alt=""
								className="w-full h-[7.5rem] md:w-[16rem] md:h-[28.125rem] object-cover"
							/>
						</picture>
					</div>

					<div className="relative ">
						<h3 className="absolute left-[1.25rem] top-[3.25rem] md:left-[2.5rem] md:top-[22.12rem] w-[7.6875rem] md:w-[10.25rem] text-white ">
							From Up Above VR
						</h3>
						<picture>
							<source media="(max-width: 480px)" srcSet={mobileFromAbove} />
							<source media="(min-width: 1024px)" srcSet={desktopFromAbove} />
							<img
								src={mobileDeepEarth}
								alt=""
								className="w-full h-[7.5rem] md:w-[16rem] md:h-[28.125rem] object-cover"
							/>
						</picture>
					</div>
					<div className="relative ">
						<h3 className="absolute left-[1.25rem] top-[3.25rem] md:left-[2.5rem] md:top-[22.12rem] w-[7.375rem] text-white">
							Pocket Borealis
						</h3>
						<picture>
							<source
								media="(max-width: 480px)"
								srcSet={mobilePocketBorealis}
							/>
							<source
								media="(min-width: 1024px)"
								srcSet={desktopPocketBorealis}
							/>
							<img
								src={mobileDeepEarth}
								alt=""
								className="w-full h-[7.5rem] md:w-[16rem] md:h-[28.125rem] object-cover"
							/>
						</picture>
					</div>

					<div className="relative ">
						<h3 className="absolute left-[1.25rem] top-[3.25rem] md:left-[2.5rem] md:top-[22.12rem] w-[7.9375rem] text-white">
							The Curiosity
						</h3>
						<picture>
							<source
								media="(max-width: 480px)"
								srcSet={mobileCuriosityImage}
							/>
							<source
								media="(min-width: 1024px)"
								srcSet={desktopCuriosityImage}
							/>
							<img
								src={mobileDeepEarth}
								alt=""
								className="w-full h-[7.5rem] md:w-[16rem] md:h-[28.125rem] object-cover"
							/>
						</picture>
					</div>

					<div className="relative ">
						<h3 className="absolute left-[1.25rem] top-[3.25rem] md:left-[2.5rem] md:top-[22.12rem] w-[6.1875rem] md:w-[8.25rem] text-white">
							Make it Fisheye
						</h3>
						<picture>
							<source media="(max-width: 480px)" srcSet={mobileFisheye} />
							<source media="(min-width: 1024px)" srcSet={desktopFisheye} />
							<img
								src={mobileDeepEarth}
								alt=""
								className="w-full h-[7.5rem] md:w-[16rem] md:h-[28.125rem] object-cover"
							/>
						</picture>
					</div>
				</div>
			</section>
			<div className="flex justify-center">
				<button className="mt-[2.13rem] border border-black py-[.81rem] pl-[2.38rem] pr-[2.69rem]">
					<h4 className="uppercase text-[.875rem] tracking-[.3125rem] font-[400] font-alata">
						See All
					</h4>
				</button>
			</div>
		</main>
	);
};

export default Main;
