import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';

import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import SettingsLayout from 'layouts/Settings/layout';

export default function Profile() {
  return (
    <SettingsLayout>
      <Box sx={{ flex: 1, width: '100%' }}>
        <Box
          sx={{
            top: { sm: -100, md: -110 },
            bgcolor: 'background.body',
          }}
        >
          <Box sx={{ px: { xs: 2, md: 6 } }}>
            <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
              Settings
            </Typography>
          </Box>
          <Tabs
            defaultValue={0}
            sx={{
              bgcolor: 'transparent',
            }}
          >
            <TabList
              tabFlex={1}
              size="sm"
              sx={{
                pl: { xs: 0, md: 4 },
                justifyContent: 'left',
                [`&& .${tabClasses.root}`]: {
                  fontWeight: '600',
                  flex: 'initial',
                  color: 'text.tertiary',
                  [`&.${tabClasses.selected}`]: {
                    bgcolor: 'transparent',
                    color: 'text.primary',
                    '&::after': {
                      height: '2px',
                      bgcolor: 'primary.500',
                    },
                  },
                },
              }}
            >
              <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={0}>
                Profile
              </Tab>
              <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={1}>
                App settings
              </Tab>
            </TabList>
          </Tabs>
        </Box>
        <Stack
          spacing={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '800px',
            mx: 'auto',
            px: { xs: 2, md: 6 },
            py: { xs: 2, md: 3 },
          }}
        >
          <Card sx={{ flex: 1 }}>
            <Box>
              <Typography level="title-md">Personal info</Typography>
              <Typography level="body-sm">
                Customize how your profile information will appear in the application.
              </Typography>
            </Box>
            <Divider />
            <Stack
              direction="row"
              spacing={2}
            >
              <Stack direction="column" spacing={1}>
                <AspectRatio
                  ratio="1"
                  maxHeight={200}
                  sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
                <IconButton
                  aria-label="upload new picture"
                  size="sm"
                  variant="outlined"
                  color="neutral"
                  sx={{
                    bgcolor: 'background.body',
                    position: 'absolute',
                    zIndex: 2,
                    borderRadius: '50%',
                    left: 100,
                    top: 170,
                    boxShadow: 'sm',
                  }}
                >
                  <EditRoundedIcon />
                </IconButton>
              </Stack>
              <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <Stack spacing={1}>
                  <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input size="sm" placeholder="Username" />
                  </FormControl>
                  <FormControl sx={{ flexGrow: 1 }}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      size="sm"
                      type="email"
                      startDecorator={<EmailRoundedIcon />}
                      placeholder="email"
                      defaultValue="siriwatk@test.com"
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input size="sm" defaultValue="password" type="password" disabled />
                  </FormControl>
                  <FormControl sx={{ flexGrow: 1 }}>
                    <FormLabel>Role</FormLabel>
                    <Input
                      size="sm"
                      type="text"
                      startDecorator={<EmailRoundedIcon />}
                      placeholder="Role"
                      defaultValue="user"
                      disabled
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                </Stack>
              </Stack>
            </Stack>
            <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
              <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                <Button size="sm" variant="outlined" color="neutral">
                  Cancel
                </Button>
                <Button size="sm" variant="solid">
                  Save
                </Button>
              </CardActions>
            </CardOverflow>
          </Card>
        </Stack>
      </Box>
    </SettingsLayout>
  );
}