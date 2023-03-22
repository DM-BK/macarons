import React from 'react'
import { useRouter } from 'next/router'
import { ListItemText, ListItem, Button, variantButton } from '@common'

import * as styles from './MobileMenuStyles'

interface SideMenuItemProps {
  label: string
  path: string
}

export const SideMenuItem = ({ label, path }: SideMenuItemProps) => {
  const router = useRouter()

  const handleRouteChange = (path: string) => () => {
    router.push(path)
  }

  const isActivePath = (path: string): boolean => router.pathname === path

  return (
    <ListItem>
      <Button
        variant={variantButton.text}
        fullWidth
        onClick={handleRouteChange(path)}
        sx={styles.Button(isActivePath(path))}
      >
        <ListItemText>{label}</ListItemText>
      </Button>
    </ListItem>
  )
}
