import React from "react";

const ConfirmationModal = ({
  active,
  triggerFnc,
  handleModalClose,
}: {
  active: boolean;
  triggerFnc: () => void;
  handleModalClose: (val: boolean) => void;
}) => {
  return (
    <>
      {active && (
        <>
          <div
            className="h-screen fixed flex-col justify-center items-center top-0 w-full z-20 py-10"
            style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
          >
            <div className="bg-white w-[300px] mx-auto py-4 px-4 rounded-xl font-inter flex-col items-center flex justify-center">
              <p>Are you sure you want to delete?</p>
              <div className="flex gap-4 mt-2">
                <p
                  onClick={() => {
                    handleModalClose(false);
                    triggerFnc();
                  }}
                  className="text-[green] cursor-pointer"
                >
                  Yes
                </p>
                <p
                  onClick={() => handleModalClose(false)}
                  className="text-[red] cursor-pointer"
                >
                  No
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ConfirmationModal;
