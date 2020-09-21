import React from "react"
import classnames from "classnames"

import styles from "./interview-question.module.css"

const InterviewQuestion = ({ interviewer, homepage = false, children }) => {
  console.log("test")
  return interviewer ? (
    <p className={styles.interviewQuestion}>
      <span
        className={classnames(styles.interviewer, {
          [styles.homepage]: homepage,
        })}
      >
        {interviewer}
      </span>
      {children}
    </p>
  ) : (
    <p className={styles.interviewQuestion}>{children}</p>
  )
}

export default InterviewQuestion
