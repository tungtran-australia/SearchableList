import {
  StyledSectionListItem,
  StyledProfilePhoto,
  TextContainer,
  Name,
  Email,
} from "./SectionListItem.styles";

const randomRBG = () => {
  const r = Math.floor(Math.random() * 128);
  const b = Math.floor(Math.random() * 128);
  const g = Math.floor(Math.random() * 128);
  return `rgb(${r}, ${g}, ${b})`;
};

const ProfilePhoto = ({ name }) => {
  const initials = name
    .trim()
    .split(" ")
    .map((n) => n.charAt(0).toUpperCase());

  const color1 = randomRBG();
  const color2 = randomRBG();

  return (
    <StyledProfilePhoto $random>{initials.slice(0, 2)}</StyledProfilePhoto>
  );
};

const SectionListItem = ({ name, email, showEmail }) => (
  <StyledSectionListItem>
    <ProfilePhoto name={name} />
    <TextContainer>
      <Name>{name}</Name>
      {showEmail && <Email>{email}</Email>}
    </TextContainer>
  </StyledSectionListItem>
);

export default SectionListItem;
