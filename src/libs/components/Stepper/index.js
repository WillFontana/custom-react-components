import React from 'react';
import PropTypes from 'prop-types';

import StyledStepper, {
  StyledStep,
  StyledStepLabel,
  StyledStepperContainer,
} from './styles';

function Stepper({ steps, activeStep, filledColor }) {
  return (
    <StyledStepperContainer>
      <StyledStepper
        filledColor={filledColor}
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map(({ label }) => (
          <StyledStep key={label}>
            <StyledStepLabel>{label}</StyledStepLabel>
          </StyledStep>
        ))}
      </StyledStepper>
      {steps[activeStep].content}
    </StyledStepperContainer>
  );
}

Stepper.propTypes = {
  steps: PropTypes.array.isRequired,
  activeStep: PropTypes.number.isRequired,
  filledColor: PropTypes.string,
};

Stepper.defaultProps = {
  filledColor: null,
};

export default Stepper;
