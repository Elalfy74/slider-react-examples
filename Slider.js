import { useState } from "react";
import { sliderItems } from "../lib/data";
import classes from "./Slider.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const nextSlide = () =>
    setCurrent((prevState) =>
      prevState === sliderItems.length - 1 ? 0 : prevState + 1
    );
  const prevSlide = () =>
    setCurrent((prevState) =>
      prevState === 0 ? sliderItems.length - 1 : prevState - 1
    );
  return (
    <div className={classes.wrapper}>
      <ArrowBackIcon className={classes.left_arrow} onClick={prevSlide} />
      {sliderItems.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? `${classes.slide} ${classes.active}`
                : classes.slide
            }
          >
            {index === current && (
              <div className={classes.slider}>
                <div className={classes.img}>
                  <img src={slide.img} alt="slider" />
                </div>
                <div className={classes.info}>
                  <h1>{slide.title}</h1>
                  <p>{slide.desc}</p>
                  <button>Shop Now</button>
                </div>
              </div>
            )}
          </div>
        );
      })}

      <ArrowForwardIcon className={classes.right_arrow} onClick={nextSlide} />
    </div>
  );
};
export default Slider;
