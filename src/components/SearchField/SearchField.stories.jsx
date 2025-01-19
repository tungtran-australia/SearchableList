import SearchField from "./SearchField";

export default {
  title: "Components/SearchField",
  component: SearchField,
  tags: ["autodocs"],
};

export const Default = {
  args: {},
};

export const WithInitialValue = {
  args: {
    searchString: "Initial value",
  },
};
