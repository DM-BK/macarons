import {
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@common'

import { categoriesRoutes } from './categoriesRoutes'

import * as styles from './NavigationByCategoriesStyle'

export const NavigationByCategories = () => {
  return (
    <>
      <List
        subheader={<ListSubheader sx={styles.Title}>Categories</ListSubheader>}
        sx={styles.List}
      >
        {categoriesRoutes.map((route) => (
          <Link key={route.label} href={route.path} sx={styles.Link}>
            <ListItemButton>
              <ListItemIcon>{route?.icon}</ListItemIcon>
              <ListItemText>{route.label}</ListItemText>
            </ListItemButton>
          </Link>
        ))}
      </List>
    </>
  )
}
