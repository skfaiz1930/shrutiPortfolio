/**
 * Styles
 */
import aboutStyles from "../../assets/styles/modules/about.module.scss";

/**
 * Components
 */
import { Slider } from "@branch/neumorphism.ui.slider";

/**
 * Assets
 */
import sass from "../../assets/images/logos/sass-1.svg";
import github from "../../assets/images/logos/github.svg";
import css from "../../assets/images/logos/css-3.svg";
import javascript from "../../assets/images/logos/javascript.svg";
import npm from "../../assets/images/logos/npm.svg";
import bootstrap from "../../assets/images/logos/bootstrap-5-1.svg";
import git from "../../assets/images/logos/git.svg";
import heroku from "../../assets/images/logos/heroku-4.svg";
import json from "../../assets/images/logos/json.svg";
import netlify from "../../assets/images/logos/netlify.svg";
import next from "../../assets/images/logos/next-js.svg";
import react from "../../assets/images/logos/react-2.svg";
import cpp from "../../assets/images/logos/cpp.svg";
import python from "../../assets/images/logos/python-svgrepo-com.svg";
import node from "../../assets/images/logos/node-svgrepo-com.svg";
import mongodb from "../../assets/images/logos/mongodb-svgrepo-com.svg";
import redux from "../../assets/images/logos/redux-logo-svgrepo-com.svg";
import tail from "../../assets/images/logos/tailwind-svgrepo-com.svg";
import cypress from "../../assets/images/logos/cypress-svgrepo-com.svg";
import excel from "../../assets/images/logos/excel-svgrepo-com.svg";
export default function MobileSliders() {
  return (
    <section className={aboutStyles.slidersMobile}>
      <Slider
        speed={20}
        images={[
          sass.src,
          github.src,
          css.src,
          javascript.src,
          npm.src,
          bootstrap.src,
          git.src,
          heroku.src,
          node.src,
          mongodb.src,
          redux.src,

          sass.src,
          github.src,
          css.src,
          javascript.src,
          npm.src,
          bootstrap.src,
          git.src,
          heroku.src,
          node.src,
          mongodb.src,
          redux.src,
        ]}
        type={"pressed"}
        size={""}
        padding={[10, 0, 10, 0]}
      />

      <Slider
        speed={15}
        images={[
          python.src,
          cpp.src,
          json.src,
          netlify.src,
          next.src,
          react.src,
          json.src,
          tail.src,
          cypress.src,
          excel.src,

          python.src,
          cpp.src,
          json.src,
          netlify.src,
          next.src,
          react.src,
          json.src,
          tail.src,
          cypress.src,
          excel.src,
        ]}
        type={"pressed"}
        size={""}
        padding={[10, 0, 10, 0]}
      />
    </section>
  );
}
