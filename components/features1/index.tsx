import {Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {FeatureIcon} from '../icons/FeatureIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Features1 = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '$20',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',
               '@sm': {
                  justifyContent: 'space-around',
                  px: '$32',
                  flexDirection: 'row',
               },
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Flex direction="column">
               <Text h2 css={{color: '$blue600'}} id ={'us'}>Sobre Nosotros</Text>
               <Text
                  span
                  css={{
                     maxWidth: '400px',
                     color: '$accents8',
                     textAlign: 'justify',
                  }}
               >
                  Conoce a nuestro equipo y nuestra misión
               </Text>

               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                     Quiénes Somos
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                           textAlign: 'justify',
                        }}
                     >
                        Somos Deploy+, una empresa dedicada a brindar soluciones 
                        tecnológicas con la mejor calidad y precio. Nos especializamos en el despliegue, 
                        mantenimiento y desarrollo de sitios web, ofreciendo un servicio 
                        integral para potenciar tu negocio en el entorno digital.
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                     Nuestra Misión
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                           textAlign: 'justify',
                        }}
                     >
                        Nyestra misión es proporcionar soluciones tecnológicas innovadoras que faciliten 
                        el despliegue, mantenimiento y desarrollo de páginas web, 
                        haciéndolas accesibles de manera simple y económica para todo tipo de empresas o personas.
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                     Nuestro Equipo
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                           textAlign: 'justify',
                        }}
                     >
                        Somos una empresa formada por dos personas apasionadas por la tecnología 
                        y la innovación. Juntos, hemos creado este proyecto como parte de nuestro 
                        trabajo de fin de grado (TFG), con el objetivo de hacer que el proceso de 
                        desplegar páginas web sea más accesible y asequible para todos.
                     </Text>
                  </Flex>
                  
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <BoxIcon />
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                     Nuestra Historia
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                           textAlign: 'justify',
                        }}
                     >
                        Lo que comenzó como un reto personal y una solución a un problema común, 
                        se ha convertido en una empresa dedicada a facilitar el acceso a internet 
                        para pequeñas empresas y emprendedores. Nos dimos cuenta de que tener una 
                        página web accesible a través de internet suele ser complicado y caro. 
                        Por eso, nos propusimos buscar la manera más barata y sencilla posible para el cliente.
                     </Text>
                  </Flex>
               </Flex>
            </Flex>
            <Flex align={'center'}>
               <FeatureIcon />
            </Flex>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
