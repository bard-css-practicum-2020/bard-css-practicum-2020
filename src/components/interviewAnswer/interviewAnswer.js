import React from "react"

import styles from "./interview-answer.module.css"

const InterviewAnswer = ({ children, subject }) =>
  subject ? (
    <p className={styles.interviewAnswer}>
      <span className={styles.subject}>{subject}</span>
      {children}
    </p>
  ) : (
    <p className={styles.interviewAnswer}>{children}</p>
  )

export default InterviewAnswer
