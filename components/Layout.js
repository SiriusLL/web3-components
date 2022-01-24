import NavBar from "./NavBar";

const Layout = ({ Children }) => {
  return (
    <>
      <NavBar />
      {Children}
    </>
  );
};

export default Layout;
