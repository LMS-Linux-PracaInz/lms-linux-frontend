import { CssBaseline, CssVarsProvider } from '@mui/joy';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Container from '@mui/joy/Container';
import { typographyClasses } from '@mui/joy/Typography';
import { Outlet } from 'react-router-dom';

export default function LandingPageLayout() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Container
        sx={() => ({
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
        })}
      >
        <Box
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            maxWidth: '60ch',
            textAlign: 'center',
            flexShrink: 999,
            [theme.breakpoints.up(834)]: {
              minWidth: 420,
              alignItems: 'flex-start',
              textAlign: 'initial',
            },
            [`& .${typographyClasses.root}`]: {
              textWrap: 'balance',
            },
          })}
        >
          <Outlet />
        </Box>
        <AspectRatio
          ratio={600 / 600}
          variant="outlined"
          maxHeight={300}
          sx={(theme) => ({
            minWidth: 300,
            alignSelf: 'stretch',
            [theme.breakpoints.up(834)]: {
              alignSelf: 'initial',
              flexGrow: 1,
              '--AspectRatio-maxHeight': '520px',
              '--AspectRatio-minHeight': '400px',
            },
            borderRadius: 'sm',
            bgcolor: 'background.level2',
            flexBasis: '50%',
          })}
        >
          <img
            src="https://images.unsplash.com/photo-1483791424735-e9ad0209eea2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
        </AspectRatio>
      </Container>
    </CssVarsProvider>
  );
}