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
import { Product } from "../../Models/product";
const ProductCard = (props: Product) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar sx={{bgcolor:"secondary.main"}}>{props.name.charAt(0).toUpperCase()}</Avatar>}
        title={props.name}
        titleTypographyProps={{
          sx:{fontWeight: 'bold', color:'primary.main'}
        }}
      />
      <CardMedia
        component="img"
        height="140"
        sx={{ objectFit: "contain", bgcolor: '#f2f3f4' }}
        image={props.pictureUrl}
        title={props.name}
        alt="product picture"
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5">
          ${(props.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.brand} / {props.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
