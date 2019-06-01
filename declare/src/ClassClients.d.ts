import { Client, Api, Classes } from '../index';
export declare namespace ClassClients {
    class ClassClientBase<T extends Api.RallyObject> {
        constructor(typeName: string, apiKey: string, options: Api.ClientOptions);
        constructor(typeName: string, client: Client);
        /**
         * @private
         */
        client: Client;
        /**
         * @private
         */
        typeName: string;
        /**
         * returns an array modified to have additional meta data on it containing the results
         */
        query(type: any, query?: Api.QueryOptions, params?: {}): Promise<Api.QueryResponse<T>>;
        /**
         * Saves the current state of the Rally object to Rally.
         * Creating a new object on the server if no _ref is provided in rallyObject
         * @param rallyObject A new or existing Rally object
         */
        save(rallyObject: Partial<T>): Promise<T>;
        /**
         * Returns a Rally object by ref or by type and ID
         */
        get(typeOrRef: string, objectID?: number, params?: Api.QueryOptions): Promise<T>;
        /**
         * Gets a subcollection stored on the Rally object
         */
        getCollection(rallyObject: T, collectionName: string, params?: Api.QueryOptions): Promise<Api.QueryResponse<Api.RallyObject>>;
        /**
         *
         * @param  inputOrRef Either a Rally object or the ref for a Rally object
         * @param  params Optional Params to be sent with the request
         * @param  ignoreDelay Pass true if you don't want to wait 500 ms longer to return. This time gives the Rally server a chance to finish deleting
         */
        delete(inputOrRef: string | Api.RallyObject, params?: {}, ignoreDelay?: boolean): Promise<any>;
    }
    class AllowedAttributeValue extends ClassClientBase<Classes.AllowedAttributeValue> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class AllowedQueryOperator extends ClassClientBase<Classes.AllowedQueryOperator> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class App extends ClassClientBase<Classes.App> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Artifact extends ClassClientBase<Classes.Artifact> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class ArtifactNotification extends ClassClientBase<Classes.ArtifactNotification> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Attachment extends ClassClientBase<Classes.Attachment> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class AttachmentContent extends ClassClientBase<Classes.AttachmentContent> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class AttributeDefinition extends ClassClientBase<Classes.AttributeDefinition> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Blocker extends ClassClientBase<Classes.Blocker> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Build extends ClassClientBase<Classes.Build> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class BuildDefinition extends ClassClientBase<Classes.BuildDefinition> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Change extends ClassClientBase<Classes.Change> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Changeset extends ClassClientBase<Classes.Changeset> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Connection extends ClassClientBase<Classes.Connection> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class ConversationPost extends ClassClientBase<Classes.ConversationPost> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class CumulativeFlowData extends ClassClientBase<Classes.CumulativeFlowData> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Dashboard extends ClassClientBase<Classes.Dashboard> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class DataMoveRequest extends ClassClientBase<Classes.DataMoveRequest> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Defect extends ClassClientBase<Classes.Defect> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class DefectSuite extends ClassClientBase<Classes.DefectSuite> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class DomainObject extends ClassClientBase<Classes.DomainObject> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Feature extends ClassClientBase<Classes.Feature> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class FeatureToggleEntity extends ClassClientBase<Classes.FeatureToggleEntity> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class FlowState extends ClassClientBase<Classes.FlowState> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class HierarchicalRequirement extends ClassClientBase<Classes.HierarchicalRequirement> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class HierarchicalRequirementPredecessorRelationship extends ClassClientBase<Classes.HierarchicalRequirementPredecessorRelationship> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Initiative extends ClassClientBase<Classes.Initiative> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Investment extends ClassClientBase<Classes.Investment> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Iteration extends ClassClientBase<Classes.Iteration> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class IterationCumulativeFlowData extends ClassClientBase<Classes.IterationCumulativeFlowData> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Milestone extends ClassClientBase<Classes.Milestone> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class PPMConnection extends ClassClientBase<Classes.PPMConnection> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Panel extends ClassClientBase<Classes.Panel> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class PanelDefinitionConfigProperty extends ClassClientBase<Classes.PanelDefinitionConfigProperty> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class PersistableObject extends ClassClientBase<Classes.PersistableObject> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class PortfolioItem extends ClassClientBase<Classes.PortfolioItem> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class PortfolioItemPredecessorRelationship extends ClassClientBase<Classes.PortfolioItemPredecessorRelationship> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Preference extends ClassClientBase<Classes.Preference> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class PreliminaryEstimate extends ClassClientBase<Classes.PreliminaryEstimate> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class ProfileImage extends ClassClientBase<Classes.ProfileImage> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Project extends ClassClientBase<Classes.Project> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class ProjectPermission extends ClassClientBase<Classes.ProjectPermission> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class PullRequest extends ClassClientBase<Classes.PullRequest> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class RankableArtifact extends ClassClientBase<Classes.RankableArtifact> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class RecycleBinEntry extends ClassClientBase<Classes.RecycleBinEntry> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Release extends ClassClientBase<Classes.Release> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class ReleaseCumulativeFlowData extends ClassClientBase<Classes.ReleaseCumulativeFlowData> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Requirement extends ClassClientBase<Classes.Requirement> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Revision extends ClassClientBase<Classes.Revision> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class RevisionHistory extends ClassClientBase<Classes.RevisionHistory> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Risk extends ClassClientBase<Classes.Risk> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class SCMRepository extends ClassClientBase<Classes.SCMRepository> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class SchedulableArtifact extends ClassClientBase<Classes.SchedulableArtifact> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class ScheduledTestCase extends ClassClientBase<Classes.ScheduledTestCase> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Scope extends ClassClientBase<Classes.Scope> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class ScopedAttributeDefinition extends ClassClientBase<Classes.ScopedAttributeDefinition> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Slice extends ClassClientBase<Classes.Slice> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class State extends ClassClientBase<Classes.State> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Subscription extends ClassClientBase<Classes.Subscription> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class SubscriptionTag extends ClassClientBase<Classes.SubscriptionTag> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Tag extends ClassClientBase<Classes.Tag> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Task extends ClassClientBase<Classes.Task> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class TestCase extends ClassClientBase<Classes.TestCase> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class TestCaseResult extends ClassClientBase<Classes.TestCaseResult> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class TestCaseStep extends ClassClientBase<Classes.TestCaseStep> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class TestFolder extends ClassClientBase<Classes.TestFolder> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class TestFolderStatus extends ClassClientBase<Classes.TestFolderStatus> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class TestSet extends ClassClientBase<Classes.TestSet> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class TimeEntryItem extends ClassClientBase<Classes.TimeEntryItem> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class TimeEntryValue extends ClassClientBase<Classes.TimeEntryValue> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class TypeDefinition extends ClassClientBase<Classes.TypeDefinition> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class User extends ClassClientBase<Classes.User> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class UserIterationCapacity extends ClassClientBase<Classes.UserIterationCapacity> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class UserPermission extends ClassClientBase<Classes.UserPermission> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class UserProfile extends ClassClientBase<Classes.UserProfile> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class WebLinkDefinition extends ClassClientBase<Classes.WebLinkDefinition> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class WebTab extends ClassClientBase<Classes.WebTab> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class Workspace extends ClassClientBase<Classes.Workspace> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class WorkspaceConfiguration extends ClassClientBase<Classes.WorkspaceConfiguration> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class WorkspaceDomainObject extends ClassClientBase<Classes.WorkspaceDomainObject> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
    class WorkspacePermission extends ClassClientBase<Classes.WorkspacePermission> {
        constructor(apiKey: string, options: Api.ClientOptions);
        constructor(client: Client);
    }
}
