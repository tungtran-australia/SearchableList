import SearchableList from "./SearchableList";

// mock data
const sections = {
  Attended: [
    {
      name: "Dianna Russell",
      email: "dianna@hotmail.com",
    },
    {
      name: "Ronald Richards",
      email: "ronald@hotmail.com",
    },
    {
      name: "Arlene McCoy",
      email: "arlene@hotmail.com",
    },
    {
      name: "Kathryn Murphy",
      email: "kathryn@hotmail.com",
    },
    {
      name: "Savannah Nguyen",
      email: "savannah@hotmail.com",
    },
    {
      name: "Albert Flores",
      email: "albert@hotmail.com",
    },
  ],
  Absent: [
    {
      name: "Jenny Wilson",
      email: "jenny@hotmail.com",
    },
    {
      name: "Wade Warren",
      email: "wade@hotmail.com",
    },
    {
      name: "Bessie Cooper",
      email: "bessie@hotmail.com",
    },
    {
      name: "Ralph Edwards",
      email: "ralph@hotmail.com",
    },
  ],
};

export default {
  title: "Components/SearchableList",
  component: SearchableList,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    sections: sections,
  },
};

export const WithoutEmail = {
  args: {
    sections: sections,
    showEmail: false,
  },
};

export const WithInitialSearch = {
  args: {
    sections: sections,
    initialSearchString: "R",
  },
};
