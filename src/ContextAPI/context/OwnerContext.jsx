import React, { createContext, useState } from "react";
// createContext 를 import 합니다. 이는 전역적으로 사용할 Context를 생성할 수
// 있도록 해줍니다.

const Context = createContext({
  owner: undefined,
  setOwner: undefined,
});
// Context라는 변수명으로 Context를 생성하였습니다.

export default function OwnerContext({ children }) {
  // Root.jsx 파일에서 Root 컴포넌트가 OwnerContext 컴포넌트 태그로 감싸져 있었습니다.
  // 해당 Root 컴포넌트는 children 이라는 필드명으로 값이 전달됩니다.

  const [owner, setOwner] = useState("parent");
  // useState을 통해  상태값 owner와 변환함수 setOwner를 설정합니다.
  // 해당 상태정보를 Context 에게 넘기게 됩니다/

  return (
    <Context.Provider value={{ owner: owner, setOwner: setOwner }}>
      {children}
    </Context.Provider>
    // Context.Provider 는 해당 내부에 있는 컴포넌트들에게 value를 전달합니다.
    // 이는 Provider 태그로 감싸져 있으며 children 넘어오는 전달 되는 Parent ,Left_Child ,Right_Child
    // 컴포넌트들에게 전달됩니다.
  );
}

export { Context };
// 해당 export는 다른 컴포넌트에서 Context 값에 접근하기 위해 export를 해줍니다.
