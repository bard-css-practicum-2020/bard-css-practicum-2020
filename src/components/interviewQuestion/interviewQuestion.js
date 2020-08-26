import React from "react"

import { interviewQuestion } from "./interview-question.module.css"

const InterviewQuestion = ({ interviewer, children }) =>
  interviewer ? (
    <p className={interviewQuestion}>
      <span>{interviewer}: </span>
      {children}
    </p>
  ) : (
    <p className={interviewQuestion}>{children}</p>
  )

export default InterviewQuestion
