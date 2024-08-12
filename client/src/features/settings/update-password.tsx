import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import { FormControl, Input, FormLabel, FormHelperText } from '@mui/joy';
import { useFormik } from 'formik';
import * as yup from "yup";

import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import LockResetRoundedIcon from '@mui/icons-material/LockResetRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';

import { useUpdateUserPasswordMutation } from 'app/api/users.api.slice';
import WarningAlert from 'shared/components/warningAlert';
import { transformErrorResponse } from 'shared/lib/functions';

const validationSchema = yup.object().shape({
  password: yup.string().min(8, 'Password must be atleast 8 characters long').required('Password is required'),
  repeatPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
  newPassword: yup.string().min(8, 'Password must be atleast 8 characters long').required('Password is required'),
});

export default function UpdatePassword() {
  const [UpdateUserPassword, { error, isLoading }] = useUpdateUserPasswordMutation();

  const errorResponse = transformErrorResponse(error)

  const formik = useFormik({
    initialValues: {
      password: "",
      repeatPassword: "",
      newPassword: ""
    },
    validationSchema,
    onSubmit: async (values) => {
      const updatePassword = {
        password: values.password,
        newPassword: values.newPassword
      }
      await UpdateUserPassword(updatePassword);
    }
  })

  return (
    <Card sx={{ flex: 1, width: 490 }}>
      <Box>
        <Typography level="title-md">Password settings</Typography>
        <Typography level="body-sm">
          You can update your password here
        </Typography>
      </Box>
      <Divider />
      <Stack spacing={2} sx={{ my: 1 }}>
        <form onSubmit={formik.handleSubmit}>
          <Stack direction="column" gap={1}>
            <FormControl required>
              <FormLabel>Current password</FormLabel>
              <Input
                type="password"
                name="password"
                startDecorator={<KeyRoundedIcon />}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && !!formik.errors.password}
              />
              {formik.touched.password ?
                <FormHelperText component="div">{formik.errors.password}</FormHelperText> : ""}
            </FormControl>
            <FormControl required>
              <FormLabel>Repeat current password</FormLabel>
              <Input
                type="password"
                name="repeatPassword"
                startDecorator={<LockResetRoundedIcon />}
                value={formik.values.repeatPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.repeatPassword && !!formik.errors.repeatPassword}
              />
              {formik.touched.repeatPassword ?
                <FormHelperText component="div">{formik.errors.repeatPassword}</FormHelperText> : ""}
            </FormControl>
            <FormControl required>
              <FormLabel>New password</FormLabel>
              <Input
                type="password"
                name="newPassword"
                startDecorator={<PasswordRoundedIcon />}
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.newPassword && !!formik.errors.newPassword}
              />
              {formik.touched.newPassword ?
                <FormHelperText component="div">{formik.errors.newPassword}</FormHelperText> : ""}
            </FormControl>
            <CardOverflow>
              <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                <Button size="sm" variant="outlined" onClick={() => formik.resetForm()}>
                  Cancel
                </Button>
                <Button size="sm" variant="solid" type="submit" loading={isLoading}>
                  Save
                </Button>
              </CardActions>
            </CardOverflow>
          </Stack>
          {error ? <WarningAlert type="Error while updating password" message={errorResponse} /> : ""}
        </form>
      </Stack>
    </Card>
  )
}