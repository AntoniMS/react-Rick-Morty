import {render, screen} from '@testing-library/react';
import Header from './Header';
import { MemoryRouter} from "react-router-dom";






test('renders', () => {
    render(<MemoryRouter><Header/></MemoryRouter>);
    
    


});