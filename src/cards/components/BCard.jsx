import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";

function BCard({ card }) {
  return (
    <Card sx={{ maxWidth: 300, mx: 2 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={card.image.url}
        title="Businees logo"
      />
      <CardContent>
        <Typography variant="h5">{card.title}</Typography>
        <Typography variant="h6">{card.subtitle}</Typography>
        <Divider sx={{ marginY: 1 }} />
        <Typography variant="body2">
          <strong>Phone:</strong> {card.phone}
        </Typography>
        <Typography variant="body2">
          <strong>Address:</strong> {card.address.city}
        </Typography>
        <Typography variant="body2">Card Number: {card.bizNumber}</Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between" }}
        disableSpacing
      >
        <Box>
          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <EditIcon />
          </IconButton>
        </Box>

        <Box>
          <IconButton>
            <CallIcon />
          </IconButton>

          <IconButton>
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}

export default BCard;
