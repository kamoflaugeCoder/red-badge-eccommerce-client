import { 
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect 
} from 'react-router-dom';
import Login from '../Login';
// import Dashboard from 'views/Dashboard';
// import Preferences from 'views/Preferences';
// import Support from 'views/Support';
// import Account from 'views/Account';
// import NotFound from 'views/NotFound';
// import Navigation from 'components/Navigation';


const App: React.FC = (): JSX.Element => (

    <Router>
        {/* <Navigation /> */}
        <Switch>
            {/* <Route exact path='/' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/preferences' component={Preferences} />
            <Route path='/support' component={Support} />
			<Route path='/account' component={Account} />
			<Route component={NotFound} /> */}
        </Switch>
    </Router>
)

enum AuthRoutes {
	dashboard = '/dashboard',
	preferences = '/preferences',
	account = '/account'
}

enum NonAuthRoutes {
	login = '/',
	support = '/support',
	unauthorized = '/unauthorized'
}


 export default function Roles(){

	const Roles = () => {
enum UserRoles {
    superAdmin = 'superAdmin',
    admin = 'admin',
    nonAdmin = 'nonAdmin'
}

const userRoles = {
	admins: [String(UserRoles.superAdmin), String(UserRoles.admin)],
	users: [String(UserRoles.nonAdmin)],
	all: [
		String(UserRoles.superAdmin),
		String(UserRoles.admin),
		String(UserRoles.nonAdmin)
	]
};
}
}
