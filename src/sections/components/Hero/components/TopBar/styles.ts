import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 0;
  z-index: 1000;

  display: flex;
  justify-content: center;

  .nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end; /* alinha tudo à direita */
    gap: 24px;

    width: 100%;
    max-width: 1280px;
    padding: 6px 20px;

    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: 12px;

    img {
      width: 36px;
      margin-right: 24px;
    }
  }

  .sections {
    display: flex;
    gap: 24px;

    button {
      font-family: "Raleway", sans-serif;
      font-size: 13px;
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
    gap: 8px;

    .language {
      display: flex;
      align-items: center;
      gap: 4px;
      color: #ccc;
      background: none;
      border: none;
      cursor: pointer;
      font-weight: 500;

      img {
        width: 16px;
        height: 16px;
      }

      &:hover {
        color: #fff;
      }
    }
  }

  /* Responsividade */
  @media (max-width: 1150px) {
    .nav-wrapper {
      zoom: 90%;
    }
  }

  @media (max-width: 1045px) {
    .nav-wrapper {
      zoom: 80%;
    }
  }

  @media (max-width: 960px) {
    .nav-wrapper {
      zoom: 100%;
      flex-direction: column;
      gap: 12px;
      align-items: flex-end;
    }

    .sections {
      gap: 16px;
    }

    .lang {
      margin-left: 0;
    }
  }
`;
