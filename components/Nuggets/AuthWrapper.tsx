import React from 'react'


type AuthWrapperProps = {
    children:JSX.Element
}
function AuthWrapper({children}:AuthWrapperProps) {
  return (
    <div className="bg-white w-[90%]  lg:w-[600px] mx-auto relative px-4 lg:px-12 pt-12">
      {children}
    </div>
  );
}

export default AuthWrapper