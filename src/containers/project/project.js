import React from "react"
import classnames from "classnames"

import Title from "~components/title/title"
import SubTitle from "~components/subTitle/subTitle"

import styles from "./project.module.css"

const Project = ({ title, author, children, className }) => (
  <div className={classnames(styles.project, className)}>
    <Title>{title}</Title>
    <SubTitle>by {author}</SubTitle>
    <div className={styles.content}>{children}</div>
  </div>
)

export default Project
