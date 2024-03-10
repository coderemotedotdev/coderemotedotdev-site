import { motion } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const SignUpForm = () => {
  return (
    <section className="relative pt-0 pb-16 bg-blueGray-50 overflow-hidden">
      <div className="absolute -top-10" id="signup" />
      <motion.div
        initial={{ opacity: 1 }} // Need this to be 1 because it cannot detect it otherwise
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >      
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="custom-block-subtitle">
                Try us out!
              </span>
              <h2 className="mt-6 mb-4 text-4xl lg:text-5xl custom-block-big-title">
                Faster builds await
              </h2>
              <ul className="mb-6 text-white mt-12">
            <li className="mb-4 flex">
              <CheckArrowIcon />
              <span>Let us profile your build times</span>
            </li>
            <li className="mb-4 flex">
              <CheckArrowIcon />
              <span>Get a dedicated remote dev/build server</span>
            </li>
            <li className="mb-4 flex">
              <CheckArrowIcon />
              <span>Access our custom-optimized Rust compiler</span>
            </li>
            <li className="mb-4 flex">
              <CheckArrowIcon />
              <span>
                Share cache across team members and git branches i.e. fewer
                rebuilds
              </span>
            </li>
          </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="ml-embedded" data-form="VBA97s"></div>
          </div>
        </div>
        <div
          className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
        </div>
        </motion.div>
    </section>
  );
};
