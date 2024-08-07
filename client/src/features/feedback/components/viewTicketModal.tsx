import { useState, Fragment } from "react";
import { IconButton, Modal, Sheet } from "@mui/joy";

import ZoomIn from '@mui/icons-material/ZoomIn';

import { FeedbackTicket } from "shared/ts/types";

export default function ViewTicketModal(feedbackTicket: FeedbackTicket) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <IconButton onClick={() => setOpen(true)}>
        <ZoomIn />
      </IconButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet>
          {feedbackTicket.feedbackMessage ? feedbackTicket.feedbackMessage : ""}
        </Sheet>
      </Modal>
    </Fragment>
  );
}