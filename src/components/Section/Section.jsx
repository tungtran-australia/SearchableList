import { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDown, ChevronRight } from "react-feather";

import SectionListItem from "./SectionListItem";
import {
  StyledSectionHeader,
  StyledSectionList,
  StyledSection,
} from "./Section.styles";

const SectionHeader = ({ title, onClick, isCollapsed }) => (
  <StyledSectionHeader onClick={onClick}>
    <span>{title}</span>
    {isCollapsed ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
  </StyledSectionHeader>
);

const SectionList = ({ items, showEmail }) => (
  <StyledSectionList>
    {items.map(({ name, email }) => (
      <SectionListItem
        key={email}
        name={name}
        email={email}
        showEmail={showEmail}
      />
    ))}
  </StyledSectionList>
);

const Section = ({
  title,
  items = [],
  showEmail = true,
  initialIsCollapsed = false,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(initialIsCollapsed);

  function toggleCollapsed() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <StyledSection>
      <SectionHeader
        title={title}
        onClick={toggleCollapsed}
        isCollapsed={isCollapsed}
      />
      {!isCollapsed && <SectionList items={items} showEmail={showEmail} />}
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string,
    }),
  ),
  showEmail: PropTypes.bool,
};

export default Section;
