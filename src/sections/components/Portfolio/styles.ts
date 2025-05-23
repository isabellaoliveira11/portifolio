import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1640px;
  margin-bottom: 100px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin-bottom: 100px;

    >
    h1 {
      font-family: "Raleway", sans-serif;
      font-weight: 800;
      font-size: 48px;
      line-height: 56px;
      background: linear-gradient(to right, #a855f7, #6f63f2); /* degrade roxo */
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      -webkit-text-fill-color: transparent;
    }
    .buttons {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      gap: 32px;
    }
  }

  .cards {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    width: 100%;
    margin-bottom: 48px;
    gap: 48px;
    padding-bottom: 24px;
  }

  .see-more-projects {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }
  }

  @media (max-width: 1910px) {
    zoom: 85%;
  }

  @media (max-width: 1440px) {
    zoom: 80%;
  }

  @media (max-width: 1280px) {
    .cards {
      justify-content: center;
    }
  }

  @media (max-width: 840px) {
    .header {
      align-items: flex-start;
      flex-direction: column;
      gap: 32px;
    }
  }

  @media (max-width: 768px) {
    zoom: 100%;
    margin-bottom: 80px;

    .header {
      margin-bottom: 32px;
      > h1 {
        margin: 16px 0 0 0;
        font-size: 24px;
        line-height: 28px;
      }
    }

    .cards {
      justify-content: flex-start;
      flex-wrap: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;
      gap: 16px;
      padding-right: 64px;
      margin-bottom: 24px;
    }

    .see-more-projects {
      .buttons {
        flex-direction: column;
      }
    }
  }
`;
