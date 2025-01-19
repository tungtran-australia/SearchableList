import { StyledSearchField, Input } from "./SearchField.styles";
import PropTypes from "prop-types";

import { Search } from "react-feather";

const SearchField = ({ searchString = "", onChange }) => {
  return (
    <StyledSearchField>
      <Search size={16} color="#8E9AA5" />
      <Input
        type="text"
        placeholder="Search"
        value={searchString}
        onChange={onChange}
      />
    </StyledSearchField>
  );
};

SearchField.propTypes = {
  searchString: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchField;
