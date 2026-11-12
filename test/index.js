import React from 'react';
import { mount } from 'enzyme';
import { test } from 'tap';
import '../setupTests';
import Dropdown, { MenuItem } from '../src';

test('<Dropdown />', (t) => {
    const wrapper = mount((
        <Dropdown>
            <Dropdown.Toggle>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem>
                    <MenuItem>
                        <MenuItem>
                            <MenuItem>
                            </MenuItem>
                        </MenuItem>
                    </MenuItem>
                </MenuItem>
            </Dropdown.Menu>
        </Dropdown>
    ));

    t.equal(wrapper.find(Dropdown).length, 1, 'should render <Dropdown /> component');

    t.equal(wrapper.find(Dropdown.Toggle).length, 1, 'should render <Dropdown.Toggle /> component');

    // Multi-level dropdown menu
    t.equal(wrapper.find(Dropdown.Menu).length, 4, 'should render <Dropdown.Menu /> component');

    t.equal(wrapper.find(MenuItem).length, 6, 'should render <MenuItem /> component');

    t.end();
});

test('<Dropdown /> becoming disabled while open', (t) => {
    const wrapper = mount((
        <Dropdown open>
            <Dropdown.Toggle>Fruit</Dropdown.Toggle>
            <Dropdown.Menu>
                <MenuItem eventKey="orange">Orange</MenuItem>
            </Dropdown.Menu>
        </Dropdown>
    ));

    t.equal(wrapper.find(Dropdown.Menu).prop('open'), true, 'opens while enabled');
    wrapper.setProps({ disabled: true });
    t.equal(wrapper.find(Dropdown.Toggle).prop('open'), false, 'reports the menu as closed');
    t.equal(wrapper.find(Dropdown.Menu).prop('open'), false, 'closes the menu while disabled');

    wrapper.setProps({ disabled: false });
    t.equal(wrapper.find(Dropdown.Menu).prop('open'), true, 'restores the controlled open state');
    wrapper.unmount();
    t.end();
});
