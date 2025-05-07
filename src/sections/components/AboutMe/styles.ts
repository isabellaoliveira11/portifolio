import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1640px;
  margin-bottom: 140px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .profile-pic {
    border-radius: 100%;
  }

  .description {
    width: 926px;

  h1 {
    font-family: "Raleway", sans-serif;
    font-weight: 800;
    font-size: 48px;
    line-height: 56px;

    background: linear-gradient(to right,rgb(162, 0, 255),rgb(214, 46, 122));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }


    p {
      font-family: "Raleway", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 40px;
      color: #ffffff;
      opacity: 50%;
    }
  }

  @media (max-width: 1910px) {
    padding: 0 140px;
    zoom: 85%;
  }

  @media (max-width: 1280px) {
    flex-direction: column;

    .description {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 0 48px;
    zoom: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-bottom: 80px;

    .description {
      width: 100%;
      margin-top: 32px;

      p {
        margin: 32px 0 0 0;
        font-family: "Raleway", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 25px;
      }
    }
  }
`;
