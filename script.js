const main = document.querySelector(".Main");
const services = document.querySelectorAll(".service-section");
const buttons = document.querySelectorAll(".button");
const contact = document.querySelector(".Contact");
const content = document.querySelector(".Content");
const skills = document.querySelector(".Skills");
const about = document.querySelector(".About");

let theLastSlide = ".Main";
const Skillas = [
  "Leadership",
  "Communication",
  "Problem Solving",
  "Team Work",
  "Persuasion",
  "Adaptability",
];

const SkillasPercentage = ["9", "8", "7", "8", "7", "7"];

const langs = ["Arabic", "Turkish", "English", "German"];
const langsPercentage = [6, 5, 3, 2];
const langsLevel = ["Native", "C1", "B1", "A2"];

const skillsWrapper = document.querySelector(".skills-wrapper");
const langSkillsWrapper = document.querySelector(".lang-skills-wrapper");

const h1ToUnderline = [
  ".contact-heading",
  ".content-heading",
  ".skills-heading",
  ".main-heading",
  "#About-W",
  "#Interests-h1",
  "#WorkedW-h1",
  ".languages-h1",
];

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
});

var wdt = screen.width;

function createDotedLineSVG(percentage, radius) {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "200");
  svg.setAttribute("height", "20");

  const dotSpacing = 20;
  const dotRadius = radius;
  const totalDots = 10;
  const numberOfFilledDots = Math.round(((percentage * 10) / 100) * totalDots);

  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElementNS(svgNS, "circle");
    dot.setAttribute("cx", i * dotSpacing + dotRadius * 2);
    dot.setAttribute("cy", 10);
    dot.setAttribute("r", dotRadius);
    dot.setAttribute("fill", i < numberOfFilledDots ? "#c71340" : "none");
    dot.setAttribute("stroke", "#c71340");
    svg.appendChild(dot);
  }

  return svg;
}

function createFilledCircleSVG(percentage, whattowrite, radius) {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "100");
  svg.setAttribute("height", "100");

  const circle = document.createElementNS(svgNS, "circle");
  if (radius == null || radius == undefined) {
    radius = 40;
  }
  const radius1 = radius;
  const centerX = 50;
  const centerY = 50;

  circle.setAttribute("cx", centerX);
  circle.setAttribute("cy", centerY);
  circle.setAttribute("r", radius1);
  circle.setAttribute("fill", "none");
  circle.setAttribute("stroke", "#c71340");
  circle.setAttribute("stroke-width", "10");
  circle.setAttribute("stroke-dasharray", 2 * Math.PI * radius);
  circle.setAttribute(
    "stroke-dashoffset",
    ((100 - percentage) / 100) * -2 * Math.PI * radius
  );
  circle.setAttribute("transform", "rotate(-90 50 50)");

  svg.appendChild(circle);

  const text = document.createElementNS(svgNS, "text");
  text.setAttribute("x", centerX);
  text.setAttribute("y", centerY);
  text.setAttribute("text-anchor", "middle");
  text.setAttribute("dominant-baseline", "middle");
  text.setAttribute("fill", "white");
  text.textContent = whattowrite;

  svg.appendChild(text);

  return svg;
}

var typed = new Typed(".changinText", {
  strings: [
    "Social Media Expert.",
    "Digital Marketer.",
    "Programmer.",
    "Designer.",
    "Content Writer.",
  ],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});

services.forEach((service) => {
  const p = service.querySelector("p");
  const h1 = service.querySelector("h1");
  const span = h1.querySelector("span");

  span.style.display = "none";
  p.style.display = "none";

  service.addEventListener("mouseover", () => {
    span.style.display = "block";
  });

  service.addEventListener("mouseout", () => {
    span.style.display = "none";
  });

  service.addEventListener("click", () => {
    if (p.style.display == "block") {
      p.style.display = "none";
    } else {
      p.style.display = "block";
    }
  });
});

