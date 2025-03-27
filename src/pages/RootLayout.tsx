import { Outlet } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

const RootLayout = () => (
  <div className='container'>
    <Analytics />
    <Outlet />
  </div>
);

export default RootLayout;
