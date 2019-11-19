import React from "react";

export default function ButtonPanel(props) {
  const { currentStep, steps, onNextButtonClick, onPreviousButtonClick, onResetButtonClick } = props;
  return (
    <div className="text-center mt-3">
      {
        currentStep !== steps.length ?
          (
            <>
              {
                currentStep !== 1 &&
                <button type="button"
                  className="btn btn-light"
                  onClick={onPreviousButtonClick}
                >
                  Previous
                </button>
              }

              <button type="button"
                className="btn btn-secondary"
                onClick={onNextButtonClick}
              >
                Next
              </button>
            </>
          ) :
          (
            <button type="button"
              className="btn btn-secondary"
              onClick={onResetButtonClick}
            >
              Reset
            </button>
          )
      }
    </div>
  );
}
