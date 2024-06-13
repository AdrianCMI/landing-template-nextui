import {Button, Dropdown, Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';
import {ModalLogin} from '../modal';
import {icons} from './icons';
import {AcmeLogo} from './logo';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';
import {GithubIcon} from '../icons/GithubIcon';

export const Nav = () => {
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();

   return (
      <Navbar
         isBordered
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
            <AcmeLogo />
            <Text b color="inherit" hideIn="xs" id='up'>
               Deploy+
            </Text>
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
               <Navbar.Link isActive href="#servicios" onClick={(e) => {
                   e.preventDefault();
                   const serviciosElement = document.getElementById('servicios');
                   if (serviciosElement) {
                       serviciosElement.scrollIntoView({ behavior: 'smooth' });
                   }
               }}>Servicios</Navbar.Link>
               <Navbar.Link href="#planes" onClick={(e) => {
                   e.preventDefault();
                   const planesElement = document.getElementById('planes');
                   if (planesElement) {
                       planesElement.scrollIntoView({ behavior: 'smooth' });
                   }
               }}>Planes</Navbar.Link>
               <Navbar.Link href="#us" onClick={(e) => {
                   e.preventDefault();
                   const usElement = document.getElementById('us');
                   if (usElement) {
                       usElement.scrollIntoView({ behavior: 'smooth' });
                   }
               }}>Sobre Nosotros</Navbar.Link>
               <Navbar.Link href="#faq" onClick={(e) => {
                   e.preventDefault();
                   const faqElement = document.getElementById('faq');
                   if (faqElement) {
                       faqElement.scrollIntoView({ behavior: 'smooth' });
                   }
               }}>Preguntas Frecuentes</Navbar.Link>
               
            </Navbar.Content>
         </Navbar.Brand>
         <Navbar.Content>
            <Navbar.Item>
               <a href='http://81.43.178.240:3000/' target="_blank" rel="noreferrer"><Button auto flat >
                  Acceder a tu cuenta
               </Button>
               </a>
            </Navbar.Item>
            <Navbar.Item hideIn={'xs'}>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
};