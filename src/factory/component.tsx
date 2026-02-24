import React, { useMemo } from 'react';
import { usePropsWithComponentTheme } from '../hooks/useThemeProps/usePropsWithComponentTheme';
import type { ComponentTheme } from '../theme';
import type { FactoryComponentProps } from './types';
import { makeStyledComponent } from '../utils/styled';

export default function Factory<P>(
  Component: React.ComponentType<P>,
  componentTheme?: ComponentTheme
) {
  const Forwarded = React.forwardRef(function FactoryForwardRef(
    props: any,
    ref: any
  ): React.ReactElement {
    const { children, _state, ...rest } = props;
    const StyledComponent = useMemo(() => makeStyledComponent(Component), []);
    const calculatedProps = usePropsWithComponentTheme(
      componentTheme ?? {},
      rest,
      _state
    );
    return (
      <StyledComponent {...(calculatedProps as P)} ref={ref}>
        {children}
      </StyledComponent>
    );
  });
  return Forwarded as React.ForwardRefExoticComponent<
    React.PropsWithoutRef<P & FactoryComponentProps> & React.RefAttributes<any>
  >;
}
