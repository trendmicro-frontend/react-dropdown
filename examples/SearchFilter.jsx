import classNames from 'classnames';
import React from 'react';
import Section from './Section';
import Dropdown, { MenuItem } from '../src';
import styles from './SearchFilter.styl';

export default () => (
    <Section className="row-md-5 row-xl-5">
        <div className={styles.sectionGroup}>
            <h3>Search Filter</h3>
            <Dropdown open>
                <Dropdown.Toggle title="Sample" />
                <Dropdown.Menu style={{ padding: 0 }}>
                    <div className={classNames(styles.inputIconGroup, styles.dropdownMenuFilter)}>
                        <input
                            id="filter"
                            type="text"
                            className={styles.formControl}
                            placeholder="Search..."
                        />
                        <label className={classNames(styles.inputIconLabel)} htmlFor="filter">
                            <i className="fa fa-search" />
                        </label>
                    </div>
                    <Dropdown.Menu
                        style={{
                            position: 'static',
                            border: 0,
                            borderTop: '1px solid #eee',
                            boxShadow: 'none',
                            display: 'block',
                            minWidth: 240
                        }}
                        scrollable
                    >
                        <MenuItem>Menu item one</MenuItem>
                        <MenuItem>Menu item two</MenuItem>
                        <MenuItem>Menu item three</MenuItem>
                        <MenuItem>Menu item four</MenuItem>
                        <MenuItem>Menu item five</MenuItem>
                        <MenuItem>Menu item six</MenuItem>
                        <MenuItem>Menu item seven</MenuItem>
                        <MenuItem>Menu item eight</MenuItem>
                        <MenuItem>Menu item nine</MenuItem>
                        <MenuItem>Menu item ten</MenuItem>
                    </Dropdown.Menu>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </Section>
);
