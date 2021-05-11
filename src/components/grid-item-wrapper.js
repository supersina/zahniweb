import React from 'react';
import { GridItem, Image, useDisclosure } from '@chakra-ui/react';
import { InfoModal } from './info-modal';
import { colors } from '../theme/colors';

export const GridItemWrapper = ({ rowSpan, colSpan, entry, ...props }) => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  return (
    <GridItem
      rowSpan={rowSpan}
      colSpan={colSpan}
      bg={colors.bgColor}
      key={entry.id}
      _hover={{ cursor: 'pointer' }}
      onClick={onOpen}
      {...props}
    >
      <Image
        src={entry.image}
        alt="gridimg"
        objectFit="cover"
        h="200px"
        width="100%"
      ></Image>
      <InfoModal
        img={entry.image}
        title={entry.title}
        isOpen={isOpen}
        onClose={onClose}
      ></InfoModal>
    </GridItem>
  );
};
