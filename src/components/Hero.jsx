import { useGSAP } from "@gsap/react";
import leftLeaf from "../../public/images/hero-left-leaf.png";
import rightLeaf from "../../public/images/hero-right-leaf.png";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import heroVideo from "../../public/videos/output.mp4";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:'video',
            start: startValue,
            end: endValue,
            scrub: true,
            pin:true
        }
    })

    videoRef.current.onloadedmetadata = () => {
        tl.to(videoRef.current,{
            currentTime : videoRef.current.duration
        })
    }
  }, []);
  return (
    <>
      <section className="noisy" id="hero">
        <h1 className="title">Mojito</h1>

        <img src={leftLeaf} alt="left-leaf" className="left-leaf" />
        <img src={rightLeaf} alt="right-leaf" className="right-leaf" />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingridients,
                creative flair, and timeless recipes - designed to delight your
                senses.
              </p>
              <a href="#cocktails">View cocktails</a>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src={heroVideo}
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
