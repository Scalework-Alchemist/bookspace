import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  CardActionArea
} from "@material-ui/core";

const CharacterCard = props => {
  return (
    <div>
      {props.CurrentCharacter ? (
        <Card >
          <CardActionArea>
            <CardContent>
              <CardMedia
                style={{ height: 0, paddingTop: "56.25%" }}
                image={
                  props.CurrentCharacter.thumbnail.path +
                  "/standard_fantastic." +
                  props.CurrentCharacter.thumbnail.extension
                }
                title={props.CurrentCharacter.id}
              />
              <Typography gutterBottom variant="headline" component="h2">
                {props.CurrentCharacter.name}
              </Typography>
              <Typography component="p">
                Marvel ID: {props.CurrentCharacter.id}
                <br />
                Comics Available: {props.CurrentCharacter.comics.available}
                <br />
                Events : {props.CurrentCharacter.events.available}
                <br />
                description: {props.CurrentCharacter.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              onClick={props.addToBackend(props.CurrentCharacter)}
              size="small"
              color="primary"
            >
              Add: {props.CurrentCharacter.name}
            </Button>
            <Button
              size="small"
              color="primary"
              href={
                props.CurrentCharacter.urls.find(item => {
                  console.log(item)
                  return item.type === "detail";
                }).url
              }
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};
export default CharacterCard;
