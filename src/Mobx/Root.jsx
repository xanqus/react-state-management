// 해당 파일은 01번 예제와 동일합니다. 즉 , 설정할 부분이 없습니다.
// 물론 mobx-react 모듈에서 Provider를 통해 Contex API 예제 처럼
// 값을 전달할 수 있습니다. 하지만 본 글에서는 간단하게 store에 대해
// import를 통해 사용합니다.
import React from "react";
import Parent from "./components/Parent";
import "../App.css";

export default function Root() {
  return <Parent />;
}
