import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [
  {
    msg: 'Passwords do not matcheroioiel',
    alertType: 'danger',
    id: '7c3efa34-bba3-4c3e-9f45-633ea994b17c',
  },
];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
