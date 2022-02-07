import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { questionGeek } from "../data/Cuestionario";
import {
  DivForm,
  FormStyle,
  Titulo,
  RadioStyled,
  ButtonStyled,
} from "../styles/CardQuestion";

export default class Question extends Component {
  constructor() {
    // inicializa todos los estados
    super();
    this.state = {
      numberQuestion: 0, // preguntar que estamos
      question: {
        question: "", // nombre pregunta
        a: "", // opciones de respuesta
        b: "",
        c: "",
        d: "",
        correct: "",
      },
      score: 0, // puntuacion
      answerSelect: "", // respuesta que selecciono
    };
  }

  componentDidMount() {
    const currentQuizData = questionGeek[this.state.numberQuestion]; // igual objeto 1 tenia 0
    this.setState({
      question: {
        question: currentQuizData.question,
        a: currentQuizData.a,
        b: currentQuizData.b,
        c: currentQuizData.c,
        d: currentQuizData.d,
        correct: currentQuizData.correct,
      },
    }); // modificar estado
  }

  handleSubmit = (e) => {
    e.preventDefault(); // no recarge
    e.target.reset(); // se limpia del target radio btn
    if (this.state.answerSelect === this.state.question.correct) {
      // si respondio bien
      this.setState({
        score: this.state.score + 1, // aumenta la puntuacion
      });
      alert("Respuesta Correcta");
    } else if (this.state.answerSelect === "") {


      alert("Debe seleccionar una respuesta");
      let actu = 0;

      this.state.numberQuestion = actu;
      
      this.setState({
        question: {
          question:this.state.numberQuestion,

        }
      });
      console.log(this.state.numberQuestion);
    } else {
      alert("Respuesta incorrecta");
    }

    if (this.state.numberQuestion < questionGeek.length) {
      // la longitud cambieme la siquiente pregunta
      this.componentDidMount();
    } else {
      console.log(this.state.score); // si ya acabo a la ultima pregunta
    }
  };

  onChange = (e) => {
    this.setState({
      answerSelect: e.currentTarget.value,
    });
  };

  render() {

    return (
      <DivForm>
        <FormStyle onSubmit={this.handleSubmit}>
          <Form.Group
            className="mb-3"
            controlId="control_radio"
            style={{ padding: "4rem" }}
          >
            <Titulo>{this.state.question.question}</Titulo>
            <RadioStyled
              type="radio"
              label={this.state.question.a}
              value={this.state.question.a}
              name={"Respuestas"}
              id={"Respuesta1"}
              onChange={this.onChange}
            />
            <RadioStyled
              type="radio"
              label={this.state.question.b}
              value={this.state.question.b}
              name={"Respuestas"}
              id={"Respuesta2"}
              onChange={this.onChange}
            />
            <RadioStyled
              type="radio"
              label={this.state.question.c}
              value={this.state.question.c}
              name={"Respuestas"}
              id={"Respuesta3"}
              onChange={this.onChange}
            />
            <RadioStyled
              type="radio"
              label={this.state.question.d}
              value={this.state.question.d}
              name={"Respuestas"}
              id={"Respuesta4"}
              onChange={this.onChange}
            />
          </Form.Group>
          <ButtonStyled
            variant="primary"
            type="submit"
            onClick={() =>
              this.setState({
                numberQuestion: this.state.numberQuestion + 1,
              })
            }
          >
            Enviar
          </ButtonStyled>
          <h2 style={{ textAlign: "center" }}>
            {this.state.score}/{questionGeek.lenght}
          </h2>
        </FormStyle>
      </DivForm>
    );
  }
}
