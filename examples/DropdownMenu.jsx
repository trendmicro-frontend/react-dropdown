import React from 'react';
import Section from './Section';
import Dropdown, { MenuItem } from '../src';
import styles from './index.styl';

export default () => (
    <Section className="row-md-5 row-xl-5">
        <div className={styles.sectionGroup}>
            <h3>Dropdown Menu</h3>
            <p>A dropdown menu is used to provide a list of options for the user. Use sentence case for menu options.</p>
            <Dropdown open onToggle={() => {}}>
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
                    <MenuItem eventKey="4">
                        Menu item four
                    </MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </Section>
);
