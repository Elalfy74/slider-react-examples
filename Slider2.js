import { useState } from "react";
import { sliderItems } from "../../lib/data";
import classes from "./Slider2.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Slider2 = () => {
  const [current, setCurrent] = useState(0);
  const nextSlide = () =>
    setCurrent((prevState) =>
      prevState === sliderItems.length - 1 ? 0 : prevState + 1
    );
  const prevSlide = () =>
    setCurrent((prevState) =>
      prevState === 0 ? sliderItems.length - 1 : prevState - 1
    );
  const styling = {
    transform: `translateX(${current * -100}vw)`,
  };
  return (
    <div className={`${classes.wrapper}`}>
      <ArrowBackIcon className={classes.left_arrow} onClick={prevSlide} />
      <div className={classes.slider_wrapper} style={styling}>
        {sliderItems.map((slide) => (
          <div key={slide.id} className={classes.slider}>
            <img src={slide.img} alt="slide_img" />
            <div className={classes.info}>
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              <button>Shop Now</button>
            </div>
          </div>
        ))}
      </div>
      <ArrowForwardIcon className={classes.right_arrow} onClick={nextSlide} />
    </div>
  );
};
export default Slider2;
