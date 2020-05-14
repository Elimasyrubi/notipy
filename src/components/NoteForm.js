import React from "react";
import { connect } from "react-redux";
import * as ActionsNotes from "../Redux/ActionsNotes";
import "./styles/NoteForm.scss";

class NoteForm extends React.Component {
  componentDidUpdate(){
    if(this.props.ReducersNotes.notaText){
      this.textInput.focus();
    }
  }

  AgregarBotones() {
    const { id_edit, notaText } = this.props.ReducersNotes;
  
    if (!id_edit) {
      return (
        <button onClick={() => this.agregar(this.textInput.value)}>
          Add Note
        </button>
      );
    } else {
      return (
        <div className=" boton_edit">
          <button 
          className="Update"
          onClick={() => this.upDate(id_edit, notaText)}>Update</button>
          <button 
          className="cancel"
          onClick={() => this.props.cancel()}>Cancel</button>
        </div>
      );
    }
  }

  upDate(id_edit, notaText) {
    this.props.Update(id_edit, notaText);
    this.props.traerNotes();
    this.textInput.value = "";
  }

  agregar(newNote) {
    if (newNote) {
      this.props.addNote(newNote);
      this.props.traerNotes();
      this.textInput.value = "";
      this.textInput.focus();
    } else {
      this.textInput.value = "";
      this.textInput.focus();
    }
  }

  cambioNota = (event) => {
    this.props.cambioNota(event.target.value);
  };

  render() {
    return (
      <div className="Form">
        <textarea
          className="Form_input"
          ref={(input) => {
            this.textInput = input;
          }}
          type="text"
          placeholder="Write a new note"
          value={this.props.ReducersNotes.notaText}
          onChange={this.cambioNota}
        />

        {this.AgregarBotones()}
      </div>
    );
  }
}

const mapStateToProps = ({ ReducersNotes }) => {
  return {
    ReducersNotes,
  };
};
export default connect(mapStateToProps, ActionsNotes)(NoteForm);
