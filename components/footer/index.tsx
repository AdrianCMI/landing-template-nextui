import {Divider, Text} from '@nextui-org/react';
import React from 'react';
import {AcmeLogo} from '../navbar/logo';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import Image from 'next/image';

export const Footer = () => {
   return (
      <Flex
         css={{
            py: '$20',
            px: '$6',
         }}
      >
         <Box as={'footer'} css={{width: '100%'}}>
            <Box
               css={{
                  'px': '$10',
                  '@md': {
                     px: '$56',
                  },
               }}
            >
               <Flex
                  //   justify={'between'}
                  align={'center'}
                  wrap={'wrap'}
                  css={{
                     'pt': '$8',
                     'gap': '$10',
                     'justifyContent': 'center',
                     '@md': {
                        justifyContent: 'space-between',
                     },
                  }}
               >
               <Flex
                  css={{
                     gap: '$10',
                  }}
               >
                     <a><img src="/insta.png" color='$accents8' width="24" height="24" alt="Instagram"/></a>
                     <a><img src="/fb.png" color='$accents8' width="24" height="24" alt="Facebook"/></a>
                     <a><img src="/x.png" color='$accents8' width="24" height="24" alt="Twitter"/></a>
                     <a><img src="/disc.png" color='$accents8' width="24" height="24" alt="Discord"/></a>
                  </Flex>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     <a><Text span css={{color: '$accents8'}}>
                        Terms of Service
                     </Text>
                     </a>
                     <a>
                     <Text span css={{color: '$accents8'}}>
                        Privacy Policy
                     </Text>
                     </a>
                  </Flex>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     <a>
                     <Text span css={{color: '$accents8'}}>
                        © Copyright 2024 Deploy+.
                     </Text>
                     </a>
                  </Flex>
                     
               </Flex>
            </Box>
         </Box>
      </Flex>
   );
};
