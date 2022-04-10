/**
 * Styles
 */
import connectStyles from "../../assets/styles/modules/connect.module.scss";

/**
 * Components
 */
import { Circle } from "@branch/neumorphism.ui.circle";

/**
 * Assets
 */
import mail from "../../assets/images/logos/gmail.svg";
import linkedin from "../../assets/images/logos/linkedin.svg";
import github from "../../assets/images/logos/github.svg";

export default function Connect({ refProp }) {
  return (
    <section ref={refProp} id={"connectors"} className={connectStyles.connect}>
      <div className={connectStyles.connectors}>
        <a href={"mailto:shrutisingh0929@gmail.com"}>
          <Circle
            hoverable={true}
            width={3}
            type={"concave"}
            size={"md"}
            img={mail.src}
          />
        </a>
        <a
          href={"https://www.linkedin.com/in/shruti-singh-3b23bb1b3/"}
          target={"_blank"}
        >
          <Circle
            hoverable={true}
            width={3}
            type={"concave"}
            size={"md"}
            img={linkedin.src}
          />
        </a>
        <a href={"https://github.com/ShrutiSingh1930"} target={"_blank"}>
          <Circle
            hoverable={true}
            width={3}
            type={"concave"}
            size={"md"}
            img={github.src}
          />
        </a>
      </div>
    </section>
  );
}
