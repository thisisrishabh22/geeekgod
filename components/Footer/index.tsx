import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import React, { memo, useEffect, useState } from "react";

const Footer = () => {
  const { theme } = useTheme();
  const [themeEnable, setThemeEnable] = useState(false);

  const date = new Date();

  useEffect(() => {
    setThemeEnable(true);
  }, []);

  const socialDivVariants = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", delay: 0.6, duration: 1 },
    },
  };

  const socialLinksVariants = {
    hover: { scale: 1.26, transition: { type: "spring", stiffness: 200 } },
  };

  const footerTxtVariants = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <footer className="mb-0 mt-auto">
      <div className="py-4">
        <motion.div
          variants={socialDivVariants}
          initial="initial"
          animate="animate"
          className="flex justify-center py-4"
        >
          <motion.a
            variants={socialLinksVariants}
            whileHover="hover"
            target="_blank"
            rel="noreferrer"
            href="mailto: rishabh@geeekgod.in"
          >
            <svg
              className="w-8 mx-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={
                themeEnable && theme === "light" ? "rgba(42,65,81,1)" : "#FFFF"
              }
            >
              <path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path>
              <path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path>
            </svg>
          </motion.a>

          <motion.a
            variants={socialLinksVariants}
            whileHover="hover"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/geeekgod/"
          >
            <svg
              className="w-8 mx-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={
                themeEnable && theme === "light" ? "rgba(42,65,81,1)" : "#FFFF"
              }
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
              ></path>
            </svg>
          </motion.a>

          <motion.a
            variants={socialLinksVariants}
            whileHover="hover"
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/thefrontendrish"
          >
            <svg
              className="w-8 mx-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={
                themeEnable && theme === "light" ? "rgba(42,65,81,1)" : "#FFFF"
              }
            >
              <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
              <circle cx="16.806" cy="7.207" r="1.078"></circle>
              <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
            </svg>
          </motion.a>

          <motion.a
            variants={socialLinksVariants}
            whileHover="hover"
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=rishabhh-singh"
          >
            <svg
              className="w-8 mx-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={
                themeEnable && theme === "light" ? "rgba(42,65,81,1)" : "#FFFF"
              }
            >
              <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
            </svg>
          </motion.a>
        </motion.div>
        <div className="flex justify-center py-1 pb-3 dark:text-white cursor-pointer">
          <motion.p
            variants={footerTxtVariants}
            initial="initial"
            animate="animate"
            transition={{ type: "spring", delay: 0.6, duration: 1 }}
            className="mx-1"
          >
            Made with &#x1f49d;
          </motion.p>
          <motion.div
            variants={footerTxtVariants}
            initial="initial"
            animate="animate"
            transition={{ type: "spring", delay: 0.8, duration: 1 }}
            className="mx-1"
          >
            •
          </motion.div>
          {/*  */}
          <motion.p
            variants={footerTxtVariants}
            initial="initial"
            animate="animate"
            transition={{ type: "spring", delay: 0.8, duration: 1 }}
            className="mx-1"
          >{`© ${date.getFullYear()}`}</motion.p>
          <motion.div
            variants={footerTxtVariants}
            initial="initial"
            animate="animate"
            transition={{ type: "spring", delay: 1, duration: 1 }}
            className="mx-1"
          >
            •
          </motion.div>
          <motion.p
            variants={footerTxtVariants}
            initial="initial"
            animate="animate"
            transition={{ type: "spring", delay: 1.2, duration: 1 }}
            className="mx-1 "
          >
            Rishabh Singh
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
