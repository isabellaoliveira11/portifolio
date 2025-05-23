import styled, { css } from "styled-components";

interface ContainerProps {
  language: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;
  margin-top: 32px;

  button.pulse {
    display: flex;
    align-items: center;
    justify-content: center;

    outline: none;
    appearance: none;
    border: none;
    gap: 4px;
    margin-top: 32px;

    background: rgba(74, 226, 144, 0.1);
    padding: 8px 16px;
    border-radius: 8px;

    font-size: 16px;
  }

  img.avatar {
    transition: all 0.6s ease-in-out;
    height: 500px;
    margin-top: 40px;
    margin-left: 5%;
  }

  .social-medias {
    width: 100%;
    gap: 16px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lang {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;

    button.language {
      transition: all 0.2s ease-in-out;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0;
      outline: none;
      border: none;
      width: 56px;
      margin-top: 32px;

      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      display: flex;

      color: #ffffff;
      opacity: 60%;

      img {
        width: 24px;
        height: 24px;
      }

      :hover {
        transition: all 0.2s ease-in-out;
        color: var(--PURPLE);
        opacity: 100%;
      }
    }

    #pt {
      ${(props) =>
        props?.language === "pt" &&
        css`
          color: var(--PURPLE);
          opacity: 100%;
        `}
    }

    #en {
      ${(props) =>
        props?.language === "en" &&
        css`
          color: var(--PURPLE);
          opacity: 100%;
        `}
    }
  }

  .texts {
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    .name-and-title {

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
      h6 {
        margin: 0;
        white-space: nowrap;

        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #ffffff;
        opacity: 50%;
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      gap: 24px;

      margin-bottom: 8px;
      margin-top: 24px;

      zoom: 90%;

      a {
        margin: 0;
        appearance: none;
        text-decoration: none;
        transition: all 0.2s ease-in-out;
        white-space: nowrap;

        display: flex;
        align-items: flex-center;
        justify-content: flex-end;
        gap: 4px;

        font-family: "Raleway";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        text-align: center;
        text-justify: center;

        color: rgba(123, 74, 226, 0.5);

        :hover {
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          opacity: 0.5;
        }

        svg {
          margin-top: -4px !important;
        }
      }
    }
  }

  @media (max-width: 500px) {
    img.avatar {
      height: auto;
      width: 100%;
    }
  }

  @media (max-width: 375px) {
    .texts {
      .name-and-title {
        h6 {
          white-space: initial;
        }
      }

      .buttons {
        justify-content: flex-start;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`;
