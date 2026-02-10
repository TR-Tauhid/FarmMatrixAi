import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../index.css";

const animation = { duration: 85000, easing: (t) => t };

const Carousel = () => {
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
      perView: 2,
      spacing: 0,
    },
  });

  return (
    <div className="shadow-2xl rounded-2xl p-3 pb-10">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-4">
        Our Clients
      </h1>
      <div ref={sliderRef} className="keen-slider rounded-2xl shadow-2xl">
        <div className="keen-slider__slide number-slide1">
          <img src="/happyClient(1).jpg" alt="Happy client 1" />
        </div>
        <div className="keen-slider__slide number-slide2">
          <img src="/happyClient(2).jpg" alt="Happy client 2" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img src="/happyClient(3).jpg" alt="Happy client 3" />
        </div>
        <div className="keen-slider__slide number-slide4">
          <img src="/happyClient(4).jpg" alt="Happy client 4" />
        </div>
        <div className="keen-slider__slide number-slide5">
          <img src="/happyClient(5).jpg" alt="Happy client 5" />
        </div>
        <div className="keen-slider__slide number-slide6">
          <img src="/happyClient(6).jpg" alt="Happy client 6" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
