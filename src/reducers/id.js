export const id = (state = '', action) => {
    switch (action.type) {
      case 'FIND_ID':
        return action.id;
      default:
        return state;
    }
  }