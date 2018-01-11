import React from 'react';
import Section from './Section';
import Dropdown, { MenuItem } from '../src';
import styles from './index.styl';

export default () => (
    <Section className="row-md-5 row-xl-5">
        <div className={styles.sectionGroup}>
            <h3>Dropdown In Dropdown</h3>
            <Dropdown>
                <Dropdown.Toggle>
                    Select an option
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ minWidth: 150 }}>
                    <MenuItem eventKey="1" className="clearfix">
                        Menu item one
                        <Dropdown
                            style={{ float: 'right' }}
                            onClick={event => {
                                event.stopPropagation();
                            }}
                        >
                            <Dropdown.Toggle
                                noCaret
                                btnStyle="flat"
                                btnSize="sm"
                                compact
                                style={{
                                    padding: 0,
                                    minWidth: 24
                                }}
                            >
                                <i className="fa fa-fw fa-ellipsis-h" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <MenuItem header>Action</MenuItem>
                                <MenuItem>Rename</MenuItem>
                                <MenuItem>Delete</MenuItem>
                            </Dropdown.Menu>
                        </Dropdown>
                    </MenuItem>
                    <MenuItem eventKey="2" className="clearfix">
                        Menu item two
                        <Dropdown
                            style={{ float: 'right' }}
                            onClick={event => {
                                event.stopPropagation();
                            }}
                        >
                            <Dropdown.Toggle
                                noCaret
                                btnStyle="flat"
                                btnSize="sm"
                                compact
                                style={{
                                    padding: 0,
                                    minWidth: 24
                                }}
                            >
                                <i className="fa fa-fw fa-ellipsis-h" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <MenuItem header>Action</MenuItem>
                                <MenuItem>Rename</MenuItem>
                                <MenuItem>Delete</MenuItem>
                            </Dropdown.Menu>
                        </Dropdown>
                    </MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </Section>
);
