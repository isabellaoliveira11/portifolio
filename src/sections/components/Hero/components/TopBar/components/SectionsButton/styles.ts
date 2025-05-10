import styled, { css } from "styled-components";

interface ContainerProps {
  language: string;
}

export const Container = styled.div<ContainerProps>`
  transition: all 0.2s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;
  width: 100%;
  max-width: 1280px;
  padding: 0 24px;
  margin: 0 auto;

  .nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 24px;

    > img {
      width: 38px;
      margin-right: 24px;
    }
  }

  .sections {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    flex: 1; /* centraliza horizontalmente entre logo e lang */

    /* ✅ Estilo do botão badge Status */
    .status-badge {
      display: flex;
      align-items: center;
      gap: 8px;
      background: none;
      border: none;
      cursor: pointer;

      font-family: "Raleway", sans-serif;
      font-weight: 700;
      font-size: 17px;
      color: #4ade80;
      opacity: 100%;

      span {
        color: #4ade80;
      }

      &:hover {
        color: #4ade80;
        opacity: 1;
      }

      &::after {
        display: none !important;
      }
    }

    button {
      font-family: "Raleway", sans-serif;
      font-weight: 400;
      font-size: 18px;
      color: white;
      opacity: 50%;
      border: 0;
      padding: 0;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s ease-in-out;
      position: relative;

      :hover {
        color: rgb(255, 255, 255);
      }

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -4px;
        width: 0%;
        height: 2px;
        background: linear-gradient(90deg, #6f63f2, #a855f7);
        border-radius: 4px;
        transition: width 0.4s ease;
      }

      &:hover::after {
        width: 100%;
      }

      &.active::after {
        width: 100%;
      }

      &.active {
        color: linear-gradient(90deg, rgb(169, 55, 235), rgb(255, 0, 145));
        opacity: 100%;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }

  .lang {
    display: flex;
    align-items: center;
    gap: 16px;

    button.language {
      transition: all 0.2s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      border: none;
      width: 56px;
      font-family: "Raleway", sans-serif;
      font-weight: 700;
      font-size: 18px;
      color: #ffffff;
      opacity: 60%;

      img {
        width: 24px;
        height: 24px;
        margin-left: 8px;
      }

      :hover {
        color: var(--PURPLE);
      }
    }

    #pt {
      ${(props) =>
        props.language === "pt" &&
        css`
          color: var(--PURPLE);
          opacity: 100%;
        `}
    }

    #en {
      ${(props) =>
        props.language === "en" &&
        css`
          color: var(--PURPLE);
          opacity: 100%;
        `}
    }
  }
`;
