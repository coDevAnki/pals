import { CreateContactsPage, HomePage, SignInPage, SignUpPage } from "../pages";

const routes = [
  { path: "/", component: HomePage, title: "Home" },
  {
    path: "/create-contacts",
    component: CreateContactsPage,
    title: "Create Contact",
  },
  { path: "/signup", component: SignUpPage, title: "Register" },
  { path: "/signin", component: SignInPage, title: "Log in" },
];

export default routes;
