import styles from '../styles/Hero.module.css';
import portrait from '../assets/luffyportrait.jpg';
import resume from '../assets/HR_Resume.pdf';

//Import icons
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";


function Hero(){

    return(

        <div className={styles.heroContainer}>
            <div>
                <img src={portrait} alt='Portrait' className={styles.portrait}></img>
            </div>
            <div className={styles.textContainer}>
                <h1 className={`${styles.text} ${styles.gradient}`}>Hector Ramos</h1>
                <h2 className={`${styles.text} ${styles.underline}`}>Full-stack Software Engineer</h2>
                <div className={styles.socialsContainer}>
                    <ul className={styles.socials}>
                        <li><a href={resume} className={styles.link} target="_blank" rel="noopener noreferrer"><IoDocumentTextOutline size={30}></IoDocumentTextOutline></a></li>
                        <li><a href='https://github.com/seb1124' className={styles.link} target="_blank" rel="noopener noreferrer"><FaGithubSquare size={30}></FaGithubSquare></a></li>
                        <li><a href='https://www.linkedin.com/in/hector-ramos/' className={styles.link} target="_blank" rel="noopener noreferrer"><FaLinkedin size={30}></FaLinkedin></a></li>
                        <li><a href='mailto:hector.ramos.cs@gmail.com' className={styles.link} target="_blank" rel="noopener noreferrer"><CgMail size={40}></CgMail></a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Hero;
