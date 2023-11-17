"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { initGa,logPageView } from '@/lib/helpers/ganalytics';
import ReactGA from 'react-ga';

const loggPageView = (url:any) => {
  ReactGA.set({ page: url });
  ReactGA.pageview(url);
};
// export const initGa = () => {
//   ReactGA.initialize('G-4XRZGC9133');
// };

const AnalyticsComponent: React.FC = () => {
  // const router = useRouter();
    useEffect(() => {
    //   if (typeof window === 'undefined') return;

    //  if (router.isReady) {
      initGa();
      logPageView();
    //   loggPageView(window.location.pathname)
    //   const handleRouteChange = (url:any) => {
    //     // Log pageviews on route change
    //     loggPageView(url);
    // };
    // router.events.on('routeChangeComplete', handleRouteChange);

    // // Cleanup subscription on unmount
    // return () => {
    //     router.events.off('routeChangeComplete', handleRouteChange);
    //  }
   
    // };
    }, []);
  
    return null;
  };
  
  export default AnalyticsComponent;