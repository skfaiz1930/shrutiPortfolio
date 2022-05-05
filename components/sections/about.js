/**
 * Styles
 */
import aboutStyles from "../../assets/styles/modules/about.module.scss";

/**
 * Components
 */
import Emoji from "../emoji";
import { Circle } from "@branch/neumorphism.ui.circle";
/**
 * Assets
 */

import profile2 from "../../assets/images/profile2.jpg";
import india from "../../assets/images/india.png";
export default function About({ refProp }) {
  return (
    <section className={aboutStyles.sec}>
      <div className={aboutStyles.about}>
        <div ref={refProp} className={aboutStyles.half}>
          <p className={aboutStyles.hi}>
            Hello there <Emoji label={"hi"} symbol={"👋"} /> i'm
          </p>
          <h1>Shruti Singh</h1>
          <div className={aboutStyles.short}>
            Web developer + Student
            <Emoji label={"hi"} symbol={"👨‍💻"} />
          </div>
          <p>
            I am a Web Developer and learning fullstack development currently
            pursuing my MCA from MIT Pune University and looking for a good
            opportunity. I have a diverse set of skills ranging from frontend to
            backend. I have a passion for learning new technologies and building
            things that make a difference.
          </p>
          <p className={aboutStyles.base}>
            Based in <img src={india.src} />
          </p>
        </div>
        <div className={aboutStyles.portrait}>
          <Circle width={30} type={"concave"} size={"md"} img={profile2.src} />
        </div>
      </div>
      <div className={aboutStyles.tech}>
        <h2>Things i'm familiar with</h2>
      </div>
    </section>
  );
}
