# react-dropdown [![build status](https://travis-ci.org/trendmicro-frontend/react-dropdown.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-dropdown) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-dropdown/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-dropdown?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-dropdown.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-dropdown/)

React Dropdown

Demo: https://trendmicro-frontend.github.io/react-dropdown

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-dropdown](https://github.com/trendmicro-frontend/react-dropdown):

  ```
  npm install --save react @trendmicro/react-dropdown
  ```

2. At this point you can import `@trendmicro/react-dropdown` and its styles in your application as follows:

  ```js
  import Dropdown, {
      DropdownToggle,
      DropdownMenu,
      DropdownSubMenu,
      MenuItem,
      DropdownButton
  } from '@trendmicro/react-dropdown';

  // Be sure to include styles at some point, probably during your bootstraping
  import '@trendmicro/react-buttons/dist/react-buttons.css';
  import '@trendmicro/react-dropdown/dist/react-dropdown.css';
  ```

## Usage

### Dropdown

```js
<Dropdown
    onSelect={(eventKey) => {
    }}
>
    <Dropdown.Toggle
        btnStyle="flat"
    >
        Toggler
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <MenuItem header>Header</MenuItem>
        <MenuItem eventKey={1}>link</MenuItem>
        <MenuItem divider />
        <MenuItem header>Header</MenuItem>
        <MenuItem eventKey={2}>link</MenuItem>
        <MenuItem eventKey={3} disabled>disabled</MenuItem>
        <MenuItem
            eventKey={4}
            title="link with title"
        >
            link with title
        </MenuItem>
        <MenuItem
            eventKey={5}
            href="#someHref"
            active
            onSelect={(eventKey) => {
                alert(`Alert from menu item.\neventKey: ${eventKey}`);
            }}
        >
            link that alerts
        </MenuItem>
    </Dropdown.Menu>
</Dropdown>
```

### Multi-Level Dropdown

```js
<Dropdown>
    <Dropdown.Toggle title="Select an option" />
    <Dropdown.Menu>
        <MenuItem>
            Menu item one
        </MenuItem>
        <MenuItem>
            Menu item two
        </MenuItem>
        <MenuItem>
            Menu item three
        </MenuItem>
        <MenuItem divider />
        <Dropdown.SubMenu title="Menu item four">
            <MenuItem>
                Second level item one
            </MenuItem>
            <MenuItem>
                Second level item two
            </MenuItem>
            <Dropdown.SubMenu title="Second level item three">
                <MenuItem>
                    Third level item one
                </MenuItem>
            </Dropdown.SubMenu>
        </Dropdown.SubMenu>
    </Dropdown.Menu>
</Dropdown>
```

### DropdownButton

```js
<DropdownButton
    btnSize="xs"
    title="More"
    onSelect={(eventKey) => {
    }}
>
    <MenuItem eventKey={1}>link</MenuItem>
    <MenuItem eventKey={2}>link</MenuItem>
</DropdownButton>
```

## API

### Properties

#### Dropdown

Name | Type | Default | Description 
:--- | :--- | :------ | :----------

#### DropdownToggle

Name | Type | Default | Description 
:--- | :--- | :------ | :----------

#### DropdownMenu

Name | Type | Default | Description 
:--- | :--- | :------ | :----------

#### DropdownSubMenu

Name | Type | Default | Description 
:--- | :--- | :------ | :----------

#### MenuItem

Name | Type | Default | Description 
:--- | :--- | :------ | :----------

#### DropdownButton

Name | Type | Default | Description 
:--- | :--- | :------ | :----------

## License

MIT
