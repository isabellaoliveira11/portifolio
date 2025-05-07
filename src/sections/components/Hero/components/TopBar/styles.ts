import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  padding: 16px 0;

  backdrop-filter: blur(12px);
  background: linear-gradient(90deg, #0f0c29, #302b63, #24243e);

  display: flex;
  justify-content: center;
  align-items: center;

  .nav-wrapper {
    width: 100%;
    max-width: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sections {
    display: flex;
    gap: 40px;

    button {
      font-family: "Raleway", sans-serif;
      font-size: 16px;
      font-weight: 600;
      color: #e5e5e5;
      background: none;
      border: none;
      cursor: pointer;
      position: relative;
      padding: 4px 0;
      transition: all 0.3s ease;

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

      &.active {
        color: #a855f7;
      }

      &.active::after {
        width: 100%;
      }

      &:hover {
        color: #c084fc;
      }
    }
  }

  .lang {
    display: flex;
    gap: 12px;
    margin-left: 32px;

    .language {
      display: flex;
      align-items: center;
      gap: 6px;
      color: #ccc;
      background: none;
      border: none;
      cursor: pointer;
      font-weight: 500;

      img {
        width: 18px;
        height: 18px;
      }

      &:hover {
        color: #fff;
      }
    }
  }

  @media (max-width: 768px) {
    .sections {
      gap: 20px;
    }

    .lang {
      margin-left: 16px;
    }
  }
`;
