import React from 'react';
type ResponsiveQueryContextType = {
    disableCSSMediaQueries?: boolean;
};
export declare const ResponsiveQueryContext: React.Context<ResponsiveQueryContextType>;
export declare const ResponsiveQueryProvider: (props: ResponsiveQueryContextType & {
    children: React.ReactNode;
}) => React.JSX.Element;
export {};
