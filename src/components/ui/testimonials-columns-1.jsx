"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props) => {
  return (
    <div className={`${props.className || ""} w-[85vw] max-w-[320px] flex-shrink-0`}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-8 rounded-3xl border border-stone-200 bg-white shadow-lg shadow-primary/5 w-[85vw] max-w-[320px] h-[320px] flex flex-col justify-between"
                key={i}
              >
                <div className="text-sm font-light leading-relaxed text-stone-700 overflow-y-auto pr-1">
                  &ldquo;{text}&rdquo;
                </div>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-stone-100">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold tracking-tight leading-5 text-sm text-stone-900">{name}</div>
                    <div className="leading-5 opacity-60 tracking-tight text-xs text-stone-500">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};
