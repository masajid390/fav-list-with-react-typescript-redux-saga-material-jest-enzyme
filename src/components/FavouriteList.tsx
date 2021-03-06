import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FavouriteItem from "./FavouriteItem";
import { FavItem } from "../store/fav-list/types";
import Pagination from "@material-ui/lab/Pagination";
import Card from "@material-ui/core/Card";
import usePagination from "../hooks/pagination";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    borderRadius: 0,
    borderTop: "1px solid #f0f0f0",
    padding: "5px 0",
  },
  notFound: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
});

interface FavouriteListProps {
  items: FavItem[];
  isRating: boolean;
  toggleRating: () => void;
  updateRating: (favItem: FavItem, rating: number) => void;
}

const FavouriteList: React.FC<FavouriteListProps> = ({
  items,
  updateRating,
}) => {
  const classes = useStyles();
  const [pagingProps, pageItems] = usePagination(items, 5);
  return items.length > 0 ? (
    <>
      {pageItems.map((favItem: FavItem) => (
        <FavouriteItem
          key={favItem.id}
          item={favItem}
          updateRating={updateRating}
        />
      ))}
      <Card className={classes.card}>
        <Pagination {...pagingProps} />
      </Card>
    </>
  ) : (
    <Container className={classes.notFound}>
      <Typography variant="h6" data-testid="notFound">
        {"No data found."}
      </Typography>
    </Container>
  );
};

export default FavouriteList;
