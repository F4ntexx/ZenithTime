const timeLine = gsap.timeline();
timeLine
  .fromTo(
    "#linkIndex",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
    }
  ).fromTo(
    "#googleButton",
    {
      opacity: 0,
      y: -200,
    },
    {
        y: 0,
      opacity: 1,
      duration: 0.3,
    },
  ).fromTo(
    "#line",
    {
      opacity: 0,
      y: -200,
    },
    {
        y: 0,
      opacity: 1,
      duration: 0.3,
    }
  ).fromTo(
    "#buttonRegistration",
    {
      opacity: 0,
      y: -200,
    },
    {
        y: 0,
      opacity: 1,
      duration: 0.3,
    }
  ).fromTo(
    "#policyPrivacy",
    {
      opacity: 0,
      y: -200,
    },
    {
        y: 0,
      opacity: 1,
      duration: 0.3,
    }
  ).fromTo(
    "#password",
    {
      opacity: 0,
      y: -200,
    },
    {
        y: 0,
      opacity: 1,
      duration: 0.3,
    }
  ).fromTo(
    "#email",
    {
      opacity: 0,
      y: -200,
    },
    {
        y: 0,
      opacity: 1,
      duration: 0.3,
    }
  ).fromTo(
    "#nickname",
    {
      opacity: 0,
      y: -200,
    },
    {
        y: 0,
      opacity: 1,
      duration: 0.3,
    }
  ).fromTo(
    "#titleForm",
    {
      opacity: 0,
      y: -200,
    },
    {
        y: 0,
      opacity: 1,
      duration: 0.3,
    }
  ).fromTo(
    "#quotes",
    {
      opacity: 0,
      y: -50,
    },
    {
        y: 0,
      opacity: 1,
      duration: 0.1,
    }
  ).fromTo(
    "#quote",
    {
      opacity: 0,
      y: -50,
    },
    {
        y: 0,
      opacity: 1,
      duration: 0.1,
    }
  )