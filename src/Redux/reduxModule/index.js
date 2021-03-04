import { combineReducers } from "redux";
// redux 모듈에 combineReducers를 import 합니다.
// 프로젝트 규모가 커지며 많은 리듀서를 제작하게 됩니다.
// 이때 combineReducers는 다수의 Reducer는 하나로
// 묶어주는 역할을 합니다.
import ballReducer from "./ballReducer";
// 리듀서를 import 합니다.

export default combineReducers({
  ballReducer,
});
// 여러개의 Reducer는 등록할 경우에 구분자 "," 를 통해
// 다수의 Reducer를 등록하면 됩니다.
