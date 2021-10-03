import { Col, Row } from "react-bootstrap";

import StyledContainer from "../../common/container/StyledContainer";
import { IHeaderContainerProps } from "./HeaderContainerModel";
import SelectedRowsSummary from "./selectedRowsSummary/SelectedRowsSummary";
import TrainingSummary from "./trainingSummary/TrainingSummary";
import { IInterval } from "../../../model/Training";

import styles from "./HeaderContainer.module.css";
import FileInput from "../../fileInput/FileInput";

const HeaderContainer = (props: IHeaderContainerProps) => {
  const getSummaryRow = (): IInterval | undefined => {
    const calories: number[] = props.allRows.map((item) => item.calories);
    const biggestCalories = Math.max(...calories);
    return props.allRows.find((item) => item.calories === biggestCalories);
  };
  return (
    <>
      <StyledContainer styleNames={new Array(`${styles["container-appear"]}`)}>
        <Row>
          <Col>
            <FileInput fileLoadedHandler={props.fileLoadedHandler} fileRemoveHandler={props.fileRemoveHandler}></FileInput>
          </Col>
        </Row>
        {props.isTrainingSet && (
          <Row>
            <Col>
              <TrainingSummary summaryRow={getSummaryRow()} />
            </Col>
            <Col>
              <SelectedRowsSummary selectedRows={props.selectedRows} />
            </Col>
          </Row>
        )}
      </StyledContainer>
    </>
  );
};

export default HeaderContainer;
