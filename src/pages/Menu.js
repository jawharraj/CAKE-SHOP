import React from 'react';
import { MenuList } from '../data/List.js';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
function Menu() {

  return (
    <div>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {
          MenuList.map((menu) => (
        <Card  sx={{ maxWidth: "350px", display: "flex", m: 2 }}>
          <CardActionArea>
            <CardMedia 
             sx={{ minHeight: "400px" }}
             component={"img"}
             src={menu.image}
             alt={menu.name}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom component={"div"}>{menu.name}</Typography>
              <Typography variant="body2">{menu.description}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        ))}
      </Box>
    </div>
  );
};

export default Menu;