buttons.forEach((e) => {
  e.addEventListener("click", () => {
    switch (e.innerHTML) {
      case "Contact":
        contact.scrollIntoView({ behavior: "smooth", block: "center" });
        theLastSlide = ".Contact";
        break;
      case "Services":
        content.scrollIntoView({ behavior: "smooth", block: "center" });
        theLastSlide = ".Content";
        break;
      case "Skills":
        skills.scrollIntoView({ behavior: "smooth", block: "center" });
        theLastSlide = ".Skills";
        break;
      case "About":
        about.scrollIntoView({ behavior: "smooth", block: "center" });
        theLastSlide = ".About";
        break;
      case "Go back":
        main.scrollIntoView({ behavior: "smooth", block: "center" });
        theLastSlide = ".Main";
        break;
      default:
        break;
    }
  });
});

if (wdt <= 768) {
  langs.forEach((lang, i) => {
    let div = document.createElement("div");
    div.classList.add("langSkilla");
    let p = document.createElement("p");
    p.innerHTML = lang;
    p.classList.add("skillText");
    let pLevel = document.createElement("p");
    pLevel.innerHTML = langsPercentage[i];

    div.appendChild(p);
    div.appendChild(
      createFilledCircleSVG((100 * langsPercentage[i]) / 6, langsLevel[i], 33)
    );
    langSkillsWrapper.appendChild(div);
  });
} else {
  langs.forEach((lang, i) => {
    let div = document.createElement("div");
    div.classList.add("langSkilla");
    let p = document.createElement("p");
    p.innerHTML = lang;
    p.classList.add("skillText");
    let pLevel = document.createElement("p");
    pLevel.innerHTML = langsPercentage[i];

    div.appendChild(p);
    div.appendChild(
      createFilledCircleSVG((100 * langsPercentage[i]) / 6, langsLevel[i])
    );
    langSkillsWrapper.appendChild(div);
  });
}

Skillas.forEach((skill, i) => {
  let div = document.createElement("div");
  div.classList.add("skilla");
  let p = document.createElement("p");
  p.innerHTML = skill;
  p.classList.add("skillText");

  div.appendChild(p);
  div.appendChild(createDotedLineSVG(SkillasPercentage[i], 5));
  skillsWrapper.appendChild(div);
});

h1ToUnderline.forEach((e) => {
  $(e).addClass("underline");
});

document.querySelector(theLastSlide).scrollIntoView();

window.addEventListener("resize", function () {
  width = window.innerWidth;
  height = window.innerHeight;
  document.querySelector(theLastSlide).scrollIntoView();
});

$(".intersection").each((i, e) => {
  fadeObserver.observe(e);
});

$(".skilla").each((i, e) => {
  fadeObserver.observe(e);
});
$(".langSkilla").each((i, e) => {
  fadeObserver.observe(e);
});

$(".Sex-h1").each((i, e) => {
  let $e = e.innerHTML;
  let span = document.createElement("span");
  span.classList.add("Sex-dots");

  if ($e == "Account Management") {
    span.appendChild(createDotedLineSVG(9, 6));
  } else if ($e == "Digital Marketing") {
    span.appendChild(createDotedLineSVG(9, 6));
  }

  e.appendChild(span);
});

var value = 30;

