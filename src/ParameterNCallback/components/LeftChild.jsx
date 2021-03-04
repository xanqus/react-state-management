import React from "react";
// 리액트 모듈을 불러옵니다.

export default function LeftChild({ owner, setOwner }) {
  // 부모로부터 props를 전달받습니다. props는 부모에게 받는 값을 의미합니다.
  // 현재 owner와 setOwner를 받았습니다. owner를 통해 현재 공의 주인을 알 수 있으며
  // 만약 해당 컴포넌트가 공을 갖고 있는 상태에서 다른 컴포넌트에게 공을 줄 경우
  // Call Back 함수인 setOwner를 호출하여 부모의 owner상태를 변경할 수 있습니다.

  const onClickChildToParent = () => {
    // 공을 왼쪽 자식 컴포넌트가 갖고 있다면 공의 주인을 부모 컴포넌트로 변경
    if (owner === "left") setOwner("parent");
  };

  const onClickRightToLeft = () => {
    // 공을 왼쪽 자식 컴포넌트가 갖고 있다면 공의 주인을 오른쪽 자식 컴포넌트로 변경
    if (owner === "left") setOwner("right");
  };

  return (
    <div className={"child"}>
      <button onClick={onClickChildToParent} className={"btn-to-parent"}>
        Pass to Parent
      </button>
      {/*// 왼쪽 자식 컴포넌트에서 부모 컴포넌트로 공을 전달하는 버튼입니다. //
      onClick으로 onClickChildToParent를 호출하며 해당 메서드는 부모로 부터 받은
      상태변환 함수인 // setOwner 메서드를 내부적으로 호출하고 있습니다.*/}
      <br />
      Left Child
      <br />
      <div
        className={"ball"}
        style={{ visibility: owner === "left" ? "unset" : "hidden" }}
      >
        ball
      </div>
      {/*// owner 값을 통해 ball 모양인 div의 visibility 속성을 제어합니다.*/}
      <button onClick={onClickRightToLeft} className={"btn-left-to-right"}>
        Pass to Right
      </button>
      {/*// 왼쪽 자식 컴포넌트에서 오른쪽 자식 컴포넌트로 공을 전달하는 버튼입니다.
      // onClick으로 onClickChildToParent를 호출하며 해당 메서드는 부모로 부터
      받은 상태변환 함수인 // setOwner 메서드를 내부적으로 호출하고 있습니다.*/}
    </div>
  );
}
