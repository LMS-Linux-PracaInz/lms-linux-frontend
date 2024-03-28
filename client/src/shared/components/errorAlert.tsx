import { IconButton, Alert, Typography } from "@mui/joy";

import { ReportOutlined, CloseRounded } from "@mui/icons-material";

interface ErrorAlert {
  message: string | undefined;
  type: string;
}

export default function ErrorAlert({ message, type }: ErrorAlert) {
  return (
    <Alert
      sx={{ alignItems: 'flex-start' }}
      startDecorator={<ReportOutlined />}
      variant="soft"
      color="danger"
      endDecorator={
        <IconButton variant="soft" color="danger">
          <CloseRounded />
        </IconButton>
      }
    >
      <div>
        <div>{type}</div>
        <Typography level="body-sm" color="danger">
          {message}
        </Typography>
      </div>
    </Alert>
  )
}