import RallyClient = require('./Client');

export interface ClientOptions {
  server?: string,
  project?: undefined,
  workspace?: undefined
}

export interface QueryOptions {
  fetch?: string[] | boolean,
  query?: string,
  start?: number,
  pagesize?: number,
  projectScopeUp?: boolean,
  projectScopeDown?: boolean,
  compact?: boolean,
  includePermissions?: boolean,
  project?: string,
  workspace?: string,
  order?: string,
  [key: string]: any
}

export interface RallyObject {
  _ref: string,
  _refObjectName: string,
  _type: string,
  _rallyAPIMajor?: number,
  _rallyAPIMinor?: number,
  _CreatedAt?: string,
  [x: string]: any
}

export interface QueryResponse extends Array<RallyObject> {
  $params: any,
  $hasMore: boolean,
  /** returns all the data from the later pages including this page */
  $getAll: () => Promise<QueryResponse>
  /** returns the data from the next page */
  $getNextPage: () => Promise<QueryResponse>
}

export namespace Lookback {

  export interface Request {
    find: any;
    fields?: string[] | boolean;
    hydrate?: string[];
    start?: number;
    pagesize?: number;
    removeUnauthorizedSnapshots?: boolean;
  }

  export interface Response {
    $params: any,
    $hasMore: boolean,
    $rawResponse: RawResponse,
    /** returns all the data from the later pages including this page */
    $getAll: () => Promise<Lookback.Response>
    /** returns the data from the next page */
    $getNextPage: () => Promise<Lookback.Response>
  }

  export interface RawResponse {
    _rallyAPIMajor: string;
    _rallyAPIMinor: string;
    Errors: any[];
    Warnings: string[];
    GeneratedQuery: GeneratedQuery;
    TotalResultCount: number;
    HasMore: boolean;
    StartIndex: number;
    PageSize: number;
    ETLDate: string;
    ThreadStats: ThreadStats;
    Timings: Timings;
  }

  export interface Timings {
    preProcess: number;
    findEtlDate: number;
    allowedValuesDisambiguation: number;
    mongoQuery: number;
    authorization: number;
    suppressNonRequested: number;
    compressSnapshots: number;
    allowedValuesHydration: number;
    TOTAL: number;
  }

  export interface ThreadStats {
    cpuTime: string;
    waitTime: string;
    waitCount: string;
    blockedTime: string;
    blockedCount: string;
  }

  export interface GeneratedQuery {
    find: Find;
    limit: number;
    skip: number;
    fields: boolean;
  }

  export interface Find {
    ObjectID: number;
    _ValidFrom: ValidFrom;
  }

  export interface ValidFrom {
    '$lte': string;
  }

}
