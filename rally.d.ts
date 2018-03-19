declare namespace RallyApi {
  export interface Client extends RallyClient { }
  export interface QueryOptions {
    fetch: string[] | bool,
    query: string,
    start: number,
    pagesize: number,
    projectScopeUp: bool,
    projectScopeDown: bool,
    compact: bool,
    includePermissions: bool,
    project: string,
    workspace: string
  }
  export namespace Bulk {
    export interface Request {
      Entry: Entry;
    }

    interface Entry {
      Path: string;
      Method: string;
      Body: Body;
    }

    interface Body {
      'portfolioitem/engrfeature': Portfolioitemengrfeature;
    }

    interface Portfolioitemengrfeature {
      [x: string, any]
    }
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

    export interface Response extends Array {
      $params: any,
      $hasMore: boolean,
      $rawResponse: RawResponse,
      /** returns all the data from the later pages including this page */
      $getAll: ()=> Promise<Lookback.Response>
      /** returns the data from the next page */      
      $getNextPage: () => Promise<Lookback.Response>
    }

    interface RawResponse {
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

    interface Timings {
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

    interface ThreadStats {
      cpuTime: string;
      waitTime: string;
      waitCount: string;
      blockedTime: string;
      blockedCount: string;
    }

    interface GeneratedQuery {
      find: Find;
      limit: number;
      skip: number;
      fields: boolean;
    }

    interface Find {
      ObjectID: number;
      _ValidFrom: ValidFrom;
    }

    interface ValidFrom {
      '$lte': string;
    }

  }
}
