import React from 'react';
import Section from './Section';
import Dropdown, { MenuItem } from '../src';
import styles from './index.styl';

export default () => (
    <Section className="row-md-5 row-xl-5">
        <div className={styles.sectionGroup}>
            <h3>Scrollable</h3>
            <Dropdown open>
                <Dropdown.Toggle title="Sample" />
                <Dropdown.Menu scrollable>
                    <MenuItem>Menu item one</MenuItem>
                    <MenuItem>Menu item two</MenuItem>
                    <MenuItem>Menu item three</MenuItem>
                    <MenuItem>Menu item four</MenuItem>
                    <MenuItem>Menu item five</MenuItem>
                    <MenuItem>Menu item six</MenuItem>
                    <MenuItem>Menu item seven</MenuItem>
                    <MenuItem>Menu item eight</MenuItem>
                    <MenuItem>Menu item nubne</MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </Section>
);
