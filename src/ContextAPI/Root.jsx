import React from "react";
import Parent from "./components/Parent";
import OwnerContext from "./context/OwnerContext";
// OwnerContext 컴포넌트를 import합니다. 해당 컴포넌트에서 전역으로
// 사용하는 상태값을 갖고 있습니다.

import "../App.css";

export default function Root() {
  return (
    <OwnerContext>
      <Parent />
    </OwnerContext>
    // 위의 01번 예제와는 다르게 OwnerContext 컴포넌트 태그로 Parent 컴포넌트가
    // 감싸져 있습니다. 이는 OwnerContext의 props 중에 children 이라는 프로퍼티로
    // Parent 컴포넌트가 전달됩니다.
  );
}
