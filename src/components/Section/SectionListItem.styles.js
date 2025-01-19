import styled from "styled-components";

export const StyledSectionListItem = styled.li`
  display: flex;
  align-items: center;
  height: 52px;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background: #eeeeee;
  }
  &:active {
    background: #eeeeee;
  }
`;

const randomRBG = () => {
  const r = Math.floor(Math.random() * 128);
  const b = Math.floor(Math.random() * 128);
  const g = Math.floor(Math.random() * 128);
  return `rgb(${r}, ${g}, ${b})`;
};

export const StyledProfilePhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;
  border-radius: 50%;

  color: #fff;
  background: radial-gradient(
    circle,
    ${(props) => (props.$random ? randomRBG() : "#888")} 0%,
    ${(props) => (props.$random ? randomRBG() : "#888")} 100%
  );

  text-transform: "uppercase";
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0 8px;
`;

export const Name = styled.div`
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  color: #20374b;
`;

export const Email = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: #5a6d80;
`;
