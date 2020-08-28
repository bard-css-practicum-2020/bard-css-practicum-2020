import React from "react"

import styles from "./interview-question.module.css"

const InterviewQuestion = ({ interviewer, children }) =>
  interviewer ? (
    <p className={styles.interviewQuestion}>
      <span className={styles.interviewer}>{interviewer}</span>
      {children}
    </p>
  ) : (
    <p className={styles.interviewQuestion}>{children}</p>
  )

export default InterviewQuestion
