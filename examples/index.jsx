/* eslint no-alert: 0 */
import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Section from './Section';
import Dropdown, { DropdownButton, MenuItem } from '../src';
import styles from './index.styl';

class App extends React.Component {
    render() {
        const name = 'React Dropdown';
        const url = 'https://github.com/trendmicro-frontend/react-dropdown';

        return (
            <div>
                <Nav name={name} url={url} />
                <div className={styles.container}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <Section className="row-md-4">
                                    <h2>Dropdown</h2>
                                    <Dropdown
                                        onSelect={(eventKey) => {
                                            console.log('##', eventKey);
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
                                    <DropdownButton
                                        btnSize="xs"
                                        title="xxx"
                                        onSelect={(eventKey) => {
                                            console.log('##', eventKey);
                                        }}
                                    >
                                        <MenuItem eventKey={1}>link</MenuItem>
                                        <MenuItem eventKey={2}>link</MenuItem>
                                    </DropdownButton>
                                </Section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
