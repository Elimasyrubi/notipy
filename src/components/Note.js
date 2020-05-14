import React from "react";
import "./styles/Note.scss";
import { connect } from "react-redux";
import * as ActionsNotes from "../Redux/ActionsNotes";
class Note extends React.Component {
  async delet(idN) {
    await this.props.remNote(idN);
    this.props.traerNotes();
  }
  
  async edit(idN) {
    let contenido = this.props.contenido;
    await this.props.editNote(idN, contenido);
  }

  render() {
    return (
      <div className="note">
        <p className="note_contenido">{this.props.contenido}</p>

        <button
          className=" button_delete"
          onClick={() => this.delet(this.props.idN)}
        >
        <i class="fas fa-trash-alt"></i>
        </button>

        <button 
        className="button_edit"
        onClick={() => this.edit(this.props.idN)}>
         <i class="fas fa-pencil-alt"></i>
          </button>
      </div>
    );
  }
}

const mapStateToProps = ({ ReducersNotes }) => {
  return {
    ReducersNotes,
  };
};

export default connect(mapStateToProps, ActionsNotes)(Note);
