import * as React from 'react';
import RouterLink from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

import { paths } from '@/paths';

export const metadata = { title: `No encontrado` };

export default function NotFound() {
  return (
    <Box
      component="main"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100%',
        py: '64px',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <SentimentVeryDissatisfiedIcon sx={{ fontSize: '96px' }} />
          </Box>
          <Stack spacing={1} sx={{ textAlign: 'center' }}>
            <Typography variant="h4">404: Página no encontrada</Typography>
            <Typography color="text.secondary">
              Lo sentimos, pero la página que estás buscando no existe. Por favor, verifica la URL e inténtalo de nuevo.
            </Typography>
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button component={RouterLink} href={paths.home} variant="contained">
              Regresar al inicio
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
