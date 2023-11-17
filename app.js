const timeLine = gsap.timeline({default: {ease: 'power2.out'}});

timeLine.to(".slider", {y: "-100%", duration: 1.2});
timeLine.to(".intro .hero", {y: "0%", duration: 1.2}, "-=1"); // -=1 means starting animation at the same time with the first animation
timeLine.fromTo(".nav", {opacity: 0}, {opacity: 1, duration: 1});