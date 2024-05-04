"use client"

import { AuthContext, SET_CURRENT_AUTH } from '@/context/auth-context'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import CategoryIcon from '@mui/icons-material/Category'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import FeedbackIcon from '@mui/icons-material/Feedback'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import MenuIcon from '@mui/icons-material/Menu'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { Button } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import MuiDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { styled, useTheme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Link from 'next/link'
import * as React from 'react'
import { toast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'

const drawerWidth = 240

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
)

export default function MiniDrawer({ children }) {
  const theme = useTheme()
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [{ email, isAdmin }] = React.useContext(AuthContext)
  const [, dispatch] = React.useContext(AuthContext)


  const handleLogout = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/logout', { method: 'GET' })
    const jsonResponse = await response.json()
    await dispatch({ type: SET_CURRENT_AUTH, payload: { email: '', isAdmin: false } })
    if (jsonResponse.success) {
      toast({ title: "Success", description: "Logged out successfully" })
      router.push('/')
    } else {
      toast({ title: "Failed", description: jsonResponse?.message || 'Failed to logout' })
    }
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  React.useEffect(() => {
    const handleCheckAuth = async () => {
      try {
        const response = await fetch('/api/login', { method: 'POST' })

        if (!response.ok) {
          throw new Error('Failed to login')
        }

        const data = await response.json()
        dispatch({ type: SET_CURRENT_AUTH, payload: { email: data.email || '', isAdmin: data.isAdmin } })

      } catch (error) {
        console.error('Error checking user cookie:', error);
      }
    }

    handleCheckAuth()
  }, [])

  const icons = [
    { icon: <HomeIcon />, target: '/' },
    { icon: <CalendarMonthIcon />, target: '/event' },
    { icon: <InfoIcon />, target: '/about' },
    { icon: <CategoryIcon />, target: '/merchandise' },
    { icon: <FeedbackIcon />, target: '/feedback' }
  ]
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ background: '#4f46e5' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <div className='flex items-center w-full justify-between'>
            <h1>Technokratos&apos;24 EMS</h1>
            <div className='flex items-center gap-2'>
              {
                email ?
                  <div onClick={handleLogout}>
                    <Button variant="contained" size='large' color='inherit' style={{ color: 'black' }}>Log out</Button>
                  </div> :
                  <Link href={'/login'}>
                    <Button variant="contained" size='large' color='inherit' style={{ color: 'black' }}>Log in</Button>
                  </Link>
              }

            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Home', 'Events', 'About', 'Merchandize', 'Feedback'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                component={Link}
                to={icons[index].target}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {icons[index].icon}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {isAdmin && <List>
          {['Create Event'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                component={Link}
                to={"/event/create"}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {<NoteAddIcon
                    style={{ color: "green" }}
                  />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  )
}
