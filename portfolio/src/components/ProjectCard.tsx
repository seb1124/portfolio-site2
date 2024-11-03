import styles from '../styles/Projects.module.css';

interface ProjectCardProps{
    title: string;
    imageUrl: string;
    alt: string;
    link: string;
}

function ProjectCard({title, imageUrl, alt, link}: ProjectCardProps){

    return(
        <a target='_blank' rel="noopener noreferrer" href={link} className={styles.link}>
            <div className={styles.cardContainer}>
                <img src={imageUrl} alt={alt} className={styles.projectImage}></img>
                <h3>{title}</h3>
            </div>
        </a>
    );
}

export default ProjectCard;
