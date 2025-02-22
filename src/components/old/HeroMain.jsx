import HeroIMG from '../assets/heroimg.png';
import { BsTwitterX, BsGithub, BsInstagram, BsLinkedin, BsReddit } from "react-icons/bs"; 
import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

// SplitText component
const SplitText = ({
  text = '',
  className = '',
  delay = 100,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = 'easeOutCubic',
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  const words = text.split(' ').map(word => word.split(''));
  const letters = words.flat();
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: animationFrom,
      to: inView
        ? async (next) => {
          await next(animationTo);
          animatedCount.current += 1;
          if (animatedCount.current === letters.length && onLetterAnimationComplete) {
            onLetterAnimationComplete();
          }
        }
        : animationFrom,
      delay: i * delay,
      config: { easing },
    }))
  );

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline ${className}`}
      style={{ textAlign, whiteSpace: 'normal', wordWrap: 'break-word' }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.map((letter, letterIndex) => {
            const index = words
              .slice(0, wordIndex)
              .reduce((acc, w) => acc + w.length, 0) + letterIndex;

            return (
              <animated.span
                key={index}
                style={springs[index]}
                className="inline-block transform transition-opacity will-change-transform"
              >
                {letter}
              </animated.span>
            );
          })}
          <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>
        </span>
      ))}
    </p>
  );
};

// HeroMain component
export default function HeroMain() {
  return (
    <section className='flex flex-col md:flex-row px-3 py-32 heroView justify-center font-[Vogue1]'>
      <div className='md:w-1/2 flex flex-col px-5'>
        <h1 className='text-white text-6xl font-main-font'>
          <SplitText text="HI, I am" className="text-white" />
          <SplitText text="Mohan" className="text-white" />
          <p className='text-white text-4xl px-1 text-2xl'>
            <SplitText text="I'm a FullStack Developer" />
          </p>
        </h1>
        <div className='flex flex-row px-1 py-5'>
          <a href='' target="_blank" className='pr-4 text-4xl hover:text-white'>
            <BsTwitterX />
          </a>
          <a href='https://github.com/Mohan-Balaji/' target="_blank" className='pr-4 text-4xl hover:text-white'>
            <BsGithub />
          </a>
          <a href='#' target="_blank" className='pr-4 text-4xl hover:text-white'>
            <BsReddit />
          </a>
          <a href='https://www.linkedin.com/in/mohanbalaji2004/' target="_blank" className='pr-4 text-4xl hover:text-white'>
            <BsLinkedin />
          </a>
        </div>
      </div>
      {/* <img className='md:w-1/4' src={HeroIMG} alt="Hero Image" /> */}
    </section>
  );
}
