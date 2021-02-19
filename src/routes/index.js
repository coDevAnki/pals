import {
  CreateContactsPage,
  DeletePage,
  EditPage,
  HomePage,
  RegisterPage,
  SignInPage,
} from "../pages";

const routes = [
  { path: "/", component: HomePage, title: "Home", needsAuth: false },
  {
    path: "/create-contacts",
    component: CreateContactsPage,
    title: "Create Contact",
    needsAuth: true,
  },
  {
    path: "/register",
    component: RegisterPage,
    title: "Register",
    needsAuth: false,
  },
  { path: "/signin", component: SignInPage, title: "Log in", needsAuth: false },
  {
    path: "/edit/:editId",
    component: EditPage,
    title: "Log in",
    needsAuth: true,
  },
  {
    path: "/delete/:deleteId",
    component: DeletePage,
    needsAuth: true,
  },
];

export default routes;
