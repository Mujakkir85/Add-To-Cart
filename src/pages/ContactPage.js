import React from 'react';
import {Box, Stack, TextField, Typography} from "@mui/material";
import contactImage from "./Assests/contact.webp"

const ContactPage = () => {
    return (
        <div>
            <Stack>
              <Box>
                  <img src={`${contactImage}`}/>
              </Box>

              <Box>
                  <Box componet="form">
                      <TextField
                          required
                          // id="outlined-required"
                          // label="Name"
                          id="outlined-basic"
                          //label="Outlined"
                          variant="outlined"
                          placeholder="Name"
                      />
                  </Box>
              </Box>
            </Stack>
        </div>
    );
};

export default ContactPage;
