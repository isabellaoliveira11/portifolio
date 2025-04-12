import styled, { css } from "styled-components";

interface ContainerProps {
  language: string;
}

export const Container = styled.div<ContainerProps>`
  transition: all 0.2s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: flex-start; /* Alinha os itens à esquerda inicialmente */

  height: 40px;
  width: 100%;
  max-width: 1280px;
  padding: 0 24px;
  margin: 0 auto;

  .sections {
    display: flex;
    align-items: center;
    gap: 24px;
    flex-grow: 1; /* Faz a seção ocupar o máximo de espaço possível, empurrando os outros para o final */

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

      :hover {
        color: var(--PURPLE);
      }

      &.active {
        color: var(--PURPLE);
        opacity: 100%;
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }

  .lang {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-left: auto; /* Empurra a seção de idiomas para a direita */

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
        margin-left: 8px; /* Adiciona um espaço entre o texto e a imagem */
      }

      :hover {
        color: var(--PURPLE);
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
`;