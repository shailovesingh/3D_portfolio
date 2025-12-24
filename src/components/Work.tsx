import React from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  title: string;
  subtitle: string;
  tools: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Enterprise Knowledge Navigator",
    subtitle: "GEN AI",
    tools: "Langchain, Groq, Huggingface, GraphDB",
    image: "/images/typescript.webp",
  },
  {
    title: "Smart Procurement Chatbot",
    subtitle: "GEN AI",
    tools: "Langchain, Groq, Huggingface, GraphDB",
    image: "/images/zomato.webp",
  },
  {
    title: " Smart Order Replenishment",
    subtitle: "Gen Ai",
    tools: "Prophet, Langchain, Groq, Huggingface, GraphDB",
    image: "/images/hyperpure.webp",
  },
  {
    title: "Multi-Actor Applications",
    subtitle: "Gen Ai",
    tools: "LangGraph",
    image: "/images/placeholder.webp",
  },
  {
    title: "Hybrid Search RAG",
    subtitle: "GEN AI",
    tools: "Vector Database And Langchain",
    image: "/images/next1.webp",
  },
  {
    title: "Multi AI Agents",
    subtitle: "Gen Ai",
    tools: "CrewAI",
    image: "/images/1728887673970.webp",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX = 0;

    function setTranslateX() {
      const boxes = document.getElementsByClassName("work-box");
      const container = document.querySelector(".work-container")!;
      const rectLeft = container.getBoundingClientRect().left;
      const rect = boxes[0].getBoundingClientRect();
      const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(boxes[0] as Element).padding) / 2;
      translateX = rect.width * boxes.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((proj, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, '0')}</h3>
                  <div>
                    <h4>{proj.title}</h4>
                    <p>{proj.subtitle}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{proj.tools}</p>
              </div>
              <WorkImage image={proj.image} alt={proj.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
