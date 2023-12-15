import { Amplify } from 'aws-amplify';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import RouteLayout from './pages/RouteLayout';
import Home from './pages/Home';
import AnalyticsPage from './pages/AnalyticsPage';
import ReportsBoard from './pages/ReportPage';
Amplify.configure(awsExports);

export default function App() {
  return (
    <main className='flex-grow h-screen'>
      <Authenticator>
        <BrowserRouter>

          <Routes>

              /* private routes */
            <Route element={<RouteLayout />}>
              <Route index element={<Home />} />
              <Route path="/:dashboardname" element={<Home />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/analytics/:analyticsType" element={<AnalyticsPage />} />
              <Route path="/analytics/negativeposts/:postId" element={<AnalyticsPage />} />
              <Route path="/report" element={<ReportsBoard />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </Authenticator>

    </main>
  );
}