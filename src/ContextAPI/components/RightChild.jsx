import React, { useContext } from "react";
import { Context } from "../context/OwnerContext";
// Left_Child 컴포넌트 내에서 Context 를 사용하기 위해
// Parent 컴포넌트와 동일하게 useContext와 Context를 import 합니다.

export default function RightChild({ owner = null }) {
  const context = useContext(Context);
  // 전역 Context를 활용하기 위해 Parent와 동일하게 설정합니다.

  const onClickChildToParent = () => {
    // Parent 컴포넌트와 동일하게 "context" 변수명으로 Context에 접근하여
    // value로 설정된 값들에게 접근합니다.
    if (context.owner === "right") context.setOwner("parent");
  };

  const onClickRightToLeft = () => {
    // Parent 컴포넌트와 동일하게 "context" 변수명으로 Context에 접근하여
    // value로 설정된 값들에게 접근합니다.
    if (context.owner === "right") context.setOwner("left");
  };

  return (
    <div className={"child"}>
      <button onClick={onClickChildToParent} className={"btn-to-parent"}>
        Pass to Parent
      </button>
      <br />
      Left Child
      <br />
      <div
        className={"ball"}
        style={{ visibility: context.owner === "right" ? "unset" : "hidden" }}
      >
        ball
      </div>
      {/*// Context API인 context의 owner 값을 비교하여 visibility 속성을 정합니다.*/}
      <button onClick={onClickRightToLeft} className={"btn-left-to-right"}>
        Pass to Left
      </button>
    </div>
  );
}
