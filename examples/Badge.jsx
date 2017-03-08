import classNames from 'classnames';
import React from 'react';
import Section from './Section';
import Dropdown, { MenuItem } from '../src';
import styles from './Badge.styl';

export default () => (
    <Section className="row-md-5 row-xl-5">
        <div className={styles.sectionGroup}>
            <h3>Badge</h3>
            <Dropdown className={styles.dropdownExample} open onToggle={() => {}}>
                <Dropdown.Toggle>
                    Default
                </Dropdown.Toggle>
                <Dropdown.Menu className={styles.dropdownMenu}>
                    <MenuItem>
                        <span className={classNames(styles.badge, styles.badgeGreen)}>4</span>
                        Menu item one
                    </MenuItem>
                    <MenuItem>
                        <span className={classNames(styles.badge, styles.badgeOrange)}>2</span>
                        Menu item two
                    </MenuItem>
                    <MenuItem>
                        <span className={classNames(styles.badge, styles.badgeRed)}>10</span>
                        Menu item three
                    </MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </Section>
);
