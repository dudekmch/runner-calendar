import { Container } from "react-bootstrap"

import styles from "./StyledContainer.module.css"

const StyledContainer = (props: any) => {
    return <Container className={styles["container-card"]}>{props.children}</Container>
}

export default StyledContainer;