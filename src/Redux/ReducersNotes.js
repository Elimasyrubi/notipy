import { 
  TRAER_NOTAS,
  CAMBIO_NOTA,
  ERROR,
  LOADING,
  CANCEL,
  ID_EDIT,

} from "./ActionsTypesNotes";

const INITIAL_STATE = {
  loading: false,
  error: "",
  user: {},
  notes: [],
  notaText: '',
  id_edit:'',

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state,
        loading: true };
   
    case ERROR:
      return { ...state,
        error: action.payload,
        loading: false };

    case TRAER_NOTAS:
      return { ...state,
        notes: action.payload,
        loading: false,
       };

    case CAMBIO_NOTA:
      return { ...state,
        notaText: action.payload,
        };
    case CANCEL:
      return { ...state,
        id_edit: action.payload,
        };
    case ID_EDIT:
      return { ...state,
        id_edit: action.payload,
        };

    default:
      return state;
  }
};
