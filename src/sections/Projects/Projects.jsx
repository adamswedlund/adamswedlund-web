import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import gocapture from "../../assets/gocapture.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle"> Projects</h1>
      <div className={styles.projectsContainer}>
        <a href="google.com" target="_blank">
          <img className="hover" src={viberr} alt="Viberr logo"></img>
          <h3>LiquidVision</h3>
          <p>AI-Powered Liquid Analysis</p>
        </a>
        <a href="google.com" target="_blank">
          <img className="hover" src={gocapture} alt="GoCapture logo"></img>
          <h3>GoCapture</h3>
          <p>Milwaukee Based Photography Locations</p>
        </a>
      </div>
    </section>
  );
}

export default Projects;
