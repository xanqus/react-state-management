import React from "react";
import Parent from "./components/Parent";
import { createStore } from "redux";
import reduxModule from "./reduxModule";
// 파일구조에서 "reduxModule"라는 폴더가 있었습니다.
// 해당 폴더로 import를 하면 기본적으로 index 파일을 import 합니다.
import { Provider } from "react-redux";
// react-redux의 Provider를 통해 redux의 값이 전달됩니다.
import "../App.css";

const store = createStore(reduxModule);
// 위에서 설명하였듯이 "reduxModule" 폴더를 import 하였기에 index 파일이
// createStore의 파라메터로 전달됩니다. 해당 파일에는 Reducer가 있습니다.
// Reducer의 정보를 바탕으로 store를 생성합니다.

export default function Root() {
  return (
    <Provider store={store}>
      {/*// react-redux 모듈에 있는 Provider입니다. // 해당 Provider에 전역으로
      사용할 store를 지정합니다.*/}
      <Parent />
    </Provider>
  );
}
