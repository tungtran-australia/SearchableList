import Section from "./Section";

const sampleItems = [
  { name: "John Doe", email: "john.doe@example.com" },
  { name: "Jane Smith", email: "jane.smith@example.com" },
];

export default {
  title: "Components/Section",
  component: Section,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    title: "Contacts",
    items: sampleItems,
  },
};

export const WithoutEmail = {
  args: {
    title: "Contacts",
    items: sampleItems,
    showEmail: false,
  },
};

export const Collapsed = {
  args: {
    title: "Contacts",
    items: sampleItems,
    initialIsCollapsed: true,
  },
};

export const Empty = {
  args: {
    title: "No contacts",
  },
};
