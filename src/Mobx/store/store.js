import { observable } from "mobx";
// mobx 모듈에서 observable 모듈을 import 합니다.
// observable 모듈은 관리할 상태에 대해 정의할 수 있게
// 도와줍니다.

export default observable({
  owner: "parent",
  setOwner(owner) {
    this.owner = owner;
    // redux에서는 디스패치로 액션을 넘겨 상태를 변화시켰지만
    // mobx에서는 "=" 키워드를 통해 값을 변경하면 자동으로
    // 해당 상태에 대한 Action이 발생합니다.
  },
});
// observable 모듈을 통해 owner와 setOwner에 대해 정의를 했습니다.
// 하지만 실제로 관리가 되는 상태는 owner이며 setOwner는 단순히
// owner를 변경하기 위한 메서드입니다.
