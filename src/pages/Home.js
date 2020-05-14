import React from "react";
import "./styles/Home.scss";
import Note from "../components/Note";
import NoteForm from "../components/NoteForm";
import { connect } from "react-redux";
import * as ActionsNotes from "../Redux/ActionsNotes";
import Sniper from '../components/Spiner'

class Home extends React.Component {

  componentDidMount() {
    if (!this.props.ReducersNotes.notes.lengh) {
      this.props.traerNotes();
    }
  }

  render() {
    

    const {
      ReducersNotes: { notes },
    } = this.props;

    return (
      <div className="container">
        <div className="header text-aling">
          <h1> Notipy </h1>
        </div>

        <div className="sniper">
          {this.props.ReducersNotes.loading && (
            <Sniper/>
          )}
        </div> 

        <div className="D-flex">
          <div>
            <NoteForm />
          </div>

          <div >
            <ul className="note_container">
              {notes.map((note, noteId,) => {
                return (
                  <Note

                    idN={note.idN}
                    posId={noteId}
                    contenido={note.contenido}
                    key={noteId}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = ({ ReducersNotes }) => {
  return {
    ReducersNotes,
  };
};

export default connect(mapStateToProps, ActionsNotes)(Home);
