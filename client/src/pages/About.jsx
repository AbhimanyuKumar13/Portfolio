import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.heading}>About Me</h1>

      <div className={styles.cardGrid}>
        {/* Basic Information Card */}
        <div className={styles.card}>
          <h2>Basic Information</h2>
          <ul>
            <li>
              <strong>Name:</strong> Abhimanyu Kumar
            </li>
            <li>
              <strong>Location:</strong> Siwan, Bihar, India
            </li>
            <li>
              <strong>Email:</strong> ak6547765@gmail.com
            </li>
            <li>
              <strong>Mobile:</strong> 7004838504
            </li>
          </ul>
        </div>

        {/* Career Objective Card */}
        <div className={styles.card}>
          <h2>Career Objective</h2>
          <p>
            To secure a challenging position where I can effectively contribute
            my skills and grow professionally, while making the best use of my
            potential. My long-term goal is to gain valuable experience, develop
            innovative ideas, and eventually establish my own successful
            business.
          </p>
        </div>

        {/* Educational Qualification Card */}
        <div className={styles.card}>
          <h2>Educational Qualification</h2>
          <div className={styles.educationGrid}>
            <div className={styles.eduItem}>
              <p><strong>Course:</strong> B.Tech</p>
              <p><strong>University:</strong> IKGPTU</p>
              <p><strong>Year:</strong> 2026</p>
              <p><strong>Marks:</strong> -</p>
              <p><strong>Percentage:</strong> -</p>
            </div>
            <div className={styles.eduItem}>
              <p><strong>Course:</strong> 12th</p>
              <p><strong>Board:</strong> BSEB</p>
              <p><strong>Year:</strong> 2022</p>
              <p><strong>Marks:</strong> 500</p>
              <p><strong>Percentage:</strong> 78%</p>
            </div>
            <div className={styles.eduItem}>
              <p><strong>Course:</strong> 10th</p>
              <p><strong>Board:</strong> BSEB</p>
              <p><strong>Year:</strong> 2020</p>
              <p><strong>Marks:</strong> 500</p>
              <p><strong>Percentage:</strong> 81%</p>
            </div>
          </div>
        </div>

        {/* Personal Details Card */}
        <div className={styles.card}>
          <h2>Personal Details</h2>
          <ul>
            <li><strong>Father’s Name:</strong> Ashok Pandit</li>
            <li><strong>Mother’s Name:</strong> Nirmala Devi</li>
            <li><strong>Date of Birth:</strong> 5 May 2005</li>
            <li><strong>Gender:</strong> Male</li>
            <li><strong>Nationality:</strong> Indian</li>
            <li><strong>Marital Status:</strong> Unmarried</li>
            <li><strong>Languages Known:</strong> English, Hindi, Bhojpuri</li>
            <li><strong>Hobbies:</strong> Playing Chess, Watching Movies</li>
          </ul>
        </div>
      </div> 
    </div>
  );
};

export default About;
