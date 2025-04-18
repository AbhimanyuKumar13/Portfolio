import styles from "./Skills.module.css";
import {
  FaReact,
  FaCode,
  FaTools,
  FaMicrosoft,
  FaCuttlefish,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiCplusplus,
  SiJavascript,
  SiPython,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.heading}>My Skills</h2>

      <SkillCategory
        icon={<FaReact />}
        title="Web Development"
        skills={[
          {
            name: "MERN Stack",
            level: 95,
            icon: (
              <div className={styles.mernIcons}>
                <SiMongodb title="MongoDB" />
                <SiExpress title="Express" />
                <FaReact title="React" />
                <SiNodedotjs title="Node.js" />
              </div>
            ),
          },
        ]}
      />

      <SkillCategory
        icon={<FaCode />}
        title="Programming Languages"
        skills={[
          { name: "C++", level: 95, icon: <SiCplusplus /> },
          { name: "JavaScript", level: 90, icon: <SiJavascript /> },
          { name: "C", level: 80, icon: <FaCuttlefish /> },
          { name: "Python", level: 50, icon: <SiPython /> },
          {
            name: "DSA (CPP)",
            level: 60,
            label: "Medium",
            icon: <TbBrandCpp />,
          },
        ]}
      />

      <SkillCategory
        icon={<FaTools />}
        title="Additional Skills"
        skills={[
          { name: "Video & Photo Editing", level: 95, icon: <FaTools /> },
        ]}
      />

      <SkillCategory
        icon={<FaMicrosoft />}
        title="MS Office"
        skills={[
          { name: "Word", level: 95, icon: <FaMicrosoft /> },
          { name: "PowerPoint", level: 95, icon: <FaMicrosoft /> },
          { name: "Excel", level: 50, icon: <FaMicrosoft /> },
        ]}
      />
    </div>
  );
};

const SkillCategory = ({ icon, title, skills }) => (
  <div className={styles.category}>
    <h3>
      {icon} {title}
    </h3>
    <div className={styles.skillGrid}>
      {skills.map((skill, i) => (
        <Skill key={i} {...skill} />
      ))}
    </div>
  </div>
);

const Skill = ({ name, level, label, icon }) => (
  <div className={styles.skill}>
    <div className={styles.label}>
      <span className={styles.icon}>{icon}</span>
      <span>
        {name} {label && <em>({label})</em>}
      </span>
    </div>
    <div className={styles.progressBar}>
      <div className={styles.fill} style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

export default Skills;
