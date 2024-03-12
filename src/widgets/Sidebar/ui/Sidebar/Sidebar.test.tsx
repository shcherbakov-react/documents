import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import {
     renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import {BrowserRouter} from "react-router-dom";

describe('Sidebar', () => {
     test('with only first param', () => {
          renderWithTranslation(<BrowserRouter><Sidebar /></BrowserRouter>);
          expect(screen.getByTestId('sidebar')).toBeInTheDocument();
     });
});