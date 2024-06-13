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
                        tecnológicas de calidad. Nos especializamos en el despliegue, 
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed condimentum, nisl ut aliquam lacinia, nisl nisl
                        aliquet nisl,
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
                        Contamos con un equipo de profesionales experimentados 
                        y apasionados por la tecnología. Trabajamos juntos para 
                        ofrecerte las mejores soluciones y asegurarnos
                         de que tu negocio tenga éxito en el entorno digital.
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
                     Nuestros Valores
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                           textAlign: 'justify',
                        }}
                     >
                        En Deploy+ valoramos la integridad, la innovación y la
                        excelencia. Creemos en construir relaciones de confianza 
                        con nuestros clientes y en ofrecer servicios que realmente 
                        hagan la diferencia.
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
