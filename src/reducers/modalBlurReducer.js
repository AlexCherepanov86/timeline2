
const initialState = {
  visible: false
};

export default function modalBlur(state = initialState, action) {
  switch (action.type) {
    case 'MODAL_BLUR_ON': {
        return {
          visible: true
        }
    }
    case 'MODAL_BLUR_OFF': {
        return {
          visible: false
        }
    }
    case 'MODAL_BLUR_TOGGLE': {
        return {
          visible: !state.visible
        }
    }
  }

  return state
}

//export userReducer;
