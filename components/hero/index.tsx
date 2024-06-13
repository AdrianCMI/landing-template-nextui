import {Button, Divider, Input, Text, FormElement} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';

export const Hero = () => {
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   const themeImage = isDark ? 'light-hero.png' : 'dark-hero.png';
   
   return (
      <>
         <Flex
            css={{
               'gap': '$3',
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$20',
               },
            }}
            justify={'center'}
         >
            <Box
               css={{
                  pt: '$13',

                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
               }}
            >
               <Box
                  css={{
                     maxWidth: '600px',
                  }}
               >
                  <Text
                     h1
                     css={{
                        display: 'block',
                     }}
                     color="primary"
                  >
                     Deploy+
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'block',
                     }}
                  >
                     Desplegamos tu Éxito. Potenciamos tu Negocio.
                  </Text>
               </Box>
               
               <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '400px',
                     display: 'inline',
                  }}
                  size={'$lg'}
                  span
               >
                  Implementaciones rápidas y seguras para que te concentres en lo que importa.
               </Text>

               <Flex
                  css={{
                     gap: '$8',
                     pt: '$4',
                  }}
                  wrap={'wrap'}
               >
                  
                  <Input placeholder="Escriba su correo electrónico" size="lg" />
                  <Button>Solicitar Información</Button>
               </Flex>

               <Flex
                  wrap={'wrap'}
                  css={{
                     'gap': '$8',
                     'py': '$7',
                     '@sm': {
                        py: '$4',
                     },
                  }}
               >
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> Integración fácil.
                  </Flex>
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> Sin contratos a largo plazo.
                  </Flex>
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> Soporte 24/7.
                  </Flex>
               </Flex>
            </Box>
            <Box
               css={{
                  '& img': {
                     width: '775px',
                     objectFit: 'contain',
                  },
               }}
            >
               <img src={themeImage} />
            </Box>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$10'}}
         />
      </>
   );
};
