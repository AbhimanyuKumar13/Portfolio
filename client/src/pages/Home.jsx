import React from "react";
import styles from "./Home.module.css";
import profile from "../assets/nobg.png";
import { Typewriter } from "react-simple-typewriter";

export const Home = () => {
  const d = new Date();
  let hour = d.getHours();
  let greeting = "";

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <div className={styles.home}>
      <div className={styles.overlay}></div>

      <div className={styles.leftHome}>
        <h1 className={styles.greeting}>Hello, {greeting}</h1>
        <h1 className={styles.name}>
          It's me, <span className={styles.highlight}>A</span>bhi
        </h1>

        <h1 className={styles.skills}>
          I'm a{" "}
          <span className={styles.typewriter}>
            <Typewriter
              words={["CSE Student","Developer", "MERN Stack Enthusiast", "Tech Explorer"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <p className={styles.subtitle}>
          I am a Computer Science & Engineering Student (2022–26).
          A passionate developer who loves to build and design amazing website
          experiences.
        </p> 
      </div>

      <div className={styles.rightHome}>
        <div className={styles.imageContainer}>
          <img src={profile} alt="Profile" className={styles.profileImage} />
        </div>
      </div>
    </div>
  );
};
