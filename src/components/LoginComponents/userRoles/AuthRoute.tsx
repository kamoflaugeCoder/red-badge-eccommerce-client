import { Redirect, Route, RouteComponentProps, Router, Switch } from 'react-router-dom';
// import Unauthorized from 'views/Unauthorized';
// import { AuthRoutes, NonAuthRoutes } from 'api/routes.ts';
import { Navigation, Dashboard } from '@material-ui/icons';
import Login from '../Login';

interface Props {
	Component: React.FC<RouteComponentProps>
	path: string;
	exact?: boolean;
    requiredRoles: string[];
};
export default function AuthRoute(){
// const AuthRoute: React.FC = (): JSX.Element => (
//     <Router>
        // <Navigation />
        // <Switch>
        //     <Route 
        //     exact path={NonAuthRoutes.login} 
        //     component={Login} 
        //     />
        //     <AuthRoute 
        //     path={AuthRoutes.dashboard} 
        //     Component={Dashboard}
        //     requiredRoles={
        //         String(UserRoles.admin),
        //         String(UserRoles.superAdmin)
        //     } />
           
        //     <AuthRoute 
        //     path={AuthRoutes.preferences} 
        //     Component={Preferences} 
        //     requiredRoles={[String(UserRoles.user)]}
        //     />
        //     <Route path={AuthRoutes.support}
        //      component={Support} 
        //      />
		// 	<AuthRoute path={AuthRoutes.account} 
        //     Component={Account}
        //     requiredRoles={[String(UserRoles.user)]}
        //      />
		// 	<Route 
		// 		path={NonAuthRoutes.unauthorized} 
		// 		component={Unauthorized} 
		// 	/>
		// 	<Route component={NotFound} />
        // </Switch>
//     </Router>

};





