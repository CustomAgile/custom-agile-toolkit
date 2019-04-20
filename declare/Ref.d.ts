/**
 * A basic class for managing refs
 */
export declare class Ref {
    /**
     * Returns true if this item is a ref
     * @param {any} input
     */
    static isRef(input: any): boolean;
    /**
     * Returns the relative slice of a ref
     * turning `'https://rally1...words.../slm/defect/1234' => '/defect/1234'`
     * @param {any} input possible ref
     */
    static getRelative(input: any): string;
    /**
     * Gets the type from a ref. `'/defect/2345' => 'defect'`
     * @param {*} input
     */
    static getType(input: any): string;
    /**
     * returns the id portion of a ref
     * `/defect/1234 => '1234'`
     * @param {*} input
     */
    static getId(input: any): string;
}
