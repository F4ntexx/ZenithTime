const timeLine = gsap.timeline();
const timeLineInfoApp = gsap.timeline();
timeLine
  .fromTo(
    "#mainTitleSubtitle",
    {
      y: 200,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
    }
  )
  .fromTo(
    "#buttonRegistrationLogin",
    {
      y: 200,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
    },
    0.1
  )
  .fromTo(
    "#logotypeHeader",
    {
      y: -200,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.1,
    }
  )
  .fromTo(
    "#navigationMenu li",
    {
      y: -200,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
    }
  )
  .fromTo(
    ".sectionStar",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      stagger: 0.5,
    }
  );
  
// section InfoApp

gsap.fromTo("#sectionTitleSubtitle", {
  scale: 0,
},{  
    scrollTrigger: {
    trigger: "#sectionInfoApp",
    start: '-17% center',
    end: '+=300'
  },
  scale: 1,
});

gsap.fromTo("#subtitleInfoApp", {
  scale: 0,
},{  
    scrollTrigger: {
    trigger: "#sectionInfoApp",
    start: '-17% center',
    end: '+=300'
  },
  scale: 1,
});

gsap.fromTo("#buttonGroups", {
  scale: 0,
},{  
    scrollTrigger: {
    trigger: "#sectionInfoApp",
    start: '-17% center',
    end: '+=300'
  },
  scale: 1,
  stagger: 1,
});

gsap.fromTo(".backgroundInfoSection", {
  opacity: 0,
},{  
    scrollTrigger: {
    trigger: "#sectionInfoApp",
    start: '-17% center',
    end: '+=300'
  },
  opacity: 1,
  stagger: 1,
});

// functionSection

gsap.fromTo(".functionTitle", {
  y: 100,
  opacity: 0,
},{  
    scrollTrigger: {
    trigger: "#functionSection",
    start: '-15% center',
    end: '+=300'
  },
  y: 0,
  opacity: 1,
  stagger: 1,
});

gsap.fromTo("#reminderSection", {
    x: -1000,
    opacity: 0,
},{  
    scrollTrigger: {
    trigger: ".article",
    start: '10% center',
    end: '+=300'
  },
  x: 0,
  opacity:1,
});

gsap.fromTo("#settingSection", {
    x: 1000,
    opacity: 0,
},{  
    scrollTrigger: {
    trigger: "#reminderSection",
    start: '50% center',
    end: '+=300'
  },
  x: 0,
  opacity:1,
});


