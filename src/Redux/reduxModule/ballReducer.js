const CHANGE_OWNER = "BALL/CHAGNE/OWNER";
// 액션 type을 지정합니다. 해당 타입은 리듀서에서 체크를 합니다.

export const getActionChangeOwner = (owner) => ({
  type: CHANGE_OWNER,
  owner: owner,
});
// 액션 생성함수 입니다. type이라는 필드명으로 위에서 정의한 액션 type이 들어갑니다.
// 파라메터로 owner를 받아 owner에 설정되고 있습니다. 해당 액션 정보로 리듀서에서
// 값을 변경합니다. 해당 생성함수는 컴포넌트들 파일에서 사용하도록 export 해줍니다.

const initialState = {
  owner: "parent",
};
// redux의 초기값 설정입니다.

export default function ballReducer(state = initialState, action) {
  // 마지막으로 리듀서이며 해당 리듀서는 default로 export 해줍니다.
  // 파라메터로 state와 action이 있습니다.
  // state은 현재 store에 있는 값이 들어오며 action은 위에서 정의한 액션 생성함수에 의해
  // 만들어진 액션이 넘어옵니다.

  switch (action.type) {
    case CHANGE_OWNER:
      return {
        ...state,
        owner: action.owner,
      };
    default:
      return state;
  }
  // switch문으로 action의 type을 체크합니다. 해당 체크에 따라 return 되는 값이 다릅니다.
  // 여기서 return 되는 로직에 의해 store의 값이 변경됩니다.
}
