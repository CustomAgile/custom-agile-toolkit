declare namespace RallyClient {
    export interface QueryOptions {
        fetch: string[] | bool,
        query: string,
        start: number,
        pageSize: number,
        projectScopeUp: bool,
        projectScopeDown: bool,
        compact: bool,
        includePermissions: bool,
        project: string,
        workspace: string
    }
}

