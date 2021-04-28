import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Zen Dots", cursive;

  .up {
    color: #73e84f;
  }

  .down {
    color: #ff4747;
  }

  .mainText {
    font-size: 2rem;

    @media (max-width: 700px) {
      font-size: 1.6rem;
    }

    @media (max-width: 550px) {
      font-size: 1.2rem;
    }
  }

  .differenceText {
    font-weight: 400px;
    font-size: 12px;
    color: #c7c7c7;
  }

  .icon {
    align-self: center;
    font-size: 2.5rem;
    width: 40;

    @media (max-width: 700px) {
      font-size: 1.6rem;
    }

    @media (max-width: 550px) {
      font-size: 1.2rem;
    }
  }

  .mainTextContainer {
    flex: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .highLowContainer {
    flex: 0.5;
    justify-content: center;
    align-items: center;

    @media (max-width: 650px) {
      display: none;
    }
  }

  .highLowTextHeader {
    font-weight: bold;
  }
`;
