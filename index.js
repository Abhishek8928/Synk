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

function animateText(selector) {
    const paragraphs = document.querySelectorAll(`${selector} .select`);
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: `${selector}  > .select `,
            start: "top 60%",
            end: "bottom 20%",
            scrub: true,
            
        }
    });

    paragraphs.forEach(p => {
        const words = p.innerText.split(' ');
        p.innerHTML = words.map(word => `<span style="display: inline-block; opacity: 0">${word} </span>`).join(' ');
        tl.to(p.querySelectorAll('span'), {
            opacity: 1,
            color: 'white',
            stagger: 0.1,
            duration: 1,
            ease: "power1.inOut"
        }, '+=0.5');
    });
}

animateText('.story-text-one');
animateText('.story-text-two');




const d = gsap.timeline();

// Animation for elements inside left container
d.from(".left-container > *", {
    opacity: 0,
    y: 50,
    stagger: 0.3, // Stagger animation for each element
    duration: 1,
    ease: "power1.out"
});

// Animation for scaling up the video in right container
d.from(".right-container video", {
    opacity: 0,
    scale: 1.2,
    duration: 1,
    ease: "power1.out"
}, "-=0.5"); // Start this animation 0.5 seconds before the previous animation ends

// Play the timeline
d.play();