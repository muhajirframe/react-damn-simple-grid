import styled from "react-emotion";

const Grid = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > * {
    flex-basis: ${props => 100 / props.itemsPerRow}%;
    flex-grow: 1;
    max-width: ${props => 100 / props.itemsPerRow - props.horizontalSpace}%;
    ${props => `margin-bottom: ${props.verticalSpace}px`};
  }
`;
Grid.defaultProps = {
  itemsPerRow: 4,
  horizontalSpace: 1,
  verticalSpace: 0
};

export default Grid;
