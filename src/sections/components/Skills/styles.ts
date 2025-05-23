import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;

  width: 100%;
  max-width: 1645px;


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

  h3 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;

    color: rgba(255, 255, 255, 0.5);
    margin: 0 0 40px 0;
  }

  .techs {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 32px;
  margin: 0 0 60px 0;
  padding-bottom: 24px;
  zoom: 90%;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: white;
  transition: transform 0.3s ease;
  position: relative;
}

.tech-item img {
  width: 70px;
  height: 70px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.tech-item span {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Efeito ao passar o mouse */
.tech-item:hover img {
  transform: scale(1.2);
}

.tech-item:hover span {
  opacity: 1;
  transform: translateY(0);
}

  @media (max-width: 1440px) {
    zoom: 80%;
  }

  @media (max-width: 798px) {
    zoom: 100%;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 24px;
      margin: 16px 0 32px 0;
      text-align: left;
    }

    h3 {
      text-align: left;
      font-size: 14px;
    }

    .techs {
      gap: 16px;
    }
  }

  @media (max-width: 670px) {
    .techs {
      overflow-x: scroll;
      justify-content: flex-start;
      padding-right: 24px;
    }
  }
  
  @media (max-width: 500px) {
    .techs {
      zoom: 60%;
    }
  }

  @media (max-width: 500px) {
    .techs {
      zoom: 60%;
    }
  }
`;

