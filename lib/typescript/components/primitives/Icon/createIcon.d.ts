import React from 'react';
import type { IcreateIconProps } from './types';
export declare const createIcon: ({ path, d, ...initialProps }: IcreateIconProps) => React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>>;
