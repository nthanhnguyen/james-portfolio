import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useActiveSection } from "../context/active-section-context";

export const PreviewAnimation = {
  initial: { y: 30, opacity: 0, scale: 0.9 },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { ease: [0.6, 0.01, 0.05, 0.95], duration: 0.8 },
  },
};

export const motionProps = {
  initial: "initial",
  whileInView: "animate",
  variants: PreviewAnimation,
};

export const SkillsMotion = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const skillsMotionProps = {
  initial: "hidden",
  variants: SkillsMotion,
};

export const useScroll = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return { ref, isInView };
};

export const useSectionInView = (section: string, threshold?: string) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: threshold || "0px 100px -75% 0px",
  });
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (isInView && timeOfLastClick < Date.now() - 1000) {
      setActiveSection(section);
    }
  }, [isInView, section, setActiveSection, timeOfLastClick]);

  // Special handling for Contact section - detect when scrolled to bottom
  useEffect(() => {
    if (section !== "Contact") return;

    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (scrolledToBottom && timeOfLastClick < Date.now() - 1000) {
        setActiveSection("Contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [section, setActiveSection, timeOfLastClick]);

  return { ref };
};
