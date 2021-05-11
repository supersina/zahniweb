import React from 'react';

import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { colors } from '../theme/colors';

export const InfoModal = ({ img, title, isOpen, onClose }) => {
  return (
    <>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent background={colors.buttonColor}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton color={colors.secColor} />
          <ModalBody>
            <Image
              src={img}
              alt="gridimg"
              objectFit="cover"
              h={{ base: '200px', sm: '300px', md: '400px', lg: '500px' }}
              width="100%"
            ></Image>
          </ModalBody>

          <ModalFooter color="white">{title}</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
