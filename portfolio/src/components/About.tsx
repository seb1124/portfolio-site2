import styles from '../styles/About.module.css';

// react-icons
// Language Icons
import { FaPython } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";

// Framework Icons
import { FaReact } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";

// Library Icons
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";


// Technology Icons
import { FaGithub } from "react-icons/fa";
import { SiJupyter } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiVite } from "react-icons/si";


function About(){
    return(
        <div className={styles.aboutContainer}>
            <h1 className={styles.underline}>About Me</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <h2 className={styles.underline2}>Skills</h2>

            <div className={styles.skillsContainer}>
                <div>
                    <h3>Languages</h3>
                    <ul className={styles.skills}>
                        <li><FaPython size={30}></FaPython></li>
                        <li><FaJava size={30}></FaJava></li>
                        <li><FaHtml5 size={30}></FaHtml5></li>
                        <li><FaCss3Alt size={30}></FaCss3Alt></li>
                        <li><IoLogoJavascript size={30}></IoLogoJavascript></li>
                        <li><SiTypescript size={27}></SiTypescript></li>
                        <li><FaPhp size={30}></FaPhp></li>
                    </ul>
                </div>
                <div>
                    <h3>Libraries</h3>
                    <ul className={styles.skills}>
                        <li><SiPandas size={30}></SiPandas></li>
                        <li><SiNumpy size={30}></SiNumpy></li>
                        <li><SiScikitlearn size={30}></SiScikitlearn></li>
                    </ul>
                </div>
                <div>
                    <h3>Frameworks</h3>
                    <ul className={styles.skills}>
                        <li><FaReact size={30}></FaReact></li>
                        <li><FaBootstrap size={30}></FaBootstrap></li>
                        <li><SiExpress size={30}></SiExpress></li>
                    </ul>
                </div>
                <div>
                    <h3>Technologies</h3>
                    <ul className={styles.skills}>
                        <li><FaGithub size={30}></FaGithub></li>
                        <li><SiJupyter size={30}></SiJupyter></li>
                        <li><SiMongodb size={30}></SiMongodb></li>
                        <li><SiMysql size={30}></SiMysql></li>
                        <li><SiVite size={30}></SiVite></li>

                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default About;
