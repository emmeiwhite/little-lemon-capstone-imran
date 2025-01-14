import Heading from '../components/Heading';
import { reviewers } from '../constants';
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
  FaStar,
} from 'react-icons/fa';

import styles from './Testimonials.module.css';
import { useEffect, useState } from 'react';
const Testimonials = () => {
  const [currentReviewer, setCurrentReviewer] = useState(0);

  const previousClickHandler = function () {
    setCurrentReviewer(
      (prevReviewer) => (prevReviewer + reviewers.length - 1) % reviewers.length
    );
  };

  const nextClickHandler = function () {
    setCurrentReviewer((prevReviewer) => (prevReviewer + 1) % reviewers.length);
  };

  useEffect(() => {
    const sliderId = setTimeout(() => {
      nextClickHandler();
    }, 2500);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentReviewer]);

  return (
    <section className={styles.carouselContainer}>
      <Heading title="Testimonials" headingType="testimonials" />
      <article className={styles.carousel}>
        {reviewers.map((reviewer, index) => {
          const { id, name, review, avatarURL } = reviewer;
          return (
            <div
              key={id}
              className={styles.slide}
              style={{
                transform: `translateX(${100 * (index - currentReviewer)}%)`,
                opacity: index === currentReviewer ? 1 : 0,
                visibility: index === currentReviewer ? 'visible' : 'hidden',
                overflow: currentReviewer === index ? 'visible' : 'hidden',
              }}
            >
              <div className={styles.avatarContainer}>
                <img
                  src={avatarURL}
                  alt={name + `photo`}
                  className={styles.avatar}
                />
              </div>
              <h3 className={styles.reviewerName}>{name}</h3>
              <div>
                {Array.from({ length: 5 }, (_, i) => (
                  <span className={styles.starIcon} key={i}>
                    <FaStar />
                  </span>
                ))}
              </div>
              <p className={styles.review}>{review}</p>
              <FaQuoteRight className={styles.quoteIcon} />
            </div>
          );
        })}
      </article>
      <button
        className={styles.btnChevronLeft}
        onClick={previousClickHandler}
        aria-label="Previous Slide"
      >
        <FaChevronCircleLeft />
      </button>

      <button
        className={styles.btnChevronRight}
        onClick={nextClickHandler}
        aria-label="Next Slide"
      >
        <FaChevronCircleRight />
      </button>
    </section>
  );
};
export default Testimonials;
