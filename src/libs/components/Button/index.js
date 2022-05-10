import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@mui/material';
import StyledButton from './styles';

function Button({
  anchor,
  children,
  disabled,
  filltype,
  loading,
  loadingText,
  severity,
  size,
  type,
  variant,
  ...rest
}) {
  const handleContent = () => {
    const handleProgressSize = () => {
      switch (size) {
        case 'small':
          return 12;

        case 'medium':
          return 16;

        case 'large':
          return 18;
        case 'xlarge':
          return 20;

        default:
          return 16;
      }
    };

    const handleProgressColor = () => {
      if (filltype === 'outlined') {
        return severity || variant;
      }

      return disabled || loading ? 'disabledContent' : 'fillContrast';
    };

    return loading ? (
      <>
        <CircularProgress
          style={{ marginRight: 10, marginLeft: '-3px' }}
          size={handleProgressSize()}
          color={handleProgressColor()}
        />
        {loadingText}
      </>
    ) : (
      children
    );
  };

  return (
    <StyledButton
      anchor={anchor}
      disabled={disabled || loading}
      filltype={filltype}
      $loading={loading}
      severity={severity}
      size={size}
      type={type}
      variant={variant}
      {...rest}
    >
      {handleContent()}
    </StyledButton>
  );
}

Button.defaultProps = {
  anchor: {},
  disabled: false,
  loading: false,
  loadingText: 'Aguarde',
  filltype: 'filled',
  severity: null,
  size: 'medium',
  variant: 'primary',
  type: 'static',
};

Button.propTypes = {
  anchor: PropTypes.object,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  loadingText: PropTypes.string,

  filltype: PropTypes.oneOf(['outlined', 'filled']),
  severity: PropTypes.oneOf(['error', 'success', 'warn', 'info']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  type: PropTypes.oneOf(['floating', 'static']),
};

export default Button;
