import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  padding-top: 40px;

  position: fixed;
  top: 0;
  z-index: 10;

  background-color: transparent;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 90%;
    padding: 12px 24px;

    border-radius: 16px;

    transition: background 0.3s ease, backdrop-filter 0.3s ease;

    > img {
      width: 32px;
      height: 32px;
    }

    .social-medias {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 16px;
    }
  }

  &.scrolled {
    background-color: transparent;

    .content {
      background: rgba(10, 10, 25, 0.6); /* fundo escuro translúcido */
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }
  }
`;
