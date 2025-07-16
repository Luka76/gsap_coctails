import footerRightLeaf from "../../public/images/footer-right-leaf.png";
import footerLeftLeaf from "../../public/images/footer-left-leaf.png";
import { openingHours, socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
    .from(titleSplit.words, {
        opacity: 0, yPercent:100, stagger:0.02
    })
    .from('#contact h3, #contact p', {
         opacity: 0, yPercent:100, stagger:0.02
    })
    .to('#f-right-leaf',{
        y: '-50', duration: 1, ease: 'power1.inOut'
    })
    .to('#f-left-leaf',{
        y: '-50', duration: 1, ease: 'power1.inOut'
    },'<')
  });
  return (
    <footer id="contact">
      <img src={footerRightLeaf} alt="leaf-right" id="f-right-leaf" />
      <img src={footerLeftLeaf} alt="leaf-left" id="f-left-leaf" />

      <div className="content">
        <h2>Where to Find US</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>123, Palm Beach #heh, Los Angeles, CA 90210</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>(555) 987-1234</p>
          <p>randomg@cocktailmail.com</p>
        </div>

        <div>
          <h3>Open every Day</h3>
          {openingHours.map((item) => (
            <p key={item.day}>
              {item.day} : {item.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
              >
                <img src={item.icon} alt="social icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
