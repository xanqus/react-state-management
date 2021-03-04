import React from "react";
import LeftChild from "./LeftChild";
import RightChild from "./RightChild";
import { connect } from "react-redux";
// react와 redux를 연결해주는 connect 모듈을 import 합니다.
import * as ballReducer from "../reduxModule/ballReducer";
// "reduxModule" 폴더 아래에 ballReducer.jsx 파일의 export된 모든 요소를 import 합니다.
// ballReducer.xxxx 처럼 해당 요소에 접근할 수 있습니다.

function Parent({ owner, changeOwner }) {
  // 파라메터 값으로 owner와 changeOwner가 넘어오고 있습니다. 해당 부분의 넘어오는 값에 대한
  // 설정은 밑에  mapStateToProps, mapDispatchToProps 함수로 정의되어 있습니다.
  // owner는 store로 부터 subscribe(구독)하여 넘어오는 상태값입니다.
  // changeOwner는 해당 상태를 변경할 dispatch가 넘어옵니다.

  const onClickParentToLeft = () => {
    // 공을 parent가 갖고 있다면 changeOwner 함수를 호출하여 owner 상태를
    // left로 변환합니다. 밑에 mapDispatchToProps 설정을 보시면 아시겠지만
    // changeOwner 함수는 내부적으로 dispatch 함수를 호출합니다.
    if (owner === "parent") changeOwner("left");
  };

  const onClickParentToRight = () => {
    // 공을 parent가 갖고 있다면 changeOwner 함수를 호출하여 owner 상태를
    // left로 변환합니다. 밑에 mapDispatchToProps 설정을 보시면 아시겠지만
    // changeOwner 함수는 내부적으로 dispatch 함수를 호출합니다.
    if (owner === "parent") changeOwner("right");
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
              att={owner}
              style={{ visibility: owner === "parent" ? "unset" : "hidden" }}
            >
              ball
            </div>
            {/*// store에 구독중인 owner의 값을 통해 visibility 를 제어합니다.*/}
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
            {/*// store에서 상태를 관리하므로 props로 내려줄 필요가 없습니다.*/}
          </td>
          <td className={"right-table"}>
            <RightChild />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

const mapDispatchToProps = (dispatch) => ({
  changeOwner: (owner) => {
    dispatch(ballReducer.getActionChangeOwner(owner));
  },
});
// dispatch를 개발자가 원하는 로직별로 Mapping하는 설정부분입니다.
// 파라메터로 dispatch가 넘어옵니다. 해당 부분에 수행하고자 하는 action을 넘기면
// reducer에서 해당 action을 판단하여 store의 상태를 업데이트 합니다.
// 해당 메서드는 아래에 connect 함수의 파라메터로 들어갑니다.
// 여기서 정의된 changeOwner가 위의 컴포넌트 파라메터로 다시 들어가게 됩니다.

const mapStateToProps = (state) => {
  return {
    owner: state.ballReducer.owner,
  };
};
// subscribe(구독) 을 통해 받을 값을 정의합니다.
// state 파라메터를 통해 넘어온 값을 onwer에 값을 다시 셋팅합니다.
// 셋팅한 onwer는 위에서 props로 받고 있는 owner로 값이 들어오게 됩니다.
// 위의 state.ballReducer.owner는 state.[combinreducer를 한 reducer].[설정한 상태값] 입니다.

export default connect(mapStateToProps, mapDispatchToProps)(Parent);
// 구독 및 디스패치 함수의 셋팅과 parent 컴포넌트의 설정을 통해 store와 연결됩니다.
