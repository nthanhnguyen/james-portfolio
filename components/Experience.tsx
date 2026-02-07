import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { motionProps } from "../lib/motionSettings";
import { experienceData } from "../lib/data";
import { useTheme } from "../context/theme-context";
import { useSectionInView } from "../lib/motionSettings";

const Experience = () => {
  const { theme } = useTheme();
  const { ref } = useSectionInView("Experience");

  return (
    <section className="mb-4 scroll-mt-28" id="experience" ref={ref}>
      <motion.div
        {...motionProps}
        className="rounded-3xl overflow-hidden bg-gray-50 p-6 md:px-16 md:py-12 dark:bg-none dark:bg-navy-800 dark:outline dark:outline-2 dark:outline-navy-600"
      >
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-slate-light mb-8">Experience</h1>
        <VerticalTimeline>
          {experienceData.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                ...experience.iconStyle,
                boxShadow: theme === "light"
                  ? "0 0 0 4px #e5e7eb, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)"
                  : "0 0 0 4px #233554, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
              }}
              contentStyle={{
                background: theme === "light" ? "#ffffff" : "#1d3a5c",
                boxShadow: theme === "light"
                  ? "0 4px 20px rgba(0, 0, 0, 0.06)"
                  : "0 4px 20px rgba(0, 0, 0, 0.2)",
                border: theme === "light" ? "1px solid #e5e7eb" : "1px solid #233554",
                borderRadius: "1rem",
                textAlign: "left",
                padding: "1.5rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #e5e7eb"
                    : "0.4rem solid #233554",
              }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-light">
                {experience.title}
              </h3>
              <p className="text-gray-600 dark:text-slate-light/70 mt-3 leading-relaxed">{experience.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
};

export default Experience;
