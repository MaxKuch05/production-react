import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RoutesConfig } from 'shared/config/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(RoutesConfig).map(({ path, element }, idx) => (
                    <Route
                        key={idx}
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
