import styled from "react-emotion";

const Grid = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > * {
    flex-basis: ${props => 100 / props.itemsPerRow}%;
    flex-grow: 1;
    max-width: ${props => 100 / props.itemsPerRow - props.xSpace}%;
    ${props => `margin-bottom: ${props.ySpace}px`};
  }
`;
Grid.defaultProps = {
  itemsPerRow: 4,
  xSpace: 1,
  ySpace: 20
};

export default Grid;
