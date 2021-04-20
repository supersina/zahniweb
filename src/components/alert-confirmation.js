import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

export const AlertConfirmation = () => {
  return (
    <>
      <Alert status="success" maxW="600px" marginX="auto" mb={4}>
        <AlertIcon boxSize="30px" mr={2} />
        <AlertTitle fontSize="md">Vielen Dank!</AlertTitle>
        <AlertDescription ml={2} maxWidth="sm" fontSize="sm">
          Deine Nachricht wird von uns schnellstmöglich bearbeitet.
        </AlertDescription>
      </Alert>
    </>
  );
};
