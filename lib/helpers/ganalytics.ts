import ReactGA from 'react-ga';

export const initGa= () => {
    console.log("Initializing Google Analytics");
    ReactGA.initialize('G-4XRZGC9133');
};

export const logPageView = () => {
    console.log("Logging page view for: ", window.location.pathname);
    ReactGA.set({ page:window.location.pathname});
    ReactGA.pageview(window.location.pathname);
}