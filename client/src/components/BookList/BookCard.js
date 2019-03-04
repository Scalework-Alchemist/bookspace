import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button
} from "@material-ui/core";

const BookCard = props => {
  return (
    <div>
      {props.currentBook ? (
        <Card>
          <CardContent>
            <CardMedia
                style={{ height: 0, paddingTop: "56.25%" }}
                image={props.currentBook.image}
                title={props.currentBook.id}
              />
            <Typography gutterBottom variant="headline" component="h2">
              {props.currentBook.name} 
              </Typography>
              <Typography component="p">
                Marvel ID: {props.currentBook.id}
                <br />
                Comics Available: {props.currentBook.comics.available}
                <br />
                Events : {props.currentBook.events.available}
                <br />
                description: {props.currentBook.description}
              </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="secondary"
              onClick={props.removeBook}
              id={props.currentBook._id}
            >
              Remove Book
            </Button>
            <Button
              size="small"
              color="primary"
              href={props.currentBook.urls}
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};
export default BookCard;


 