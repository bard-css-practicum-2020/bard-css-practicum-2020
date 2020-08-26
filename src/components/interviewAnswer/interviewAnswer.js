import React from "react"

import { interviewAnswer } from "./interview-answer.module.css"

const InterviewAnswer = ({ children, subject }) =>
  subject ? (
    <p className={interviewAnswer}>
      <span className={subject}>{subject}: </span>
      {children}
    </p>
  ) : (
    <p className={interviewAnswer}>{children}</p>
  )

export default InterviewAnswer
