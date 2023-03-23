import { BrowserRouter } from 'react-router-dom';

import Router from '@/Router';

const App = () => {
  return (
    <BrowserRouter basename='TodayStartChallenge'>
      <Router />
    </BrowserRouter>
  );
};

export default App;
