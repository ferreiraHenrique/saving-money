export const CLICK_UPDATE_VALUE = 'CLICK_UPDATE_VALUE';

const initialState = {newValue: ''};


export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_UPDATE_VALUE':
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
};


export const clickButton = value => ({
  type: 'CLICK_UPDATE_VALUE',
  newValue: value
});
