import React from 'react';
import Section from './Section';
import Dropdown, { MenuItem } from '../src';
import styles from './index.styl';

export default () => (
    <Section className="row-md-5 row-xl-5">
        <div className={styles.sectionGroup}>
            <h3>Multi-Level Dropdown</h3>
            <Dropdown
                open
                onToggle={() => {
                }}
                onSelect={(eventKey, event) => {
                    console.log(`Multi-Level Dropdown: eventKey=${eventKey}`);
                }}
            >
                <Dropdown.Toggle title="Select an option" />
                <Dropdown.Menu>
                    <MenuItem eventKey="1">
                        Menu item one
                    </MenuItem>
                    <MenuItem eventKey="2">
                        Menu item two
                    </MenuItem>
                    <MenuItem eventKey="3">
                        Menu item three
                    </MenuItem>
                    <MenuItem divider />
                    <Dropdown.SubMenu
                        open
                        eventKey="4"
                        title="Menu item four"
                    >
                        <MenuItem eventKey="4.1">
                            Second level item one
                        </MenuItem>
                        <MenuItem eventKey="4.2">
                            Second level item two
                        </MenuItem>
                        <Dropdown.SubMenu eventKey="4.3" title="Second level item three">
                            <MenuItem eventKey="4.3.1">
                                Third level item one
                            </MenuItem>
                        </Dropdown.SubMenu>
                    </Dropdown.SubMenu>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </Section>
);
