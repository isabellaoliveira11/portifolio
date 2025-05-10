import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1640px;
  margin: 140px auto;
  scroll-margin-top: 140px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;

  .profile-pic {
    border-radius: 100%;
    max-width: 380px;
    width: 100%;
    height: auto;
  }

  .description {
    max-width: 926px;
    width: 100%;

    h1 {
      font-family: "Raleway", sans-serif;
      font-weight: 800;
      font-size: 48px;
      line-height: 56px;
      background: linear-gradient(to right, #a855f7, #6f63f2);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      -webkit-text-fill-color: transparent;
      text-align: left;
    }

    p {
      font-family: "Raleway", sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 40px;
      color: #ffffff;
      opacity: 0.5;
      text-align: left;
    }
  }

  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
    padding: 0 48px;

    .profile-pic {
      margin-bottom: 32px;
    }

    .description {
      width: 100%;
      margin-top: 0;
      align-items: flex-start;

      h1,
      p {
        text-align: left;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 24px;
    margin-bottom: 80px;

    .description {
      h1 {
        font-size: 24px;
        line-height: 28px;
      }

      p {
        margin-top: 32px;
        font-size: 14px;
        line-height: 25px;
      }
    }
  }
`;
