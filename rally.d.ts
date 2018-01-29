declare namespace RallyApi {
    export interface Client extends RallyClient{}
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
}
