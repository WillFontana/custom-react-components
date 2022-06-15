import Step from '@mui/material/Step';
import styled from 'styled-components';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

export const StyledStepperContainer = styled.div``;
export const StyledStep = styled(Step)``;
export const StyledStepLabel = styled(StepLabel)``;
export const StyledStepContent = styled(StepContent)``;

const StyledStepper = styled(Stepper)`
  ${({ filledColor }) =>
    filledColor &&
    `
    .MuiStepIcon-root.Mui-active, .MuiStepIcon-root.Mui-completed {
      color: ${filledColor}
    }
  `}
`;

export default StyledStepper;
