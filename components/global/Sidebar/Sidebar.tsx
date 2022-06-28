import { BottomNavigation, BottomNavigationAction, Link } from "@common";

export const Sidebar = () => {

  return (<>
    <BottomNavigation>
      <Link href={''}>
        <BottomNavigationAction label={'Home'}  />
      </Link>
      <BottomNavigationAction label={'Category'}   />
      <BottomNavigationAction>

      </BottomNavigationAction>
    </BottomNavigation>
  </>);
};