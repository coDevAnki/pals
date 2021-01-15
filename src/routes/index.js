import {
  CreateContactsPage,
  HomePage,
  RegisterPage,
  SignInPage,
} from "../pages";

const routes = [
  { path: "/", component: HomePage, title: "Home" },
  {
    path: "/create-contacts",
    component: CreateContactsPage,
    title: "Create Contact",
  },
  { path: "/register", component: RegisterPage, title: "Register" },
  { path: "/signin", component: SignInPage, title: "Log in" },
];

export default routes;
