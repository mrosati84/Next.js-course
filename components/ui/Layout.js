import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <main>
      <MainNavigation />
      {props.children}
    </main>
  );
}

export default Layout;
