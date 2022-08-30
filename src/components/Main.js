import React, { Component } from "react";
import Form from './Form';
import Tarefas from './Tarefas';
import './Main.css';


export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
  };


  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;

    this.setState({ tarefas});
  }

  
  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state

    if (tarefas === prevState.tarefas) return;
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) render;

    const novasTarefa = [...tarefas]

    if(index === -1) {
      this.setState({
        tarefas: [... novasTarefa, novaTarefa],
        novaTarefa: '',
        index: -1,
      });
    } else {
      novasTarefa[index] = novaTarefa

      this.setState({
        tarefas: [...novasTarefa],
        novaTarefa: '',
        index: -1
      })
    };
  };


  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };


  handleEdit = (e, index) => {
    const { tarefas } = this.state;

      this.setState({
        index,
        novaTarefa: tarefas[index],
      });
  };


  handleDelete= (e, index) => {
    const { tarefas } = this.state;
    const novasTarefa = [...tarefas];
    novasTarefa.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefa],
    });
  }


  render() {
    const { novaTarefa, tarefas } = this.state

    return (
      <div className="main">

        <h1>Lista de tarefas</h1>

        <Form
          handleSubmit= {this.handleSubmit}
          handleChange= {this.handleChange}
          novaTarefa= {novaTarefa}
        />

        <Tarefas
          tarefas= {tarefas}
          handleEdit= {this.handleEdit}
          handleDelete= {this.handleDelete}

        />

      </div>
    );
  };
};
