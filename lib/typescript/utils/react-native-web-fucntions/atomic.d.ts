type Value = Object | Array<any> | string | number;
type Style = {
    [key: string]: Value;
};
type Rule = string;
type Rules = Array<Rule>;
type RulesData = [Rules, number];
type CompiledStyle = {
    $$css: boolean;
    $$css$localize?: boolean;
    [key: string]: string | Array<string>;
};
type CompilerOutput = [CompiledStyle, Array<RulesData>];
export declare function atomic(style: Style): CompilerOutput;
/**
 * Create a value string that normalizes different input values with a common
 * output.
 */
export declare function stringifyValueWithProperty(value: Value, property?: string): string;
export {};
