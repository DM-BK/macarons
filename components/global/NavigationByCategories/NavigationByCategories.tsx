import { Box, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@common";

import { categoriesRoutes } from "./categoriesRoutes";

import * as styles from "./NavigationByCategoriesStyle";

export const NavigationByCategories = () => {
  return (<>
    <List
      subheader={<ListSubheader sx={styles.Title}>Categoris</ListSubheader>}
      sx={styles.List}
    >
      {categoriesRoutes.map((route) => (<>
        <Link href={route.path} sx={styles.Link}>
          <ListItemButton>
            <ListItemIcon>
              {route?.icon}
            </ListItemIcon>
            <ListItemText>
              {route.label}
            </ListItemText>
          </ListItemButton>
        </Link>
      </>))}
    </List>
  </>);
};
