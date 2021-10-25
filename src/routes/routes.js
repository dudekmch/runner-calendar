import Logout from '../component/auth/logout/Logout'
import TrainingTableContainer from '../component/trainingTable/trainingTableContainer/TraingTableContainer';

const routes = [
//   {
//     path: 'auth/login',
//     component: import('../component/auth/authForm/login/Login'),
//     exact: true
//   },
//   {
//     path: 'auth/createAccount',
//     component: import('../component/auth/authForm/createAccount/CreateAccount'),
//     exact: true
//   },
//   {
//     path: 'auth/resetPassword',
//     component: import('../component/auth/authForm/resetPassword/ResetPassword'),
//     exact: true
//   },
  {
    path: 'auth/logout',
    component: <Logout />,
    exact: true
  },
  {
    path: 'trainingTable',
    component: <TrainingTableContainer />,
    exact: true
  }
];

export default routes;