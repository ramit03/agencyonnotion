"use client"
import { useEffect } from 'react';
import { initGa,logPageView } from '@/lib/helpers/ganalytics';

const AnalyticsComponent: React.FC = () => {
    useEffect(() => {
      initGa();
      logPageView();
    }, []);
  
    return null;
  };
  
  export default AnalyticsComponent;