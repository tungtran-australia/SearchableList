# SearchableList components

## 🚅 Quick start

1.  **Install the dependencies.**

    Navigate into your new site’s directory and install the necessary dependencies.

    ```shell
    yarn
    ```

2. **Browse your stories!**

    Run `yarn storybook` to see your component's stories at `http://localhost:6006`


3.  **Run tests.**

    Run `yarn test` to run `vitest`



## 🛠️ Usage
The `SearchableList` component is designed to display a list of items that can be filtered by a search string.

Here's an example of how to use the `SearchableList` component:

```jsx
import React from 'react';
import SearchableList from './path/to/SearchableList';

const App = () => {
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

  return (
    <div>
      <h1>My Searchable Contact List</h1>
      <SearchableList sections={sections} />
    </div>
  );
};

export default App;
```
