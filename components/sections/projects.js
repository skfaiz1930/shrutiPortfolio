/**
 * Styles
 */
import projectStyles from "../../assets/styles/modules/projects.module.scss";

/**
 * Components
 */
import { Card } from "@branch/neumorphism.ui.card";
import { Link } from "@branch/neumorphism.ui.link";

/**
 * Assets
 */
import one from "../../assets/images/projects/project1.png";
import two from "../../assets/images/projects/project2.png";
import three from "../../assets/images/projects/project13.png";
import four from "../../assets/images/projects/project4.png";
import five from "../../assets/images/projects/chat.png";
import six from "../../assets/images/projects/linktree.png";

export default function Projects({ refProp }) {
  return (
    <section ref={refProp} className={projectStyles.projects} id={"projects"}>
      <h2>Some of my personal projects</h2>
      <div className={projectStyles.feed}>
        <Card
          heading="MERN Chat App"
          text="A simple chat app built with MERN stack. Frontend is deployed on Netlify, backend is deployed on Heroku with MongoDB Atlas"
          type="flat"
          size=""
          padding={[15, 15, 15, 15]}
          image={five.src}
          tags={["Netlify", "React", "Express", "Sass", "Heroku", "MongoDB"]}
        >
          <div className={projectStyles.links}>
            <Link
              hoverable={true}
              text="Live Demo"
              url="https://singular-cupcake-b12653.netlify.app/"
              type="flat"
              padding={[10, 20, 10, 20]}
              size={""}
              newWindow={true}
            />
            <Link
              hoverable={true}
              text="View on Github"
              url=""
              type="flat"
              padding={[10, 20, 10, 20]}
              size={""}
              newWindow={true}
            />
          </div>
        </Card>
        <Card
          heading="LinkTree Clone"
          text="LinkTree is a clone of the popular LinkTree website. Built with React, Node, Express, and MongoDB Atlas"
          type="flat"
          size=""
          padding={[15, 15, 15, 15]}
          image={six.src}
          tags={["React", "Node", "Express", "MongoDB", "Heroku"]}
        >
          <div className={projectStyles.links}>
            <Link
              hoverable={true}
              text="Live Demo"
              url="https://mern-linktree.herokuapp.com/admin"
              type="flat"
              padding={[10, 20, 10, 20]}
              size={""}
              newWindow={true}
            />
            <Link
              hoverable={true}
              text="View on Github"
              url=""
              type="flat"
              padding={[10, 20, 10, 20]}
              size={""}
              newWindow={true}
            />
          </div>
        </Card>
        <Card
          heading="CrowdFunding Page"
          text="Created a Crowdfunding Product Page using React - Js Library and
SCSS. The page is deployed on Netlify"
          type="flat"
          size=""
          padding={[15, 15, 15, 15]}
          image={one.src}
          tags={["Netlify", "React", "Next.js", "CSS modules", "Sass"]}
        >
          <div className={projectStyles.links}>
            <Link
              hoverable={true}
              text="Live Demo"
              url="https://upbeat-edison-90d6e4.netlify.app"
              type="flat"
              padding={[10, 20, 10, 20]}
              size={""}
              newWindow={true}
            />
            <Link
              hoverable={true}
              text="View on Github"
              url=""
              type="flat"
              padding={[10, 20, 10, 20]}
              size={""}
              newWindow={true}
            />
          </div>
        </Card>
      </div>
      <div className={projectStyles.feed}>
        <Card
          heading="Social Media Dashboard"
          text="Created a Social Media Dashboard HTML, SCSS and Javascript."
          type="flat"
          size=""
          padding={[15, 15, 15, 15]}
          image={four.src}
          tags={["Netlify", "HTML", "Sass"]}
        >
          <div className={projectStyles.links}>
            <Link
              hoverable={true}
              text="Live Demo"
              url="https://nostalgic-benz-26c66e.netlify.app"
              type="flat"
              padding={[10, 20, 10, 20]}
              size={""}
              newWindow={true}
            />
            <Link
              hoverable={true}
              text="View on Github"
              url=""
              type="flat"
              padding={[10, 20, 10, 20]}
              size={""}
              newWindow={true}
            />
          </div>
        </Card>
        <Card
          heading="Product Coming Soon"
          text="Created a Product Coming Soon Page using React - JS Library, Semantic
HTML5 markup, CSS custom properties and Flexbox."
          type="flat"
          size=""
          padding={[15, 15, 15, 15]}
          image={two.src}
          tags={["React", "Netlify", "CSS Modules", "Sass"]}
        >
          <div className={projectStyles.links}>
            <Link
              hoverable={true}
              text="Live Demo"
              url="https://wizardly-agnesi-ea0f29.netlify.app"
              type="flat"
              padding={[10, 20, 10, 20]}
              size={""}
              newWindow={true}
            />
            <Link
              hoverable={true}
              text="View on Github"
              url=""
              type="flat"
              padding={[10, 20, 10, 20]}
              size={""}
              newWindow={true}
            />
          </div>
        </Card>
        <Card
          heading="SignUp Component"
          text="Created a Responsive SignUp Component using React - JS Library, Semantic
HTML5 markup, CSS custom properties and Flexbox."
          type="flat"
          size=""
          padding={[15, 15, 15, 15]}
          image={three.src}
          tags={["Netlify", "React", "CSS modules", "Sass"]}
        >
          <div className={projectStyles.links}>
            <Link
              hoverable={true}
              text="Live Demo"
              url="https://practical-hugle-80cc92.netlify.app"
              type="flat"
              padding={[10, 20, 10, 20]}
              size={""}
              newWindow={true}
            />
            <Link
              hoverable={true}
              text="View on Github"
              url=""
              type="flat"
              padding={[10, 20, 10, 20]}
              size={""}
              newWindow={true}
            />
          </div>
        </Card>

      </div>
    </section>
  );
}
