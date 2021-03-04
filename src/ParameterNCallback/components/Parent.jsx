import React, { useState } from "react";
import LeftChild from "./LeftChild";
import RightChild from "./RightChild";
// React 관련 모듈과 Left_Child , Right_Child 컴포넌트를 불러옵니다.

export default function Parent() {
  const [owner, setOwner] = useState("parent");
  // useState 함수는 react hooks에서 state를 설정하는 함수입니다.
  // useState의 파라메터는 초기값을 의미합니다.
  // const [owner , setOwner] 에서 첫번째 owner는 상태명 , setOwner는 상태변환 함수명입니다.

  const onClickParentToLeft = () => {
    // 공을 부모 컴포넌트가 갖고 있다면 공의 주인을 left 컴포넌트로 변경
    if (owner === "parent") setOwner("left");
  };

  const onClickParentToRight = () => {
    // 공을 부모 컴포넌트가 갖고 있다면 공의 주인을 right 컴포넌트로 변경
    if (owner === "parent") setOwner("right");
  };

  return (
    <table className={"parent-table"}>
      <tbody>
        <tr>
          <td colSpan={2}>
            Parent
            <br />
            <div
              className={"ball"}
              style={{ visibility: owner === "parent" ? "unset" : "hidden" }}
            >
              ball
            </div>
            {/*// owner 값을 통해 ball 모양인 div의 visibility 속성을 제어합니다.*/}
            <br />
            <button
              onClick={onClickParentToLeft}
              className={"btn-parent-to-left"}
            >
              Pass to Left_Child
            </button>
            {/*// 부모 컴포넌트에서 Left_Child 컴포넌트로 공을 전달하는 버튼입니다.*/}
            <button
              onClick={onClickParentToRight}
              className={"btn-parent-to-right"}
            >
              Pass to Right_Child
            </button>
            {/*// 부모 컴포넌트에서 Right_Child 자식 컴포넌트로 공을 전달하는
            버튼입니다.*/}
          </td>
        </tr>
        <tr>
          <td className={"left-table"}>
            <LeftChild owner={owner} setOwner={setOwner} />
            {/*// Left_Child 컴포넌트에 owner 상태와 상태변화 함수인 setOwner를
            넘깁니다. // setOwner 함수를 통해 owner의 값이 변경되면 다시
            렌더링이 됩니다.*/}
          </td>
          <td className={"right-table"}>
            <RightChild owner={owner} setOwner={setOwner} />
            {/*// Left_Child 컴포넌트에 owner 상태와 상태변화 함수인 setOwner를
            넘깁니다. // setOwner 함수를 통해 owner의 값이 변경되면 다시
            렌더링이 됩니다.*/}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
