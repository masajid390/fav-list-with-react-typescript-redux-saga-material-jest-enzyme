import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import FavouriteList from "./FavouriteList";
import {
  getFavList,
  rateFavItem,
  toggleRandomFavRating
} from "../store/fav-list/actions";
import { AppState } from "../store/root-state";
import { getRandomFloat, getRandomInt } from "../utils";
import { FavItem } from "../store/fav-list/types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  container: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '52px'
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: '68px'
    }
  }
}));

const Layout = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { items, isRating, isFetching } = useSelector((state: AppState) => state.favList);
  const [favItem, rating] = useFavItemRandomRating(items, isRating);
  const btnColor = isRating ? "secondary" : "default";
  const btnText = isRating ? "Stop Random Rating" : "Start Random Rating";
  // cDM
  useEffect(() => {
    dispatch(getFavList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateRating(favItem, rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favItem, rating]);

  const updateRating = (favItem: FavItem, rating: number): void => {
    const _favItem = { ...favItem };
    _favItem.rating = rating;
    dispatch(rateFavItem(_favItem));
  };

  const toggleRating = (): void => {
    dispatch(toggleRandomFavRating());
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Favourite List
          </Typography>
          <Button
            data-testid="btnStartRating"
            variant="contained"
            color={btnColor}
            onClick={toggleRating}
          >
            {btnText}
          </Button>
        </Toolbar>
        {isFetching && <LinearProgress color="secondary" />}
      </AppBar>
      <Container className={classes.container}>
        <FavouriteList
        items={[...items]}
        toggleRating={toggleRating}
        updateRating={updateRating}
        isRating={isRating}
      />
      </Container>
    </div>
  );
};

const useFavItemRandomRating = (items: FavItem[], isRating: boolean) => {
  let [favItem, setFavItem] = useState();
  let [rating, setRating] = useState();

  useEffect(() => {
    let intervalId: any = null;
    if (isRating) {
      const randomInterval = getRandomFloat(0, 1) * 1000;
      intervalId = setInterval(() => {
        const randomIndex = getRandomInt(0, items.length - 1);
        const randomRating = getRandomFloat(0, 5);
        setFavItem({ ...items[randomIndex] });
        setRating(randomRating);
      }, randomInterval);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRating]);
  return [favItem, rating];
};
export default Layout;
