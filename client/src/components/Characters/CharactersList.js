import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default class CharactersList extends Component {
  state = {
    AllCharacters: [],
    SearchString: "",
    url: `http://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=11a9a9e994cc5718f9fe92b73c85f0a0&hash=584bcbd30cd3774edb530ab623f40f0c`
  };
  constructor() {
    super();
    this.timeout = null;
    this.GetCharacters();
  }
  urlChooser = () => {
    if (this.state.SearchString !== "") {
      this.setState({
        url: `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${
          this.state.SearchString
        }&limit=100&ts=1&apikey=11a9a9e994cc5718f9fe92b73c85f0a0&hash=584bcbd30cd3774edb530ab623f40f0c`
      });
    }
    this.GetCharacters();
  };

  GetCharacters = () => {
    axios
      .get(this.state.url)
      .then(response => {
        this.setState({
          AllCharacters: response.data.data.results
        });
      })
      .catch(error => {
        console.log("cant fetch");
        console.log(error);
      });
  };
  onSearchInputChange = event => {
    if (event.target.value) {
      this.setState({ SearchString: event.target.value });
      console.log(event.target.value);
    } else {
      this.setState({ SearchString: "" });
    }
    this.urlChooser();
  };

  addToBackend = character => {
    return e => {
      e.preventDefault();
      character = {
        name: character.name,
        description: character.description,
        id: character.id,
        comics: character.comics,
        events: character.events,
        image: character.thumbnail.path+"/standard_fantastic."+character.thumbnail.extension,
        urls: character.urls.find(item => {
          return item.type === "detail";
        }).url
      }
      console.log(character);
      axios({
        method: 'post',
        url:"api/modelList/",
        data:character
      })
      .then( (response) => {
        console.log(response.data)
      })

    };
  };


  // }
  // onSearchInputChange = event => {
  //   const SearchInputChanger = event => {
  //     if (event.target.value) {
  //       this.setState({ SearchString: event.target.value });
  //       console.log(event.target.value);
  //     } else {
  //       this.setState({ SearchString: "" });
  //     }
  //     this.urlChooser();
  //   };
  //   clearTimeout(this.timeout);
  //   this.timeout = setTimeout(
  //     SearchInputChanger,
  //     1000);
  // };
  render() {
    return (
      <div>
        {this.state.AllCharacters ? (
          <div>
            <div>
              <TextField
                style={{ padding: 24 }}
                id="SearchInput"
                placeholder="Look For New Cards"
                margrin="normal"
                onChange={this.onSearchInputChange}
              />
            </div>
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.AllCharacters.map(currentCharacter => (
                <Grid key={currentCharacter.id} item xs={12} sm={6} lg={4} xl={3}>
                  <CharacterCard
                    CurrentCharacter={currentCharacter}
                    addToBackend={this.addToBackend}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          "no Characters Found"
        )}
      </div>
    );
  }
}
