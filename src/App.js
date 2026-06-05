import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/Pages/AboutPage';
import ErrorPage from './components/Pages/ErrorPage';
import Home from './components/Pages/Home';
import ServiceDetailsPage from './components/Pages/ServiceDetailsPage';
import ServicesPage from './components/Pages/ServicesPage';
import TeamPage from './components/Pages/TeamPage';
import Layout from './components/Layout';
import JumpToIns from './components/Pages/jumpToIns';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="service" element={<ServicesPage />} />
          <Route
            path="service/serviceDetails"
            element={<ServiceDetailsPage />}
          />
          <Route path="team" element={<TeamPage />} />
        </Route>
        <Route
          path="/"
          element={<Layout headerVariant="cs-site_header_full_width" />}
        >
        </Route>
        <Route path="/jumpToIns" element={<JumpToIns />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
