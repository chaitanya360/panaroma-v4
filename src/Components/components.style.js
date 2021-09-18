import styled from "styled-components";

export const SidebarStyle = styled.section`
  width: 40vw;
  display: flex;
  max-height: 100vh;
`;

export const ContentStyle = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 2rem;
  display: flex;
  place-items: center;
  img {
    width: 100%;
    height: 90vh;
    object-fit: contain;
  }
`;

export const PanaromaViewerStyle = styled.div`
  width: 100%;
  height: 50vh;
  padding: 1rem;
  background-color: black;
`;

export const SelectorStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-gap: 1px;
  overflow-y: auto;
  background-color: grey;
`;

export const SelectorItemStyle = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid transparent;

  :hover {
    border-color: lightblue !important;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 4px 2px 0 0;
  }

  .image-title {
    width: 100%;
    text-align: center;
  }
`;
