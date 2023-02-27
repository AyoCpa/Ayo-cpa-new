import React from 'react'


type AuthWrapperProps = {
    children:JSX.Element
}
function AuthWrapper({children}:AuthWrapperProps) {
  return (
    <div className="bg-[#EFEFEF]  w-4/5 lg:w-[600px] mx-auto relative px-12 pt-12">
      {children}
    </div>
  );
}

export default AuthWrapper