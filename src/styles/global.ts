import styled from "styled-components";

export const Container = styled.div`
  --PURPLE: #a855f7;
  --DARK: #0C0F17;

  background-color: var(--DARK);
  width: 100vw;
  height: 100vh;

  overflow-x: hidden;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;



  
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(123, 74, 226, 0.1);
    border-radius: 16px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(123, 74, 226, 0.5);
    border-radius: 16px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(123, 74, 226, 0.3);
  }

  button {
    cursor: pointer;
    appearance: none;
    outline: none;
    background: transparent;
  }
`;
