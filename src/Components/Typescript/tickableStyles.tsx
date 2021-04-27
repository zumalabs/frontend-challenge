import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Zen Dots", cursive;

  h1 {
    font-size: 3rem;

    @media (max-width: 700px) {
      font-size: 2rem;
    }

    @media (max-width: 550px) {
      font-size: 1.5rem;
    }
  }

  .up {
    color: #73e84f;
  }

  .down {
    color: #ff4747;
  }

  .mainText {
    font-size: 3rem;

    @media (max-width: 700px) {
      font-size: 2rem;
    }

    @media (max-width: 550px) {
      font-size: 1.5rem;
    }
  }

  .icon {
    align-self: center;
    font-size: 3rem;
  }

  .mainTextContainer {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .highLowContainer {
    flex: 0.5;
    margin: 10px;

    @media (max-width: 600px) {
      display: none;
    }
  }

  .highLowTextHeader {
    font-weight: bold;
  }
`;
