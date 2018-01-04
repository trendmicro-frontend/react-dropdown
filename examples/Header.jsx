import React from 'react';
import Section from './Section';
import Dropdown, { MenuItem } from '../src';
import styles from './index.styl';

export default () => (
    <Section className="row-md-5 row-xl-5">
        <div className={styles.sectionGroup}>
            <h3>Header</h3>
            <p>Separate different option groups with capitalized heading.</p>
            <Dropdown open onToggle={() => {}}>
                <Dropdown.Toggle title="Select an option" />
                <Dropdown.Menu>
                    <MenuItem header>
                        Dropdown Header
                    </MenuItem>
                    <MenuItem>
                        Menu item one
                    </MenuItem>
                    <MenuItem>
                        Menu item two
                    </MenuItem>
                    <MenuItem>
                        Menu item three
                    </MenuItem>
                    <MenuItem header>
                        Dropdown Header
                    </MenuItem>
                    <MenuItem>
                        Menu item four
                    </MenuItem>
                    <MenuItem>
                        Menu item five
                    </MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </Section>
);
