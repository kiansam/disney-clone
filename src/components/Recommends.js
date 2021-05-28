import styled from "styled-components";
import { Link } from "react-router-dom";

const Recommends = (props) => {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <Link></Link>
        </Wrap>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`

`



export default Recommends;
