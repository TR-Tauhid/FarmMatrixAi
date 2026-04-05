import { useKeenSlider } from "keen-slider/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 85000, easing: (t) => t };

const Carousel = () => {
  const { t } = useTranslation();

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    renderMode: "performance",
    drag: true,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slides: {
      perView: 1.5,
      spacing: 12,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 20 },
      },
    },
  });

  return (
    <div
      className="bg-base-100 py-10 px-2 md:px-6 transition-colors duration-500 overflow-hidden rounded-2xl"
      id="clients"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-emerald-700 dark:text-emerald-500 text-center mb-16"
        >
          {t("carousel.heading")}
        </motion.h2>

        <div className="relative group">
          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-base-100 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-base-100 to-transparent z-10 pointer-events-none" />

          <div ref={sliderRef} className="keen-slider">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="keen-slider__slide">
                <div className="overflow-hidden rounded-[2.5rem] border-4 border-base-200 dark:border-slate-800 shadow-xl m-2 bg-base-200">
                  <img
                    src={`/happyClient(${num}).jpg`}
                    alt={`Happy client ${num}`}
                    className="w-full h-64 md:h-80 object-cover md:grayscale hover:md:grayscale-0 transition-all duration-700 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
