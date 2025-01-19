import { useState } from "react";
import PropTypes from "prop-types";

import SearchField from "../SearchField/SearchField";
import Section from "../Section/Section";

import { StyledSearchableList } from "./SearchableList.styles";

const SearchableList = ({
  sections = {},
  showEmail = true,
  initialSearchString = "",
}) => {
  const [searchString, setSearchString] = useState(initialSearchString);
  const [filteredSections, setFilteredSections] = useState(
    filterItemsByName(sections, searchString),
  );

  function handleInputChange(e) {
    setSearchString(e.target.value);
    const nextFilteredSections = filterItemsByName(sections, e.target.value);
    setFilteredSections(nextFilteredSections);
  }

  function filterItemsByName(sections, searchString) {
    console.log(searchString);
    const result = {};
    for (const title in sections) {
      if (sections.hasOwnProperty(title)) {
        result[title] = sections[title].filter((item) =>
          //item.name.toLowerCase().includes(searchString.toLowerCase())
          item.name.toLowerCase().startsWith(searchString.toLowerCase()),
        );
      }
    }
    return result;
  }

  return (
    <StyledSearchableList>
      <SearchField
        searchString={searchString}
        onChange={handleInputChange}
      ></SearchField>
      {Object.entries(filteredSections).map(([name, items]) => {
        return (
          <Section
            key={name}
            title={name}
            items={items}
            showEmail={showEmail}
          />
        );
      })}
    </StyledSearchableList>
  );
};

SearchableList.propTypes = {
  sections: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    ),
  ),
  showEmail: PropTypes.bool,
  initialSearchString: PropTypes.string,
};

export default SearchableList;
