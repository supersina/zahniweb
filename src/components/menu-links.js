import { Box, Stack } from '@chakra-ui/layout';
import { MenuItem } from './menu-item';

export const MenuLinks = ({ isOpen }) => {
  return (
    <>
      <Box
        display={{ base: isOpen ? 'block' : 'none', sm: 'block' }}
        flexBasis={{ base: '100%', sm: 'auto' }}
      >
        <Stack
          spacing={8}
          align="center"
          justify={[
            'center',
            'space-between',
            'flex-end',
            'flex-end',
            'flex-end',
          ]}
          direction={['column', 'column', 'row', 'row', 'row']}
          pt={[2, 2, 0, 0, 0]}
          pb={[2, 2, 0, 0, 0]}
        >
          <MenuItem link="/">Home</MenuItem>
          <MenuItem link="/praxis">Unsere Praxis</MenuItem>
          <MenuItem link="/leistungen">Leistungen</MenuItem>
          <MenuItem link="/kontakt">Kontakt</MenuItem>
        </Stack>
      </Box>
    </>
  );
};
