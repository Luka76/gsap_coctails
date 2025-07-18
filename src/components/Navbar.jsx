import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants/index.js";
import navLogo from '../../public/images/logo.png'

const Navbar = () => {
  useGSAP(()=>{
    const navTween = gsap.timeline({
      scrollTrigger:{
        trigger:'nav',
        start:'bottom top'
      }
    });

    navTween.fromTo('nav', {backgroundColor:'transparent'}, {
      backgroundColor: '#00000050',
      backgroundFilter: 'blur(10px)',
      duration:1,
      ease: 'power1.inOut'
    })
  });

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src={navLogo} alt="logo" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((item) => (
            <li key={item.id}>
                <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
