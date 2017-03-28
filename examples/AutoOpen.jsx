import React from 'react';
import Section from './Section';
import Dropdown, { MenuItem } from '../src';
import styles from './index.styl';

export default () => (
    <Section className="row-md-5 row-xl-5">
        <div className={styles.sectionGroup}>
            <h3>Auto Open</h3>
            <p>Open the dropdown on mouse over.</p>
            <Dropdown autoOpen>
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
                    <MenuItem>
                        Menu item four
                    </MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </Section>
);
