import ProjectCard from "../components/ProjectCard";
import styles from "../styles/Projects.module.css";

//image imports
import studyFlashImage from "../assets/studyFlash-screenshot.png";
import AutoBodyImage from "../assets/AutoBody-screenshot.png";

const ProjectPage = () =>{
    return(
        <div>
            <h1 className={styles.underline}> My Projects </h1>
            <div className={styles.projectContainer}>
                <ProjectCard
                title="StudyFlash"
                imageUrl={studyFlashImage}
                alt="Screenshot taken from StudyFlash website"
                link="https://studyflash.study"
                />
                <ProjectCard
                title="Auto Body Site"
                imageUrl={AutoBodyImage}
                alt="Screenshot taken from auto body website"
                link="https://santoyoautobodyshop.com"
                />
            </div>
        </div>

    );
}

export default ProjectPage;
