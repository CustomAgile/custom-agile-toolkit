import _ = require('lodash');
/**
 @module Ref

 */

//                              oid |  -oid  |                                   uuid                                    |  uuid compact
const IDENTITY_REGEX_PARTIAL = '[0-9]+|-?[0-9]+|[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}|[a-fA-F0-9]{32}';

const IDENTITY_REGEX = `(${IDENTITY_REGEX_PARTIAL})`;

const NON_CAP_IDENTITY_REGEX = `(?:${IDENTITY_REGEX_PARTIAL})`;

const TYPE_REGEX = '(\\w+)';

const DYNATYPE_REGEX = '(\\w{2,}\\/\\w+)';

const EXT_REGEX = '(?:\\.js\\??.*)';

const REF_REGEXES = [

  // dynatype collection ref (/portfolioitem/feature/1234/children)
  new RegExp(`.*?\\/${DYNATYPE_REGEX}\\/${IDENTITY_REGEX}\\/${TYPE_REGEX}${EXT_REGEX}?$`),

  // dynatype ref (/portfolioitem/feature/1234)
  new RegExp(`.*?\\/${DYNATYPE_REGEX}\\/${IDENTITY_REGEX}${EXT_REGEX}?$`),

  // collection ref (/defect/1234/tasks)
  new RegExp(`.*?\\/${TYPE_REGEX}\\/${IDENTITY_REGEX}\\/${TYPE_REGEX}${EXT_REGEX}?$`),

  // basic ref (/defect/1234)
  new RegExp(`.*?\\/${TYPE_REGEX}\\/${IDENTITY_REGEX}${EXT_REGEX}?$`),

  // permission ref (/workspacepermission/123u456w1)
  new RegExp(`.*?\\/${TYPE_REGEX}\\/(${NON_CAP_IDENTITY_REGEX}u${NON_CAP_IDENTITY_REGEX}[pw]${NON_CAP_IDENTITY_REGEX})${EXT_REGEX}?$`)
];

function match(input) {
  input = (input && input._ref) ? input._ref : (input || '');
  const regexMatch = _.find(REF_REGEXES, regex => regex.test(input));
  return (regexMatch && input.match(regexMatch)) || null;
}

/**
 * A basic class for managing refs
 */
export class Ref {
  /**
   * Returns true if this item is a ref
   * @param {any} input 
   */
  static isRef(input: any): boolean {
    return Boolean(match(input));
  }

  /**
   * Returns the relative slice of a ref
   * turning `'https://rally1...words.../slm/defect/1234' => '/defect/1234'`
   * @param {any} input possible ref
   */
  static getRelative(input: any): string {
    const refMatch = match(input);
    return (refMatch && [''].concat(refMatch.slice(1)).join('/')) || null;
  }

  /**
   * Gets the type from a ref. `'/defect/2345' => 'defect'`
   * @param {*} input 
   */
  static getType(input: any): string {
    const refMatch = match(input);
    return (refMatch && refMatch[1]) || null;
  }

  /**
   * returns the id portion of a ref
   * `/defect/1234 => '1234'`
   * @param {*} input 
   */
  static getId(input: any): string {
    const refMatch = match(input);
    return (refMatch && refMatch[2]) || null;
  }
}

