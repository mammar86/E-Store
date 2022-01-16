import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../Models/product";
const ProductCard = ({id ,name, price, pictureUrl, brand, type}: Product) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar sx={{bgcolor:"secondary.main"}}>{name.charAt(0).toUpperCase()}</Avatar>}
        title={name}
        titleTypographyProps={{
          sx:{fontWeight: 'bold', color:'primary.main'}
        }}
      />
      <CardMedia
        component="img"
        height="140"
        sx={{ objectFit: "contain", bgcolor: '#f2f3f4' }}
        image={pictureUrl}
        title={name}
        alt="product picture"
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5">
          ${(price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {brand} / {type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button component={Link} to={`/catalog/${id}`} size="small">View</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
