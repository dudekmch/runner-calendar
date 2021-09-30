import { Container } from "react-bootstrap"

import { IStyledContainer } from "./StyledContainerModel"
import styles from "./StyledContainer.module.css"

const StyledContainer = (props: IStyledContainer) => {
    return <Container className={`${styles["container-card"]} ${props.styleNames?.join(' ')}` }>{props.children}</Container>
}

export default StyledContainer;