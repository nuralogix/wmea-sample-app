import React from 'react';
import { ColorBox } from '@nuralogix.ai/web-ui';
import * as stylex from '@stylexjs/stylex';

interface ValueBadgeProps {
  value: string;
  fillColor: string;
}

const styles = stylex.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
});

const ValueBadge: React.FC<ValueBadgeProps> = ({ value, fillColor }) => (
  <span {...stylex.props(styles.wrapper)}>
    <ColorBox width="80px" height="40px" fillColor={fillColor}>
      {value}
    </ColorBox>
  </span>
);

export default ValueBadge;
