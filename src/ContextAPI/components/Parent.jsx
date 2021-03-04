import React, { useContext } from "react";
import LeftChild from "./LeftChild";
import RightChild from "./RightChild";
import { Context } from "../context/OwnerContext";
// 나머지는 01번 예제와 같습니다. 다만 OwnerContext.jsx에서 마지막에
// export를 해준 Context를 불러와 줍니다. 해당 Context는 react의
// useContext를 이용하여 사용할 수 있습니다.

export default function Parent() {
  const context = useContext(Context);
  // react의 useContext를 사용하여 "context"라는 변수명에 Context를 설정합니다.
  // 이제 Parent 컴포넌트 내에서 "context"라는 변수명으로 Context를에 접근할 수 있습니다.

  const onClickParentToLeft = () => {
    // Provider의 value로 전달한 owner 값을 비교를 합니다.
    if (context.owner === "parent") context.setOwner("left");
    // owner를 변경할 경우 같이 넘긴 setOwner 메서드를 활용합니다.
    // 해당 메서드를 통해 OwnerContext에서 Context.Provider에게 넘겨준
    // owner 를 변경할 수 있습니디.
  };

  const onClickParentToRight = () => {
    // Provider의 value로 전달한 owner 값을 비교를 합니다.
    if (context.owner === "parent") context.setOwner("right");
    // owner를 변경할 경우 같이 넘긴 setOwner 메서드를 활용합니다.
    // 해당 메서드를 통해 OwnerContext에서 Context.Provider에게 넘겨준
    // owner 를 변경할 수 있습니디.
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
              style={{
                visibility: context.owner === "parent" ? "unset" : "hidden",
              }}
            >
              ball
            </div>
            {/*// Context API인 context의 owner 값을 비교하여 visibility 속성을
            정합니다.*/}
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
            {/*// 위의 01번 예제에서는 props를 전달하였지만 Context API를 활용하면
            해당 props 전달 코드를 // 사용하지 않고 전역적으로 상태를 관리할 수
            있습니다. 즉, 현재 컴포넌트인 Parent 컴포넌트와 // 동일하게
            Context와 react의 useContext를 사용하여 각 컴포넌트에서 해당
            Context를 사용할 // 수 있습니다.*/}
          </td>
          <td className={"right-table"}>
            <RightChild />
            {/*// 위의 Left_Child 컴포넌트와 내용이 동일합니다.*/}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
