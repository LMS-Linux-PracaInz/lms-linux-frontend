import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import CreateCourseForm from './forms/createCourseForm';

export default function AddCourseImageModal() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button variant="solid" color="primary" onClick={() => setOpen(true)}>
        Create course
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <CreateCourseForm setOpen={setOpen} />
      </Modal>
    </React.Fragment>
  );
}