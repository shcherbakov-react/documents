import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import ErrorBoundary from "app/providers/ErrorBoundary/ui/ErrorBoundary";
import './app/styles/index.scss'
import { StoreProvider } from "app/providers/StoreProvider/ui/StoreProvider";

render(
    <BrowserRouter>
        <ErrorBoundary>
            <StoreProvider>
                <App />
            </StoreProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);