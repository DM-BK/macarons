import { Box, Link, List, ListItem, ListSubheader } from "@common";

import { categoriesRoutes } from "./categoriesRoutes";

import * as styles from "./NavigationByCategoriesStyle";

export const NavigationByCategories = () => {
  return (<>
    <List
      subheader={<ListSubheader sx={styles.Title}>Categoris</ListSubheader>}
      sx={styles.List}
    >
      {categoriesRoutes.map((route) => (
        <ListItem key={route.path}>
          <Link sx={styles.Link} href={route.path}>
            {route?.icon}
            <Box component='span'>{route.label}</Box>
          </Link>
        </ListItem>
      ))}
    </List>
  </>);
};
