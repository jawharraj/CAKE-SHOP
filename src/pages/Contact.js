import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import React from 'react';
const contact = () => {
  return (
    <div>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant='h4'><center>Contact My Cake Shop</center></Typography>
        <p>
        Whether it's a last-minute celebration or a spontaneous craving, our contact page is your emergency hotline for instant cake satisfaction.Our contact page is like a cozy coffee date, but with cakes. Pour your questions, thoughts, or cake desires, and let's make it a delightful conversation.
        </p>
      </Box>
      <Box style={{display:'flex' , gap:'20px' , }} >
        
         <TableContainer component={Paper} style={{width:'50%'}}>
          
          <Table aria-label="contact table" >
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: "black", color: "white" }}
                  align="center">
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 9626594367
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> jawharraj2004@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 8344442158
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4013467.1025377945!2d73.26350234190727!3d10.78053209201264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0x559475cc463361f0!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1703227852457!5m2!1sen!2sin" 
         style={{border:"0",width:'50%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
        </Box>
       
        
    </div>
    
  );
};

export default contact;
