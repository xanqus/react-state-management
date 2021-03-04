import React from "react";
import Store from "../store/store";
// owner라는 상태를 갖고 있는 store 모듈을 import 합니다.
import { useObserver } from "mobx-react";
// Parent 컴포넌트와 마찬가지로 store와 이어주는 모듈을 import 합니다.

export default function RightChild() {
  const onClickChildToParent = () => {
    if (Store.owner == "right") Store.setOwner("parent");
    // Parent 모듈과 다르게 store에 있는 setOwner를 호출해서 사용합니다.
    // setOwner 메서드에는 "this.owner = XXX" 라는 로직이 있으므로 자동으로
    // Action을 합니다.
  };

  const onClickRightToLeft = () => {
    if (Store.owner == "right") Store.setOwner("left");
  };

  return (
    // return에서 useObserver 모듈을 사용하여 mobx의 store에 있는 상태값이 변경되면 rendering을 도와줍니다.
    useObserver(() => (
      <div className={"child"}>
        <button onClick={onClickChildToParent} className={"btn-to-parent"}>
          Pass to Parent
        </button>
        <br />
        Left Child
        <br />
        <div
          className={"ball"}
          style={{ visibility: Store.owner == "right" ? "unset" : "hidden" }}
        >
          ball
        </div>
        <button onClick={onClickRightToLeft} className={"btn-right-to-left"}>
          Pass to Right
        </button>
      </div>
    ))
  );
}
