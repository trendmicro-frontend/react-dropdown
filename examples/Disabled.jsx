import React from 'react';
import Section from './Section';
import Dropdown, { MenuItem } from '../src';
import styles from './index.styl';

export default () => (
    <Section className="row-md-5 row-xl-5">
        <div className={styles.sectionGroup}>
            <h3>Disabled</h3>
            <p>A disabled menu item cannot allow user configurations.</p>
            <Dropdown open>
                <Dropdown.Toggle title="Select an option" />
                <Dropdown.Menu>
                    <MenuItem>
                        Menu item one
                    </MenuItem>
                    <MenuItem disabled>
                        Menu item two
                    </MenuItem>
                    <MenuItem>
                        Menu item three
                    </MenuItem>
                    <MenuItem>
                        Menu item four
                    </MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </Section>
);
