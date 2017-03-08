import React from 'react';
import Section from './Section';
import Dropdown, { MenuItem } from '../src';
import styles from './index.styl';

export default () => (
    <Section className="row-md-5 row-xl-5">
        <div className={styles.sectionGroup}>
            <h3>Single Selection</h3>
            <p>Use a check mark to indicate a selected item.</p>
            <Dropdown open onToggle={() => {}}>
                <Dropdown.Toggle title="View by severity" />
                <Dropdown.Menu>
                    <MenuItem active>
                        High
                    </MenuItem>
                    <MenuItem>
                        Medium
                    </MenuItem>
                    <MenuItem>
                        Low
                    </MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </Section>
);
