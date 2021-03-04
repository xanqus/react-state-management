import React from "react";
import { connect } from "react-redux";
import * as ballReducer from "../reduxModule/ballReducer";
// Parent 컴포넌트와 동일하게 ballReducer와 connect 모듈을 import 합니다.

function RightChild({ owner, changeOwner }) {
  // Parent 컴포넌트와 동일하게 owner에는 구독중인 상태값이 넘어오며
  // changeOwner에는 dispatch를 할 수 있는 메서드가 넘어옵니다.

  const onClickChildToParent = () => {
    if (owner === "right") changeOwner("parent");
  };

  const onClickLeftToRight = () => {
    if (owner === "right") changeOwner("left");
  };

  return (
    <div className={"child"}>
      <button onClick={onClickChildToParent} className={"btn-to-parent"}>
        Pass to Parent
      </button>
      {/*// store에 구독중인 owner의 값을 통해 visibility 를 제어합니다.*/}
      <br />
      Right Child
      <br />
      <div
        className={"ball"}
        style={{ visibility: owner === "right" ? "unset" : "hidden" }}
      >
        ball
      </div>
      <button onClick={onClickLeftToRight} className={"btn-right-to-left"}>
        Pass to Left
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  changeOwner: (owner) => {
    dispatch(ballReducer.getActionChangeOwner(owner));
  },
});
// Parent와 동일하게 dispatch의 Mapping 정보를 정의합니다.

const mapStateToProps = (state) => {
  return {
    owner: state.ballReducer.owner,
  };
};
// Parent와 동일하게 구독 정보를 설정합니다.

export default connect(mapStateToProps, mapDispatchToProps)(RightChild);
// Parent와 동일하게 store와 연결합니다.
