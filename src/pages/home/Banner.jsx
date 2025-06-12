import React from "react";
import { motion } from "framer-motion";
import team1 from "../../assets/images/team1.jpg";
import team2 from "../../assets/images/team2.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[96]">
      <div className="hero-content flex-col  lg:flex-row-reverse">
        <div className="flex-1 top-100">
          <motion.img
            animate={{
              y: [100, 150, 100],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            src={team1}
            className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-s-8 border-b-8 border-blue-800 shadow-2xl "
          />
          <motion.img
            animate={{
              x: [0, 50, 0],
            }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            src={team2}
            className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-s-8 border-b-8 border-blue-800 shadow-2xl h-[200px] w-full"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            style={{ transformOrigin: "left" }}
            className="text-5xl font-bold"
          >
            Latest Jobs for you!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary font-bold">
            <motion.span
              animate={{
                color: [
                  "#0000FF",
                  "#FFFFFF",
                  "#FF0000",
                  "#00FF00",
                  "#FFFF00",
                  "#800080",
                ],
                transition: { duration: 4, repeat: Infinity },
              }}
            >
              Get Started
            </motion.span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
