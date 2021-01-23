import {
  CreateContactsPage,
  HomePage,
  RegisterPage,
  SignInPage,
  EditPage
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
  { path: "/edit/:editId", component: EditPage, title: "Log in" },
];

export default routes;
