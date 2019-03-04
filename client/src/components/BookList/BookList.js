import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import BookCard from "./BookCard";

export default class BookList extends Component {
  state = {
    allBooks: [],
    searchString: "",
    url: `api/modelList/`
  };
  constructor() {
    super();
    this.getBooks();
  }
  urlChooser = () => {
    if (this.state.SearchString !== "") {
      this.setState({
        url: `api/modelList/${this.state.SearchString}`
      });
    }
    this.getBooks();
  };

  getBooks = () => {
    axios
      .get(this.state.url)
      .then(response => {
        this.setState({
          allBooks: response.data
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

  removeBook = book => {
    return e => {
      book = {
        _id: book._id
      }
      console.log(book);
      axios({
        method: 'delete',
        url:"api/modelList/",
        data:book
      })
      .then( (response) => {
        console.log(response.data)
      })
    };
  };

  render() {
    return (
      <div>
        {this.state.allBooks ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id="searchInput"
              placeholder="Quary Your Cards"
              margrin="normal"
              onChange={this.onSearchInputChange}
            />
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.allBooks.map(currentBook => (
                <Grid key={currentBook.id} item xs={12} sm={6} lg={4} xl={3}>
                  <BookCard
                    currentBook={currentBook}
                    removeCharacter={this.removeCharacter}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          "no Books Found"
        )}
      </div>
    );
  }
}
