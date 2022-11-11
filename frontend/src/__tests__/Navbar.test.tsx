import React from 'react';
import {render, screen} from '@testing-library/react';
import renderer from "react-test-renderer";

import Navbar from '../components/Navbar/Navbar';

test('Snapshot test for Navbar', () => {
    const container = renderer.create(<Navbar />);
    expect(container).toMatchSnapshot();
});

