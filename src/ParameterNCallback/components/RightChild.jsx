import React from "react";

export default function RightChild({ owner, setOwner }) {
  // Left_Child 컴포넌트 설명과 동일합니다.

  const onClickChildToParent = () => {
    // 공을 오른쪽 자식 컴포넌트가 갖고 있다면 공의 주인을 부모 컴포넌트로 변경
    if (owner === "right") setOwner("parent");
  };

  const onClickRightToLeft = () => {
    // 공을 오른쪽 자식 컴포넌트가 갖고 있다면 공의 주인을 왼쪽 자식 컴포넌트로 변경
    if (owner === "right") setOwner("left");
  };

  return (
    <div className={"child"}>
      <button onClick={onClickChildToParent} className={"btn-to-parent"}>
        Pass to Parent
      </button>
      {/*// 오른쪽 자식 컴포넌트에서 부모 컴포넌트로 공을 전달하는 버튼입니다. //
      onClick으로 onClickChildToParent를 호출하며 해당 메서드는 부모로 부터 받은
      상태변환 함수인 // setOwner 메서드를 내부적으로 호출하고 있습니다.*/}
      <br />
      Left Child
      <br />
      <div
        className={"ball"}
        style={{ visibility: owner === "right" ? "unset" : "hidden" }}
      >
        ball
      </div>
      {/*// owner 값을 통해 ball 모양인 div의 visibility 속성을 제어합니다.*/}
      <button onClick={onClickRightToLeft} className={"btn-right-to-left"}>
        Pass to Left
      </button>
      {/*// 오른쪽 자식 컴포넌트에서 왼쪽 자식 컴포넌트로 공을 전달하는 버튼입니다.
      // onClick으로 onClickChildToParent를 호출하며 해당 메서드는 부모로 부터
      받은 상태변환 함수인 // setOwner 메서드를 내부적으로 호출하고 있습니다.*/}
    </div>
  );
}
