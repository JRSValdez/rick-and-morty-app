import React from 'react';

import Header from './components/Header';
import CharacterList from './components/CharacterList';
import Pagination from './components/Pagination';
import CharacterModal from './components/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      currentPage: 1,
      showModal: false,
      selectedCharacter: {}
    }
  }

  getCharacters() {
    console.log('getCharacters');
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${this.state.currentPage}`)
      .then(response => {
        this.setState({
          characters: response.data.results
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getCharacter(characterId) {
    console.log('getCharacter');
    axios
      .get(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then(response => {
        this.setState({
          selectedCharacter: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getCharacters();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.getCharacters();
    }
  }

  handlePagination = (increase) => {
    const currentPage = this.state.currentPage;

    let newPage = increase === true ? currentPage + 1 : currentPage - 1;

    this.setState({
      currentPage: newPage
    });
  }

  handleModal = (characterId) => {
    this.getCharacter(characterId);
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <div className="container" >
        <Header />

        <CharacterModal
          character={this.state.selectedCharacter}
          show={this.state.showModal}
          handleClose={this.handleModal}
        />
        <Pagination
          handlePagination={this.handlePagination}
          currentPage={this.state.currentPage}
        />
        <CharacterList
          characters={this.state.characters}
          handleModal={this.handleModal}
        />
        <Pagination
          handlePagination={this.handlePagination}
          currentPage={this.state.currentPage}
        />

      </div>
    );
  }

}


export default App;
