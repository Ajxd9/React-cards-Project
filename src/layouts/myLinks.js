import ROUTES from "../routes/ROUTES";

const alwaysLinks = [
  { to: ROUTES.HOME, children: "Home" },
  { to: ROUTES.ABOUT, children: "About" },
];

const loggedInLinks = [{ to: ROUTES.FAV_CARD, children: "My Fav Cards" }];

const bizLinks = [
  { to: ROUTES.MY_CARD, children: "My Cards" },
  { to: ROUTES.CREATECARD, children: "Create Card" },
];

const adminLinks = [
  { to: ROUTES.MY_CARD, children: "My Cards" },
  { to: ROUTES.EDIT_USER, children: "Edit User" },
  { to: ROUTES.CREATECARD, children: "Create Card" },
  { to: ROUTES.ADMIN_DASH, children: "Admin Dashboard" },
];

const loggedOutLinks = [
  { to: ROUTES.LOGIN, children: "Login" },
  { to: ROUTES.SIGNUP, children: "Register" },
];

export { alwaysLinks, loggedInLinks, bizLinks, loggedOutLinks, adminLinks };


