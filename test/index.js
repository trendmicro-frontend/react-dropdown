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
                <MenuItem></MenuItem>
            </Dropdown.Menu>
        </Dropdown>
    ));
    t.equal(wrapper.find(Dropdown).length, 1, 'should render <Dropdown /> component');
    t.equal(wrapper.find(Dropdown.Toggle).length, 1, 'should render <Dropdown.Toggle /> component');
    t.equal(wrapper.find(Dropdown.Menu).length, 1, 'should render <Dropdown.Menu /> component');
    t.equal(wrapper.find(MenuItem).length, 3, 'should render <MenuItem /> component');
    t.end();
});
