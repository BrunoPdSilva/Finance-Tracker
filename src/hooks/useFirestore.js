import { useReducer, useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

let initialState = { document: null, isPending: false, error: null, success: null };

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { document: null, isPending: true, success: false, error: null };
    case "ADDED_DOCUMENT":
      return { document: action.payload, isPending: false, success: true, error: null };
    case "ERROR":
      return { document: null, isPending: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const useFirestore = collection => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  const ref = projectFirestore.collection(collection);

  const dispatchIfNotCancelled = action => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  const addDocument = async doc => {
    dispatch({ type: "IS_PENDING" });

    try {
      const addedDocument = await ref.add(doc);
      dispatchIfNotCancelled({ type: "ADDED_DOCUMENT", payload: addedDocument });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  const deleteDocument = async id => {};

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, response };
};
