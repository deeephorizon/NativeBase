import React from 'react';
export type IDrawerProps = {
    placement?: 'top' | 'left' | 'right' | 'bottom';
    children?: any;
    isOpen: boolean;
    onClose?: () => void;
};
declare const Drawer: ({ children, isOpen, onClose, placement, }: IDrawerProps) => React.JSX.Element | null;
export default Drawer;
