import styled from "@emotion/styled";
import { useEffect } from "react";

export const FirstLoad = ({ loadData }) => {
  const Wrapper = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  `;
  //First loading, when component unmounts - event listener will be removed
  useEffect(() => {
    const firstLoad = (event) => {
      if (event.code === "Enter") {
        event.preventDefault();
        loadData();
      }
    };
    window.addEventListener("keydown", firstLoad);
    return () => {
      window.removeEventListener("keydown", firstLoad);
    };
  }, []);

  return (
    <Wrapper>
      <div>Press Enter to load ads...</div>
    </Wrapper>
  );
};
