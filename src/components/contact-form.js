import React, { useState } from 'react';
import {
  Heading,
  Text,
  Box,
  Checkbox,
  Input,
  FormControl,
  FormLabel,
  Flex,
  Textarea,
} from '@chakra-ui/react';
import { useForm } from '@formspree/react';

import { colors } from '../theme/colors';
import { ButtonLink } from './buttonLink';

const fontSize = { sm: 'sm', md: 'md', lg: 'md', xl: 'md' };

export const ContactForm = () => {
  // Formspree endpoint here
  const [submitState, handleSubmit] = useForm('abc');
  const [formState, setFormState] = useState({
    name: '',
    tel: '',
    email: '',
    text: '',
    agb: false,
  });

  const [errors, setErrors] = useState([]);

  const validate = () => {
    let isValid = true;
    const errors = [];
    if (formState.name.trim().length < 1) {
      errors.push('name');
      isValid = false;
    }
    if (formState.text.trim().length < 3) {
      errors.push('text');
      isValid = false;
    }
    let mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!formState.email.match(mailformat)) {
      errors.push('email');
      isValid = false;
    }

    let phoneformat1 = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    let phoneformat2 = /^\(?(\d{4})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    let phoneformat3 = /^\(?(\d{4})\)?[- ]?(\d{2})[- ]?(\d{3})[- ]?(\d{4})$/;
    let phoneformat4 = /^\+?\(?(\d{2})\)?[- ]?(\d{2})[- ]?(\d{3})[- ]?(\d{4})$/;
    let phoneformat5 = /^\+?\(?(\d{2})\)?[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
    if (
      !formState.tel.match(phoneformat1) &&
      !formState.tel.match(phoneformat2) &&
      !formState.tel.match(phoneformat3) &&
      !formState.tel.match(phoneformat4) &&
      !formState.tel.match(phoneformat5)
    ) {
      errors.push('tel');
      isValid = false;
    }

    if (!formState.agb) {
      errors.push('agb');
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };
  const customHandleSubmit = e => {
    e.preventDefault();
    // custom validation
    const isValid = validate();

    console.log('isValid: ', isValid);
    if (isValid) {
      handleSubmit({
        name: formState.name.trim(),
        tel: formState.tel,
        email: formState.email,
        text: formState.text,
        agb: formState.agb,
      });
      setFormState({
        name: '',
        tel: '',
        email: '',
        text: '',
        agb: false,
      });
    }
  };

  if (submitState.succeeded) {
    return <Text textAlign="center">Vielen Dank für Ihre Nachricht!</Text>;
  }

  console.log('Erroooors: ', errors);
  return (
    <>
      <Box margin="auto" mb={4} mt={10}>
        <Heading as="h3" variant="medium" marginX="auto">
          Sie möchten Kontakt zu uns aufnehmen?
        </Heading>
        <Text margin="auto">
          Schreiben Sie uns über unser Kontaktformular. Wir freuen uns von Ihnen
          zu hören!
        </Text>
        <Text margin="auto" color="red">
          Achtung! Die Form ist zurzeit nicht aktiv. Deine Eingaben werden also
          an niemanden gesendet.
        </Text>
      </Box>

      <Box
        width={{ xs: '100%', sm: '100%', md: '90%', lg: '80%', xl: '80%' }}
        maxW="500px"
        //borderWidth="2px"
        //borderColor="rgb(150,200,150)"
        rounded="lg"
        bg={colors.secColor}
        color="white"
        marginX="auto"
        marginTop="2rem"
        borderRadius="5px"
      >
        <Flex
          as="form"
          onSubmit={customHandleSubmit}
          direction="column"
          flexWrap="wrap"
          width="90%"
          alignItems="center"
          justifyContent="center"
          mt={4}
          marginX="auto"
        >
          <FormControl id="name" mt={4}>
            <FormLabel fontSize={fontSize}>Name</FormLabel>
            <Input
              type="text"
              name="name"
              bg={colors.bgColor}
              size="sm"
              onChange={e =>
                setFormState({ ...formState, name: e.target.value })
              }
              isInvalid={errors.includes('name')}
            />
          </FormControl>
          <FormControl id="email" mt={2}>
            <FormLabel fontSize={fontSize}>Email</FormLabel>
            <Input
              type="text"
              name="email"
              bg={colors.bgColor}
              size="sm"
              onChange={e =>
                setFormState({ ...formState, email: e.target.value })
              }
              isInvalid={errors.includes('email')}
            />
          </FormControl>
          <FormControl id="telephone" mt={2}>
            <FormLabel fontSize={fontSize}>Telefon</FormLabel>
            <Input
              type="tel"
              name="tel"
              bg={colors.bgColor}
              size="sm"
              onChange={e =>
                setFormState({ ...formState, tel: e.target.value })
              }
              isInvalid={errors.includes('tel')}
            />
          </FormControl>
          <Textarea
            id="text"
            name="text"
            placeholder="Beschreiben Sie hier Ihr Anliegen"
            mt={4}
            mb={4}
            size="sm"
            bg={colors.bgColor}
            max={200}
            min={2}
            onChange={e => setFormState({ ...formState, text: e.target.value })}
            isInvalid={errors.includes('text')}
          ></Textarea>
          <Checkbox
            size="sm"
            name="agb"
            colorScheme="gray"
            mb={4}
            isInvalid={errors.includes('agb')}
            onChange={e => setFormState({ ...formState, agb: !formState.agb })}
          >
            Datenschutz habe ich gelesen und stimme zu
          </Checkbox>
          <ButtonLink
            type="submit"
            disabled={submitState.submitting}
            mb={4}
            title="Senden"
          />
        </Flex>
      </Box>
    </>
  );
};
