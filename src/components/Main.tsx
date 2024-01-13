import interactiveImage from "../assets/images/mobile/image-interactive.jpg";

import mobileDeepEarth from "../assets/images/mobile/image-deep-earth.jpg";
import mobileNightArcade from "../assets/images/mobile/image-night-arcade.jpg";
import mobileSoccerTeam from "../assets/images/mobile/image-soccer-team.jpg";
import mobileGridImage from "../assets/images/mobile/image-grid.jpg";

const Main = () => {
	return (
		<main className="max-w-[23.4375rem] mt-[6rem]">
			<picture>
				<source media="(max-width: 480px)" srcSet={interactiveImage} />
				<img src="" alt="" />
			</picture>
			<div className="grid grid-cols-1 gap-y-[1rem] mt-[5rem] px-[3rem]">
				<h1 className="uppercase font-josefinSans text-[2rem] text-center font-[300] leading-[2rem]">
					The leader in interactive VR
				</h1>
				<p className="font-alata text-[0.9375rem] leading-[1.5625rem] font-[400] opacity-[0.5]">
					Founded in 2011, Loopstudios has been producing world-class virtual
					reality projects for some of the best companies around the globe. Our
					award-winning creations have transformed businesses through digital
					experiences that bind to their brand. See all Deep earth Night arcade
					Soccer team VR The grid From up above VR Pocket borealis The curiosity
					Make it fisheye
				</p>
				<section>
					<h2 className="text-[2rem] font-[300] uppercase font-josefinSans text-center mt-[6rem]">
						Our creations
					</h2>
					<div className="grid grid-cols-1 gap-y-[1.5rem] font-josefinSans text-[1.5rem] leading-[1.5rem]  h-[15rem]">
						<div className="relative ">
							<h3 className=" text-white absolute left-[1.25rem] top-[3.25rem] w-[5rem]  ">
								Deep Earth
							</h3>
							<picture>
								<source media="(max-width: 480px)" srcSet={mobileDeepEarth} />
								<img src={mobileDeepEarth} alt="" />
							</picture>
						</div>

						<div className="relative h-[15rem]">
							<h3 className="absolute left-[1.25rem] top-[3.25rem] text-white">
								Night Arcade
							</h3>
							<picture>
								<source media="(max-width: 480px)" srcSet={mobileNightArcade} />
								<img src={mobileDeepEarth} alt="" />
							</picture>
						</div>

						<div className="relative h-[15rem]">
							<h3 className="absolute left-[1.25rem] top-[3.25rem] text-white">
								Soccer Team VR
							</h3>
							<picture>
								<source media="(max-width: 480px)" srcSet={mobileSoccerTeam} />
								<img src={mobileDeepEarth} alt="" />
							</picture>
						</div>

						<div className="relative h-[15rem]">
							<h3 className="absolute left-[1.25rem] top-[3.25rem] text-white">
								The Grid
							</h3>
							<picture>
								<source media="(max-width: 480px)" srcSet={mobileGridImage} />
								<img src={mobileDeepEarth} alt="" />
							</picture>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Main;
