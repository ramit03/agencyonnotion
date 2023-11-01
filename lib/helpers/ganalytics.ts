import ReactGA from 'react-ga';

export const initGa= () => {
    ReactGA.initialize('G-4XRZGC9133');
};

export const logPageView = () => {
    ReactGA.set({ page:window.location.pathname});
    ReactGA.pageview(window.location.pathname);
}