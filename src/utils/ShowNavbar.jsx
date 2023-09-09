export const ShowNavbar = ({ children }) => {
  if (location.pathname === "/login" || location.pathname === "/status")
    return <div></div>;
  else return <div>{children}</div>;
};
