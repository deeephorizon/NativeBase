import React from 'react';
import type { InterfaceInputProps } from '../Input/types';
import type { PlatformProps } from '../../../components/types';
export interface ITextAreaProps extends Omit<InterfaceInputProps, '_web' | '_android' | '_ios' | '_light' | '_dark' | '_important'>, PlatformProps<ITextAreaProps> {
    /**
     * Maps to react-native TextInput's numberOfLines.
     */
    totalLines?: number;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<ITextAreaProps, "ref"> & React.RefAttributes<unknown>>>;
export default _default;
