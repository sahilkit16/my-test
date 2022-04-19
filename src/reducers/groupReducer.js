const ADD_GROUP = "ADD_GROUP";

export const groupReducer = (state, action) => {
  switch (action.type) {
    case ADD_GROUP: {
      const groups = [...state];
      groups.push(action.payload);

      return groups;
    }

    default:
      return state;
  }
};
