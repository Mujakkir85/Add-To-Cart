import React from 'react';
import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import contactImage from "./Assests/contact.webp"

const ContactPage = () => {
    return (
        <Stack alignItems="center">
            <Stack  direction={{xs: 'column', md:'row' }} spacing={14}  >
              <Box>
                  <img src={`${contactImage}`}/>
              </Box>

              <Box>
                  <Typography variant="h2" sx={{pt:'150px', pb:'50px', fontSize:'70px'}}>Get in touch</Typography>
                  <Stack spacing={4} width="700px">
                      <TextField id="outlined-basic" label="Name" variant="outlined" />
                      <TextField id="outlined-basic" label="Last name" variant="outlined" />
                      <TextField id="outlined-basic" label="Your email" variant="outlined" />
                      <TextField id="outlined-basic" label="Message" multiline rows={4} variant="outlined" />
                      <Button variant="mainButton">Submit</Button>
                  </Stack>
              </Box>
            </Stack>
        </Stack>
    );
};

export default ContactPage;
