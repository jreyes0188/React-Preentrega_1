import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Productos = ({img, nombre, descripcion, backgroudColor, h5, border,}) => {
    return (
        <Card sx={{ maxWidth: 250, background: backgroudColor, color: h5, border:border }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={img} style={{height: "20rem"}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {nombre}
                    </Typography>
                    <Typography variant="body2" color="white">
                        {descripcion}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Productos;