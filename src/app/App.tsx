import React, { Suspense } from 'react';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import classNames from "classnames";
import './styles/app.scss'

function App() {
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <AppRouter />
            </Suspense>
        </div>
    );
}

export default App;