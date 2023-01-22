import { Link, List, ListItem, ListSubheader } from "@common";

import { categoriesRoutes } from "./categoriesRoutes";

import * as styles from "./NavigationByCategoriesStyle";

export const NavigationByCategories = () => {
  return (<>
    <List
      subheader={<ListSubheader sx={styles.Title}>Categoris</ListSubheader>}
    >
      {categoriesRoutes.map((route) => (
        <ListItem key={route.path}>
          {route?.icon}
          <Link sx={styles.Link} href={route.path}>{route.label}</Link>
        </ListItem>
      ))}
    </List>
  </>);
};
