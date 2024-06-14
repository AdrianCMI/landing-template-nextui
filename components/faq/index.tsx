import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Faq = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               gap: '$18',
               px: '$6',
            }}
            direction={'column'}
         >
            <Flex align={'center'} direction={'column'}>
               <Text h2 css={{color: '$blue600'}} id ={'faq'}>Preguntas Frecuentes</Text>
               <Text
                  span
                  css={{
                     maxWidth: '700px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
                  Encuentra aquí las respuestas a las preguntas más comunes 
                  sobre nuestros servicios y cómo podemos ayudarte a alcanzar tus objetivos.
               </Text>
            </Flex>

            <Flex
               css={{
                  'gap': '$10',
                  '@lg': {
                     px: '$64',
                  },
               }}
               direction={'column'}
            >
               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     ¿Ofrecen un período de prueba gratuita?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Actualmente no ofrecemos un período de prueba gratuita,
                        pero te invitamos a contactarnos para una consulta gratuita,
                        donde podemos evaluar tus necesidades y demostrar cómo 
                        nuestros servicios pueden beneficiar a tu negocio.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     ¿Qué servicios incluyen en el mantenimiento?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Nuestro servicio de mantenimiento incluye actualizaciones regulares, 
                        monitoreo de seguridad, copias de seguridad, y optimización del 
                        rendimiento para asegurar que tu sitio web funcione sin problemas 
                        y esté siempre protegido.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     ¿Cómo puedo contactar con el servicio al cliente?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Puedes contactar con nuestro servicio al cliente a través de 
                        nuestro formulario de contacto en la página web, por correo 
                        electrónico a soporte@deployplus.com, o llamando al número 
                        de atención al cliente disponible en nuestro sitio.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     ¿Cuánto tiempo se tarda en desarrollar una página web?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        El tiempo de desarrollo de una página web varía según la 
                        complejidad del proyecto. Sin embargo, en promedio, un 
                        sitio web estándar puede tardar entre 4 a 8 semanas desde 
                        la planificación hasta el lanzamiento.
                     </Text>
                  </Flex>
               </Flex>
               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     ¿Ofrecen servicios de diseño gráfico además del desarrollo web?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Sí, además del desarrollo web, ofrecemos servicios de diseño 
                        gráfico para asegurar que tu sitio web tenga una apariencia 
                        profesional y atractiva que represente adecuadamente tu marca.
                     </Text>
                  </Flex>
               </Flex>
            </Flex>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '75px'}}
         />
      </>
   );
};
