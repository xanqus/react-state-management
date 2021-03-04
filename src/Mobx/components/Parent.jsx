import React from "react";
import LeftChild from "./LeftChild";
import RightChild from "./RightChild";
import Store from "../store/store";
// owner라는 상태를 갖고 있는 store 모듈을 import 합니다.
import { useObserver } from "mobx-react";
// mobx와 react를 이어주는 모듈입니다.
// store에서 observable로 설정했던 상태들을 useObserver와 연결해주면
// 해당 값이 변경시 react 에도 반영이 됩니다.

export default function Parent() {
  const onClickParentToLeft = () => {
    // 현재 store에 owner 가 parent이면 left로 변경하라는 로직입니다.
    if (Store.owner == "parent") Store.owner = "left";
    // "=" 키워드를 통해 값을 직접 변경하여도 알아서 Action이 발생하여 값을 변경합니다.
    // 이는 아까 store에서 정의한 setOwner('left')를 사용하여도 됩니다.
  };

  const onClickParentToRight = () => {
    if (Store.owner == "parent") Store.owner = "right";
  };

  return (
    // return에서 useObserver 모듈을 사용하여 mobx의 store에 있는 상태값이 변경되면 rendering을 도와줍니다.
    useObserver(() => (
      <table className={"parent-table"}>
        <tbody>
          <tr>
            <td colSpan={2}>
              Parent
              <br />
              <div
                className={"ball"}
                style={{
                  visibility: Store.owner == "parent" ? "unset" : "hidden",
                }}
              >
                ball
              </div>
              {/*// store에 있는 owner 값을 통해 visibility 속성을 제어합니다.*/}
              <br />
              <button
                onClick={onClickParentToLeft}
                className={"btn-parent-to-left"}
              >
                Pass to Left_Child
              </button>
              <button
                onClick={onClickParentToRight}
                className={"btn-parent-to-right"}
              >
                Pass to Right_Child
              </button>
            </td>
          </tr>
          <tr>
            <td className={"left-table"}>
              <LeftChild />
            </td>
            <td className={"right-table"}>
              <RightChild />
            </td>
          </tr>
        </tbody>
      </table>
    ))
  );
}
