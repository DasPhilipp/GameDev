import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from 'widgets/footer';
import { Box, Container } from '@mui/material';
import { BackgroundStars } from 'shared/ui';
import s from './Layout.module.scss';

const LayoutPage: React.FC = () => {
  return (
    <Container disableGutters={true} className={s.container} maxWidth={false}>
      <Box className={s.main}>
        <BackgroundStars />
        <React.Suspense>
          <Outlet />
        </React.Suspense>
      </Box>
      {/* <Footer /> */}
      {/* TODO: footer? */}
    </Container>
  );
};

export default LayoutPage;
