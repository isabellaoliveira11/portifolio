import styled from "styled-components";

interface ContainerProps {
  language: string;
}

export const Container = styled.div<ContainerProps>`
  transition: all 0.2s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 32px;

  .sections {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 24px;

    button {
      position: relative;
      font-family: "Raleway", sans-serif;
      font-weight: 400;
      font-size: 16px;
      background: none;
      border: none;
      color: white;
      opacity: 0.5;
      padding: 8px 0;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;

      transition: all 0.3s ease-in-out;

      &:hover {
        color: var(--PURPLE);
        opacity: 1;
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        height: 2px;
        width: 100%;
        background: linear-gradient(90deg, #6366f1, #a855f7);
        border-radius: 4px;

        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease-in-out;
      }

      &.active {
        opacity: 1;
        background: linear-gradient(90deg, #6366f1, #a855f7);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      &.active::after {
        transform: scaleX(1);
      }
    }
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

      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;

      color: #ffffff;
      opacity: 0.6;

      img {
        width: 24px;
        height: 24px;
      }

      &:hover {
        color: var(--PURPLE);
        opacity: 1;
      }

      &.active {
        color: var(--PURPLE);
        opacity: 1;
      }
    }
  }
`;
