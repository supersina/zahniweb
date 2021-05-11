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
import { AlertConfirmation } from './alert-confirmation';
import { colors } from '../theme/colors';
import { ButtonLink } from './buttonLink';

const fontSize = { sm: 'sm', md: 'md', lg: 'md', xl: 'md' };

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export const ContactForm = () => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [telephoneInput, setTelephoneInput] = useState('');
  const [textInput, setTextInput] = useState('');
  const [agbInput, setAgbInput] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleNameChange = e => {
    e.preventDefault();
    const value = e.target.value;
    setNameInput(value);

    let newErrors = errors.filter(error => error !== 'nameInput');
    setErrors(newErrors);
  };

  const handleEmailChange = e => {
    e.preventDefault();
    const value = e.target.value;
    setEmailInput(value);

    let newErrors = errors.filter(error => error !== 'emailInput');
    setErrors(newErrors);
  };

  const handleTelephoneChange = e => {
    e.preventDefault();
    const value = e.target.value;
    setTelephoneInput(value);
  };

  const handleTextChange = e => {
    e.preventDefault();
    const value = e.target.value;
    setTextInput(value);

    let newErrors = errors.filter(error => error !== 'textInput');
    setErrors(newErrors);
  };

  const handleAgbInput = e => {
    e.preventDefault();
    const value = e.target.checked;
    setAgbInput(value);

    let newErrors = errors.filter(error => error !== 'agbInput');
    setErrors(newErrors);
  };

  const sendMessage = e => {
    console.log(
      'Inputs: ',
      nameInput,
      emailInput,
      telephoneInput,
      textInput,
      agbInput
    );

    let newErrors = [];

    if (textInput === '') {
      newErrors.push('textInput');
    }
    if (nameInput === '') {
      newErrors.push('nameInput');
    }
    if (emailInput === '') {
      newErrors.push('emailInput');
    }
    if (agbInput === false) {
      newErrors.push('agbInput');
    }

    console.log('new errors: ', newErrors);
    console.log('agb: ', agbInput);
    setErrors(newErrors);

    if (newErrors.length === 0) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          nameInput,
          emailInput,
          telephoneInput,
          textInput,
          agbInput,
        }),
      })
        .then(() => {
          setNameInput('');
          setEmailInput('');
          setTelephoneInput('');
          setTextInput('');
          setAgbInput(false);
          setSent(true);
        })
        .catch(error => alert(error));
    }

    e.preventDefault();
  };

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
          direction="column"
          flexWrap="wrap"
          width="90%"
          alignItems="center"
          justifyContent="center"
          mt={4}
          marginX="auto"
          onSubmit={sendMessage}
        >
          <FormControl id="name" mt={4}>
            <FormLabel fontSize={fontSize}>Name</FormLabel>
            <Input
              type="text"
              bg={colors.bgColor}
              size="sm"
              isInvalid={errors.includes('nameInput')}
              value={nameInput}
              onChange={handleNameChange}
            />
          </FormControl>
          <FormControl id="email" mt={2}>
            <FormLabel fontSize={fontSize}>Email</FormLabel>
            <Input
              type="email"
              bg={colors.bgColor}
              size="sm"
              isInvalid={errors.includes('emailInput')}
              value={emailInput}
              onChange={handleEmailChange}
            />
          </FormControl>
          <FormControl id="telephone" mt={2}>
            <FormLabel fontSize={fontSize}>Telefon</FormLabel>
            <Input
              type="tel"
              bg={colors.bgColor}
              size="sm"
              isInvalid={errors.includes('telephoneInput')}
              value={telephoneInput}
              onChange={handleTelephoneChange}
            />
          </FormControl>
          <Textarea
            id="text"
            placeholder="Beschreiben Sie hier Ihr Anliegen"
            mt={4}
            mb={4}
            size="sm"
            bg={colors.bgColor}
            max={200}
            min={2}
            isInvalid={errors.includes('textInput')}
            value={textInput}
            onChange={handleTextChange}
          ></Textarea>
          <Checkbox
            size="sm"
            colorScheme="gray"
            mb={4}
            isInvalid={errors.includes('agbInput')}
            onChange={handleAgbInput}
          >
            Datenschutz habe ich gelesen und stimme zu
          </Checkbox>
          {sent ? <AlertConfirmation></AlertConfirmation> : <Text></Text>}
          <ButtonLink type="submit" mb={4} title="Senden"></ButtonLink>
        </Flex>
      </Box>
    </>
  );
};
