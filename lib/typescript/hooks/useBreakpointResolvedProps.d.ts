import type { ResponsiveValue } from '../components/types';
type IProps = {
    [key: string]: ResponsiveValue<number | string>;
};
type INewProps = {
    [key: string]: number | string;
};
export declare const useBreakpointResolvedProps: (props: IProps) => INewProps;
export {};
