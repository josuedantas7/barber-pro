'use client'
import React, { useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';

import logo from '@/app/assets/logo.svg'
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

import { IoIosLogOut } from "react-icons/io";


function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const { data: session, status } = useSession()


  useEffect(() => {
    console.log(session)
    console.log(status)
  },[status,session])

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className='bg-[#12131B]' position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Image priority={true} alt='Logo loja' width={120} src={logo} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                {
                    status === 'unauthenticated' ? (
                        <MenuItem onClick={handleCloseNavMenu}><Link href={'/login'}></Link>Login</MenuItem>
                    ) : (
                        <div>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center"><Link href={'/agenda'}>Agenda</Link></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center"><Link href={'/cortes'}>Cortes</Link></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center"><Link href={'/minha_conta'}>Minha Conta</Link></Typography>
                            </MenuItem>
                        </div>
                    )
                }
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Image priority={true} alt='Logo loja' width={120} src={logo} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {
                status === 'unauthenticated' ? (
                    <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        <Link href={'/login'}>Login</Link>
                    </Button>
                ) : (
                    <div className='flex '>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link href={'/agenda'}>Agenda</Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link href={'/cortes'}>Cortes</Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link href={'/minha_conta'}>Minha Conta</Link>
                        </Button>
                    </div>
                )
              }
          </Box>
        <button>
            <IoIosLogOut onClick={() => signOut({callbackUrl: '/login'})} size={30} color='white'/>
        </button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;