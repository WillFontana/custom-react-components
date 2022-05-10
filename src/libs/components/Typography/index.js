import PropTypes from 'prop-types';
import React from 'react';
import StyledTypography from './styles';

function Typography({
  children,
  color,
  component,
  size,
  variant,
  weight,
  ...rest
}) {
  return (
    <StyledTypography
      color={color}
      component={component}
      size={size}
      variant={variant}
      weight={weight}
      {...rest}
    >
      {children}
    </StyledTypography>
  );
}

Typography.defaultProps = {
  color: 'text',
  component: 'p',
  size: 'body2',
  weight: 'normal',
  variant: 'p',
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'text',
    'light',
    'title',
    'warning',
    'error',
    'success',
    'info',
    'negative',
  ]),
  component: PropTypes.string,
  size: PropTypes.oneOf([
    'caption',
    'body1',
    'body2',
    'subheading',
    'headline',
    'title',
    'head',
  ]),
  variant: PropTypes.string,
  weight: PropTypes.oneOf(['xlight', 'light', 'normal', 'bold', 'xbold']),
};

export default Typography;
