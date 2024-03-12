import {ReactNode} from 'react';
import {render} from '@testing-library/react';

export function renderWithTranslation(component: ReactNode) {
    return render(component)
}