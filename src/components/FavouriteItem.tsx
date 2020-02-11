import React from "react";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FavItem } from "../store/fav-list/types";

const useStyles = makeStyles({
  card: {
    borderRadius: 0
  }
});

interface FavouriteItemProps {
  item: FavItem;
  updateRating: (favItem: FavItem, rating: number) => void;
}

const FavouriteItem: React.FC<FavouriteItemProps> = ({
  item,
  updateRating
}) => {
  const classes = useStyles();

  const onChangeRating = (event: any, rating: number | null) => {
    if (rating) {
      const favItem = { ...item };
      updateRating(favItem, rating);
    }
  };

  return item.rating > 0 && item.rating <= 5 ? (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography
            data-testid="name"
            gutterBottom
            variant="h5"
            component="h2"
          >
            {item.name}
          </Typography>
          <Typography
            data-testid="author"
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {item.author}
          </Typography>
          <Typography component="p">
            <Rating
              name={`rating${item.id}`}
              size="large"
              value={item.rating}
              precision={0.5}
              onChange={onChangeRating}
              max={5}
            />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ) : (
    <span data-testid="invalidRating">Invalid Rating</span>
  );
};
export default FavouriteItem;
