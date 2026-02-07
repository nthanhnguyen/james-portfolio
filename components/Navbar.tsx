import React from "react";
import { motion, LayoutGroup } from "framer-motion";

import { links } from "../lib/data";
import { useActiveSection } from "../context/active-section-context";
import { useSectionInView } from "../lib/motionSettings";

const Navbar = () => {
  const { ref } = useSectionInView("Home");
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  const handleNavClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    sectionName: string,
    href: string
  ) => {
    e.preventDefault();
    setTimeOfLastClick(Date.now());

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Delay setting active section to let scroll animation begin
      setTimeout(() => {
        setActiveSection(sectionName);
      }, 100);
    }
  };

  return (
    <nav
      className="flex flex-col gap-4 md:flex-row justify-between items-center pt-6 pb-2 md:pb-4 -mx-2 bg-orange-50 dark:bg-navy-900 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm sticky top-0 z-[999]"
      id="home"
      ref={ref}
    >
      {/* --- Logo --- */}
      <button
        aria-label="Back to the top of the page"
        className="flex items-center md:pl-2"
        onClick={(e) => handleNavClick(e, "Home", links[0].href)}
      >
        <div className="relative">
          <span className="text-lg font-bold tracking-wide text-gradient md:block">
            James Nguyen
          </span>
          {activeSection === "Home" && (
            <motion.div
              initial={{ scaleX: 0, width: 0 }}
              animate={{ scaleX: 1, width: "100%" }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 h-[2px] bg-gradient-to-r from-yellow-400 to-lime-400 rounded-full"
            />
          )}
        </div>
      </button>

      {/* --- Navigation Menu --- */}
      <LayoutGroup>
        <div className="flex items-center gap-2 text-md px-2 py-2 rounded-full bg-white/50 dark:bg-navy-800/50 shadow-sm border border-gray-200 dark:border-navy-600 backdrop-blur-md md:mr-2">
          {links.slice(1).map((link) => (
            <button
              key={link.name}
              className={`relative px-3 py-1.5 transition-colors duration-200 ${
                activeSection === link.name
                  ? "text-gray-950 dark:text-slate-light"
                  : "text-gray-600 dark:text-slate-muted hover:text-gray-950 dark:hover:text-slate-light"
              }`}
              onClick={(e) => handleNavClick(e, link.name, link.href)}
            >
              {activeSection === link.name && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute inset-0 bg-white dark:bg-navy-700 rounded-full shadow-sm -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
              {link.name}
            </button>
          ))}
        </div>
      </LayoutGroup>
    </nav>
  );
};

export default Navbar;