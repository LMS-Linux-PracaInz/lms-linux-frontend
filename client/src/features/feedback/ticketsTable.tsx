import Box from '@mui/joy/Box';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import Skeleton from '@mui/joy/Skeleton';

import { useGetFeedbackTicketsQuery } from 'app/api/feedback.slice';
import { FeedbackTicket } from 'shared/ts/types';
import { parseDate } from 'shared/lib/functions';
import { ColorPaletteProp, IconButton } from '@mui/joy';
import { ZoomIn } from '@mui/icons-material';

export default function TicketsTable() {
  const { data, isLoading } = useGetFeedbackTicketsQuery(undefined);

  return (
    <Sheet
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ flexGrow: 1, overflow: "auto" }}>
        <Table
          hoverRow
          sx={{
            '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
            '--Table-headerUnderlineThickness': '1px',
            '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
            '--TableCell-paddingY': '4px',
            '--TableCell-paddingX': '8px',
          }}
        >
          <thead>
            <tr>
              <th>Ticket Id.</th>
              <th>Problem</th>
              <th>Status</th>
              <th>Date</th>
              <th>Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ?
              [1, 2, 3].map((index) => (
                <tr key={index}>
                  <td scope="row">
                    <Skeleton animation="wave" variant="text" />
                  </td>
                  <td scope="row">
                    <Skeleton animation="wave" variant="text" />
                  </td>
                  <td scope="row">
                    <Skeleton animation="wave" variant="text" />
                  </td>
                  <td scope="row">
                    <Skeleton animation="wave" variant="text" />
                  </td>
                  <td scope="row">
                    <Skeleton animation="wave" variant="text" />
                  </td>
                </tr>
              ))
              : data.map((ticket: FeedbackTicket) => (
                <tr key={ticket.id}>
                  <td>
                    <Typography level="body-xs">{ticket.ticket_id}</Typography>
                  </td>
                  <td>
                    <Typography level="body-xs">{ticket.problem}</Typography>
                  </td>
                  <td>
                    <Chip
                      variant="soft"
                      size="sm"
                      color={
                        {
                          active: 'success',
                          rejected: 'danger',
                          resolved: 'neutral'
                        }[ticket.status] as ColorPaletteProp
                      }
                    >
                      {ticket.status}
                    </Chip>
                  </td>
                  <td>
                    <Typography level="body-xs">{parseDate(ticket.created)}</Typography>
                  </td>
                  <td>
                    <Typography level="body-xs">{parseDate(ticket.updated)}</Typography>
                  </td>
                  <td>
                    <IconButton>
                      <ZoomIn />
                    </IconButton>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Box>
    </Sheet >
  )
}