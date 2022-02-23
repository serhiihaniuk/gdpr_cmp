import Details from '../../pages/Details/Details';
import Intro from '../../pages/Intro/Intro';
const Router = ({route}: {route: string}) => {
    switch (route) {
        case 'intro':
            return <Intro/>;
        case 'details': 
            return <Details/>;
        default:
            return <Intro/>;
    }
}
export default Router;