if (wdt <= 768) {
  $(".about-button").insertAfter(".content-button");

  $(".Sex-D").each((i, e) => {
    let $e = e.parentElement.classList.contains("Sex");
    let span = document.createElement("span");
    span.classList.add("Sex-D-circles");

    if (e.parentElement.classList.contains("ContentW1")) {
      let contentSexDCircles = document.createElement("div");
      let contentSexDCirclesP = document.createElement("p");
      contentSexDCirclesP.innerHTML = "Post & Videos";
      contentSexDCircles.appendChild(createFilledCircleSVG(85, "85%", value));
      contentSexDCircles.appendChild(contentSexDCirclesP);

      let contentSexDCircles2 = document.createElement("div");
      let contentSexDCirclesP2 = document.createElement("p");
      contentSexDCirclesP2.innerHTML = "Copywriting";
      contentSexDCircles2.appendChild(createFilledCircleSVG(80, "80%", value));
      contentSexDCircles2.appendChild(contentSexDCirclesP2);

      let contentSexDCircles3 = document.createElement("div");
      let contentSexDCirclesP3 = document.createElement("p");
      contentSexDCirclesP3.innerHTML = "Web & Blog";
      contentSexDCircles3.appendChild(createFilledCircleSVG(75, "75%", value));
      contentSexDCircles3.appendChild(contentSexDCirclesP3);

      span.appendChild(contentSexDCircles);
      span.appendChild(contentSexDCircles2);
      span.appendChild(contentSexDCircles3);
    } else if (e.parentElement.classList.contains("Programming1")) {
      let contentSexDCircles = document.createElement("div");
      let contentSexDCirclesP = document.createElement("p");
      contentSexDCirclesP.innerHTML = "Android App";
      contentSexDCircles.appendChild(createFilledCircleSVG(75, "85%", value));
      contentSexDCircles.appendChild(contentSexDCirclesP);

      let contentSexDCircles2 = document.createElement("div");
      let contentSexDCirclesP2 = document.createElement("p");
      contentSexDCirclesP2.innerHTML = "Java";
      contentSexDCircles2.appendChild(createFilledCircleSVG(65, "65%", value));
      contentSexDCircles2.appendChild(contentSexDCirclesP2);

      let contentSexDCircles3 = document.createElement("div");
      let contentSexDCirclesP3 = document.createElement("p");
      contentSexDCirclesP3.innerHTML = "HTML";
      contentSexDCircles3.appendChild(createFilledCircleSVG(60, "60%", value));
      contentSexDCircles3.appendChild(contentSexDCirclesP3);

      let contentSexDCircles4 = document.createElement("div");
      let contentSexDCirclesP4 = document.createElement("p");
      contentSexDCirclesP4.innerHTML = "Python";
      contentSexDCircles4.appendChild(createFilledCircleSVG(40, "40%", value));
      contentSexDCircles4.appendChild(contentSexDCirclesP4);

      span.appendChild(contentSexDCircles);
      span.appendChild(contentSexDCircles2);
      span.appendChild(contentSexDCircles3);
      span.appendChild(contentSexDCircles4);
    } else if (e.parentElement.classList.contains("GraphicD1")) {
      let contentSexDCircles = document.createElement("div");
      let contentSexDCirclesP = document.createElement("p");
      contentSexDCirclesP.innerHTML = "Social Media Design";
      contentSexDCircles.appendChild(createFilledCircleSVG(65, "65%", value));
      contentSexDCircles.appendChild(contentSexDCirclesP);

      let contentSexDCircles2 = document.createElement("div");
      let contentSexDCirclesP2 = document.createElement("p");
      contentSexDCirclesP2.innerHTML = "Brand Identity";
      contentSexDCircles2.appendChild(createFilledCircleSVG(40, "40%", value));
      contentSexDCircles2.appendChild(contentSexDCirclesP2);

      let contentSexDCircles3 = document.createElement("div");
      let contentSexDCirclesP3 = document.createElement("p");
      contentSexDCirclesP3.innerHTML = "UI/UX";
      contentSexDCircles3.appendChild(createFilledCircleSVG(35, "35%", value));
      contentSexDCircles3.appendChild(contentSexDCirclesP3);

      span.appendChild(contentSexDCircles3);
      span.appendChild(contentSexDCircles);
      span.appendChild(contentSexDCircles2);
    }

    e.appendChild(span);
  });
} else {
  $(".Sex-D").each((i, e) => {
    let $e = e.parentElement.classList.contains("Sex");
    let span = document.createElement("span");
    span.classList.add("Sex-D-circles");

    if (e.parentElement.classList.contains("ContentW1")) {
      let contentSexDCircles = document.createElement("div");
      let contentSexDCirclesP = document.createElement("p");
      contentSexDCirclesP.innerHTML = "Post & Videos";
      contentSexDCircles.appendChild(createFilledCircleSVG(85, "85%"));
      contentSexDCircles.appendChild(contentSexDCirclesP);

      let contentSexDCircles2 = document.createElement("div");
      let contentSexDCirclesP2 = document.createElement("p");
      contentSexDCirclesP2.innerHTML = "Copywriting";
      contentSexDCircles2.appendChild(createFilledCircleSVG(80, "80%"));
      contentSexDCircles2.appendChild(contentSexDCirclesP2);

      let contentSexDCircles3 = document.createElement("div");
      let contentSexDCirclesP3 = document.createElement("p");
      contentSexDCirclesP3.innerHTML = "Web & Blog";
      contentSexDCircles3.appendChild(createFilledCircleSVG(75, "75%"));
      contentSexDCircles3.appendChild(contentSexDCirclesP3);

      span.appendChild(contentSexDCircles);
      span.appendChild(contentSexDCircles2);
      span.appendChild(contentSexDCircles3);
    } else if (e.parentElement.classList.contains("Programming1")) {
      let contentSexDCircles = document.createElement("div");
      let contentSexDCirclesP = document.createElement("p");
      contentSexDCirclesP.innerHTML = "Android App";
      contentSexDCircles.appendChild(createFilledCircleSVG(75, "85%"));
      contentSexDCircles.appendChild(contentSexDCirclesP);

      let contentSexDCircles2 = document.createElement("div");
      let contentSexDCirclesP2 = document.createElement("p");
      contentSexDCirclesP2.innerHTML = "Java";
      contentSexDCircles2.appendChild(createFilledCircleSVG(65, "65%"));
      contentSexDCircles2.appendChild(contentSexDCirclesP2);

      let contentSexDCircles3 = document.createElement("div");
      let contentSexDCirclesP3 = document.createElement("p");
      contentSexDCirclesP3.innerHTML = "HTML";
      contentSexDCircles3.appendChild(createFilledCircleSVG(60, "60%"));
      contentSexDCircles3.appendChild(contentSexDCirclesP3);

      let contentSexDCircles4 = document.createElement("div");
      let contentSexDCirclesP4 = document.createElement("p");
      contentSexDCirclesP4.innerHTML = "Python";
      contentSexDCircles4.appendChild(createFilledCircleSVG(40, "40%"));
      contentSexDCircles4.appendChild(contentSexDCirclesP4);

      span.appendChild(contentSexDCircles);
      span.appendChild(contentSexDCircles2);
      span.appendChild(contentSexDCircles3);
      span.appendChild(contentSexDCircles4);
    } else if (e.parentElement.classList.contains("GraphicD1")) {
      let contentSexDCircles = document.createElement("div");
      let contentSexDCirclesP = document.createElement("p");
      contentSexDCirclesP.innerHTML = "Social Media Design";
      contentSexDCircles.appendChild(createFilledCircleSVG(65, "65%"));
      contentSexDCircles.appendChild(contentSexDCirclesP);

      let contentSexDCircles2 = document.createElement("div");
      let contentSexDCirclesP2 = document.createElement("p");
      contentSexDCirclesP2.innerHTML = "Brand Identity";
      contentSexDCircles2.appendChild(createFilledCircleSVG(40, "40%"));
      contentSexDCircles2.appendChild(contentSexDCirclesP2);

      let contentSexDCircles3 = document.createElement("div");
      let contentSexDCirclesP3 = document.createElement("p");
      contentSexDCirclesP3.innerHTML = "UI/UX";
      contentSexDCircles3.appendChild(createFilledCircleSVG(35, "35%"));
      contentSexDCircles3.appendChild(contentSexDCirclesP3);

      span.appendChild(contentSexDCircles3);
      span.appendChild(contentSexDCircles);
      span.appendChild(contentSexDCircles2);
    }

    e.appendChild(span);
  });
}
