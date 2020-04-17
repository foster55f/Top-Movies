export const lastFocus = (state = { leftRight: 0, upDown: 0 }, action) => {
  switch (action.type) {
    case 'REMEMBER_FOCUS':
      return { leftRight: action.leftRight, upDown: action.upDown };
      default:
        return state;
    }
  }