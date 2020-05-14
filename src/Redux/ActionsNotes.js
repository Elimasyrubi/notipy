import {
  TRAER_NOTAS,
  CAMBIO_NOTA,
  ERROR,
  LOADING,
  CANCEL,
  ID_EDIT,
} from "./ActionsTypesNotes";
import db from "../utils/Firebase";

export const traerNotes = () => async (dispatch, getState) => {

  dispatch({
    type: LOADING,
  });

  try {
    let datosNotas = [];

    const respuesta = (doc) => {
      datosNotas = [
        ...datosNotas,
        {
          idN: doc.id,
          contenido: doc.data().contenido,
          Fecha: doc.data().fecha,
        },
      ];
    };

    await db
      .collection("Notas")
      .orderBy("fecha")
      .get()
      .then((snapShots) => {
        snapShots.docs.forEach((doc) => {
          respuesta(doc);
        });
      });

    dispatch({
      type: TRAER_NOTAS,
      payload: datosNotas,
    });

  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR,
      payload: "ha ocurrido un error l traer las notas",
    });
  }
};

export const addNote = (newNote) => async (dispatch, getState) => {
  dispatch({
    type: LOADING,
  });

  try {
    const New = {
      contenido: newNote,
      fecha: new Date(),
    };
    db.collection("Notas").add(New);
  } catch (error) {
    console.log(error);

    dispatch({
      type: ERROR,
      payload: "ha ocurrido un error al agegar la nota, intente mas tarde",
    });
  }
  dispatch({
    type: CAMBIO_NOTA,
    payload: "",
  });

  dispatch({
    type: CANCEL,
    payload: "",
  });
};






































export const remNote = (idN) => async (dispatch, getState) => {
  dispatch({
    type: LOADING,
  });

  try {
    db.collection("Notas").doc(idN).delete();
  } catch (error) {
    console.log("Error removing document: ", error);

    dispatch({
      type: ERROR,
      payload: "ha ocurrido un error al Eliminar la nota, intente mas tarde",
    });
  }
};

export const editNote = (idN, contenido) => async (dispatch, getState) => {
  dispatch({
    type: CAMBIO_NOTA,
    payload: contenido,
  });
  dispatch({
    type: ID_EDIT,
    payload: idN,
  });
};
export const Update = (id, text) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    db.collection("Notas").doc(id).update({
      contenido: text,
    });
  } catch (error) {
    console.log(error);

    dispatch({
      type: ERROR,
      payload: "ha ocurrido un error al editar la nota, intente mas tarde",
    });
  }
  dispatch({
    type: CAMBIO_NOTA,
    payload: "",
  });

  dispatch({
    type: CANCEL,
    payload: "",
  });
};

export const cancel = () => async (dispatch, getState) => {
  dispatch({
    type: CAMBIO_NOTA,
    payload: "",
  });

  dispatch({
    type: CANCEL,
    payload: "",
  });
};

export const cambioNota = (valor) => (dispatch) => {
  dispatch({
    type: CAMBIO_NOTA,
    payload: valor,
  });
};
