import React from "react"
import classnames from "classnames"

import styles from "./interview-answer.module.css"

const InterviewAnswer = ({ children, homepage = false, subject }) =>
  subject ? (
    <p className={styles.interviewAnswer}>
      <span
        className={classnames(styles.subject, {
          [styles.homepage]: homepage,
        })}
      >
        {subject}
      </span>
      {children}
    </p>
  ) : (
    <p className={styles.interviewAnswer}>{children}</p>
  )

export default InterviewAnswer
