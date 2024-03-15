import { motion } from "framer-motion";

import remote_vscode from "../assets/images/remote_vscode.png";
import rcargo_cli from "../assets/images/rcargo_cli.png";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[4vw] lg:pt-0"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="custom-block-subtitle">
                Personalized Remote Dev environment
              </span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                Coding? Ease of a laptop. Power of a dedicated server.
              </h2>
              <p className="mb-10 text-customGrayText leading-loose">
                Remote build and dev servers have become necessary because your
                laptop is too slow. We often see <b>2-3x speed boosts</b> when switching to a remote environment. But coding locally just feels convenient!
                Our remote code environment is personalized for you, to seamlessly work for <em>your</em> edit-compile-test cycle. No need for raw SSH; our{" "}
                <a
                  className="text-gray-300 hover:text-gray-200"
                  href="https://github.com/coderemotedotdev/rcargo-cli"
                  target="_blank"
                  aria-label=""
                >
                  <u>remote cargo CLI</u>
                </a> lets you retain your local development flow.
              </p>
              <ul className="mb-6 text-white">
              <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>2-3x faster builds on your dedicated dev/build server</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>No-lag IDE IntelliSense, thanks to an always-running, preconfigured remote rust-analyzer</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>CLI tooling that emulates the experience of local development</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
              <img
                src={remote_vscode.src}
                alt="vscode remote development"
                // className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
              />
            </div>
            <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
              <img
                src={rcargo_cli.src}
                alt="rcargo cli"
                // className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
