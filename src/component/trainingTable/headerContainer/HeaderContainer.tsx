import { Col, Row } from "react-bootstrap";

import StyledContainer from "../../common/container/StyledContainer";
import { IHeaderContainerProps } from "./HeaderContainerModel";
import SummaryContainer from "../summaryContainer/SummaryContainer";

import styles from "./HeaderContainer.module.css";

const HeaderContainer = (props: IHeaderContainerProps) => {
    return (
        <>
        <StyledContainer
          styleNames={new Array(`${styles["container-appear"]}`)}
        >
          <Row>
            <Col>{props.selectedRows.length !== 0 && <SummaryContainer />}</Col>
            <Col></Col>
          </Row>
        </StyledContainer>
      </>
    )
}

export default HeaderContainer