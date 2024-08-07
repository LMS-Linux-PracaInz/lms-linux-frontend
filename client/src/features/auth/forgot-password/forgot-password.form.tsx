import { FormControl, FormLabel, Input, Stack, Button, FormHelperText } from "@mui/joy";
import { useFormik } from "formik";
import * as yup from "yup";

import style from "../auth.module.css"
import { useForgotPasswordFnMutation } from "app/api/auth.api.slice";
import { transformErrorResponse } from "shared/lib/functions";
import ErrorAlert from "shared/components/errorAlert";
import SuccessAlert from "shared/components/successAlert";

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});

export default function ForgotPasswordForm() {
  const [ForgotPasswordFn, { isLoading, error, isSuccess }] = useForgotPasswordFnMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await ForgotPasswordFn(values);
      resetForm();
    }
  })

  const errorResponse = transformErrorResponse(error);

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl required>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && !!formik.errors.email}
        />
        {formik.touched.email ?
          <FormHelperText component="div" className={style.formHelperError}>{formik.errors.email}</FormHelperText> : ""}
      </FormControl>
      <Stack gap={4} sx={{ mt: 2 }}>
        <Button type="submit" fullWidth loading={isLoading}>
          Send
        </Button>
      </Stack>
      {error ? <ErrorAlert type="Reset password" message={errorResponse} /> : ""}
      {isSuccess ? <SuccessAlert type="Reset password" message="Reset link has been sent. Please check your e-mail" /> : ""}
    </form>
  )
}