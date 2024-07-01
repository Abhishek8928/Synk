window.addEventListener("scroll", function () {
	const navbar = document.querySelector("header");
	if (window.scrollY > 0) {
		navbar.style.backgroundColor = "rgba(13, 13, 13, 0.32)";
	} else {
		navbar.style.backgroundColor = "rgb(13, 13, 13)";
	}
});

const tl = gsap.timeline({
	defaults: {
		opacity: 0,
		y: 50,
		duration: 1,
		ease: "power3.out",
	},
	scrollTrigger: {
		trigger: ".first-insights",
		start: "top 80%",
		end: "bottom 60%",
		scrub: 1,
	},
});

tl.from(".insights-heading-first > h2", {});
tl.from(".insights-text-first > p", { stagger: 0.2 }, "-=0.6");
tl.from(".insights-content-first > button", {}, "-=0.6");

const tlNewContainer = gsap.timeline({
	defaults: {
		opacity: 0,
		y: 50,
		duration: 1,
		ease: "power3.out",
	},
	scrollTrigger: {
		trigger: ".second-insights",
		start: "top 80%",
		end: "bottom 60%",
		scrub: 1,
	},
});

tlNewContainer.from(".new-heading > h2", {});
tlNewContainer.from(".new-text > p", { stagger: 0.2 }, "-=0.6");
tlNewContainer.from(".new-content > button", {}, "-=0.6");

gsap.registerPlugin(ScrollTrigger);

function animateLetters(selector) {
	const paragraphs = document.querySelectorAll(`${selector} .select`);
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: selector,
			start: "top 80%",
			end: "bottom 60%",
			scrub: true,
		},
	});

	paragraphs.forEach((p) => {
		tl.to(
			p.querySelectorAll("span"),
			{
				color: "white",
				stagger: 0.05, // Adjust the stagger for timing between each letter
				duration: 0.5, // Adjust the duration for the color change animation
				ease: "power1.inOut",
			},
			"+=0.5"
		);
	});
}

// Call the function for your specific section
animateLetters(".story-text-one");
animateLetters(".story-text-two");

const d = gsap.timeline();

d.from(".left-container > *", {
	opacity: 0,
	y: 50,
	stagger: 0.3,
	duration: 1,
	ease: "power1.out",
});

d.from(
	".right-container video",
	{
		opacity: 0,
		duration: 1,
		ease: "power1.out",
	},
	"-=0.5"
);

d.play();

const profileContent = document.querySelector(".profile-content");

// Create a GSAP timeline for the animation
const profileContentTimeline = gsap.timeline({
	defaults: {
		opacity: 0,
		y: 50,
		duration: 1,
		ease: "power3.out",
	},
	scrollTrigger: {
		trigger: profileContent,
		start: "top 80%",
		end: "bottom 60%",
		scrub: 1,
	},
});

profileContentTimeline.from(".profile-content > h3", {});
profileContentTimeline.from(
	".profile-content .profile-text > p",
	{ stagger: 0.2 },
	"-=0.6"
);
