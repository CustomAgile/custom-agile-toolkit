import * as Toolkit from './index';
export declare namespace Classes {
    /**
     * Allowed Attribute Value
     * This is metadata about what values are allowed for attributes on objects types in the Web Services API
     *
     */
    interface AllowedAttributeValue extends PersistableObject {
    }
    /**
     * Allowed Query Operator
     * This is metadata about what query operators are allowed for attributes on objects types in the Web Services API
     *
     */
    interface AllowedQueryOperator extends PersistableObject {
    }
    /**
     * App
     * Subscription App
     *
     */
    interface App extends DomainObject {
    }
    /**
     * Artifact
     * null
     *
     */
    interface Artifact extends WorkspaceDomainObject {
        /**
         * Changesets
         * Changesets associated with this artifact.
         */
        Changesets?: Changeset[];
        /**
         * Connections
         * connections associated with this artifact
         */
        Connections?: Connection[];
        /**
         * Description
         * Artifact description, which is a rich-text field.
         */
        Description?: string;
        /**
         * Discussion
         * The discussions for this artifact.
         */
        Discussion?: ConversationPost[];
        /**
         * Display Color
         * Display color for artifacts
         */
        DisplayColor?: string;
        /**
         * Expedite
         * Whether or not this Artifact is expedited
         */
        Expedite?: boolean;
        /**
         * Formatted ID
         * The formatted ID for an object.  This is automatically assigned when an object is created and can never be changed.  In queries, only include the integer portion and omit the prefix.
         */
        FormattedID?: number;
        /**
         * Formatted ID ID
         * The formatted ID ID for an object.  This is automatically assigned when an object is created and can never be changed.
         */
        FormattedIDID?: number;
        /**
         * Formatted ID Prefix
         * The formatted ID Prefix for an object.  This is a derived field from the type definition of the object.
         */
        FormattedIDPrefix?: string;
        /**
         * Last Update Date
         * The last update date of an object.  It is automatically assigned when an object is created or updated.
         */
        LastUpdateDate?: Date;
        /**
         * Latest Discussion Age In Minutes
         * The age in minutes of the latest discussion on this Defect.
         */
        LatestDiscussionAgeInMinutes?: number;
        /**
         * Milestones
         * The milestones associated with this artifact
         */
        Milestones?: Milestone[];
        /**
         * Name
         * The name of the artifact
         */
        Name?: string;
        /**
         * Notes
         * Artifact notes, which is a rich-text field.
         */
        Notes?: string;
        /**
         * Owner
         * Artifact owner, a reference to the user.
         */
        Owner?: User;
        /**
         * Project
         * The project this artifact is associated with.
         */
        Project?: Project;
        /**
         * Ready
         * Whether or not this Artifact is ready
         */
        Ready?: boolean;
        /**
         * Revision History
         * A reference to the revision history (read-only) of the artifact.
         */
        RevisionHistory?: RevisionHistory;
        /**
         * Tags
         * Tags for Artifact
         */
        Tags?: Tag[];
    }
    /**
     * Artifact Notification
     * Artifact Change Notification
     *
     */
    interface ArtifactNotification extends WorkspaceDomainObject {
    }
    /**
     * Attachment
     * Attachments are now creatable through web services
     *
     */
    interface Attachment extends WorkspaceDomainObject {
    }
    /**
     * Attachment Content
     * Attachment Content are now creatable through web services
     *
     */
    interface AttachmentContent extends WorkspaceDomainObject {
    }
    /**
     * Attribute Definition
     * This is metadata about attributes on objects types in the Web Services API
     *
     */
    interface AttributeDefinition extends WorkspaceDomainObject {
        /**
         * Allowed Query Operators
         * Allowed query operators for this attribute
         */
        AllowedQueryOperators?: AllowedQueryOperator[];
        /**
         * Allowed Value Type
         * Allowed collection and object reference object type
         */
        AllowedValueType?: TypeDefinition;
        /**
         * Allowed Values
         * Allowed values for this attribute
         */
        AllowedValues?: AllowedAttributeValue[];
        /**
         * Attribute Type
         * Attribute Type
         */
        AttributeType?: string;
        /**
         * Constrained
         * Are values of this attribute constrained (if so, see the Allowed Values collection)
         */
        Constrained?: boolean;
        /**
         * Custom
         * Is this attribute custom (added by a customer)
         */
        Custom?: boolean;
        /**
         * Detailed Type
         * Is the Attribute visible only to subscription and workspace admins
         */
        DetailedType?: string;
        /**
         * Element Name
         * Element Name
         */
        ElementName?: string;
        /**
         * Filterable
         * Is this attribute filterable (can you filter objects with this attribute by the value of this attribute)
         */
        Filterable?: boolean;
        /**
         * Hidden
         * Is the value of this attribute hidden
         */
        Hidden?: boolean;
        /**
         * Hideable
         * May this attribute be hidden
         */
        Hideable?: boolean;
        /**
         * Max Fractional Digits
         * Max number of RHS digits for decimal types
         */
        MaxFractionalDigits?: number;
        /**
         * Max Length
         * Max length of data (number of LHS digits for decimals)
         */
        MaxLength?: number;
        /**
         * Name
         * Attribute Name
         */
        Name?: string;
        /**
         * Note
         * Note
         */
        Note?: string;
        /**
         * Owned
         * Is the value of this attribute owned by the parent object
         */
        Owned?: boolean;
        /**
         * Read Only
         * Is this attribute Read-Only
         */
        ReadOnly?: boolean;
        /**
         * Real Attribute Type
         * Real Attribute type of the field
         */
        RealAttributeType?: string;
        /**
         * Required
         * Is the value of this attribute required
         */
        Required?: boolean;
        /**
         * Sortable
         * May queries be ordered by this attribute
         */
        Sortable?: boolean;
        /**
         * System Required
         * Is the Attribute required by the system
         */
        SystemRequired?: boolean;
        /**
         * Type
         * Type
         */
        Type?: string;
        /**
         * Type Definition
         * Type Definition to assign attribute definition to
         */
        TypeDefinition?: TypeDefinition;
        /**
         * Visible Only To Admins
         * Is the Attribute visible only to subscription and workspace admins
         */
        VisibleOnlyToAdmins?: boolean;
    }
    /**
     * Blocker
     * Blocker
     *
     */
    interface Blocker extends DomainObject {
    }
    /**
     * Build
     * Build Core Type
     *
     */
    interface Build extends WorkspaceDomainObject {
    }
    /**
     * Build Definition
     * Build Definition Core Type
     *
     */
    interface BuildDefinition extends WorkspaceDomainObject {
    }
    /**
     * Change
     * Change
     *
     */
    interface Change extends WorkspaceDomainObject {
    }
    /**
     * Changeset
     * Changeset
     *
     */
    interface Changeset extends WorkspaceDomainObject {
    }
    /**
     * Connection
     * Connection
     *
     */
    interface Connection extends WorkspaceDomainObject {
        /**
         * Artifact
         * The artifact this connection belongs to.
         */
        Artifact?: Artifact;
        /**
         * Description
         * Connection description
         */
        Description?: string;
        /**
         * Name
         * Connection name
         */
        Name?: string;
        /**
         * Type Definition
         * Type Definition to assign attribute definition to
         */
        TypeDefinition?: TypeDefinition;
        /**
         * Url
         * Connection url
         */
        Url?: string;
    }
    /**
     * Conversation Post
     * This is the Conversation Post type
     *
     */
    interface ConversationPost extends WorkspaceDomainObject {
    }
    /**
     * Cumulative Flow Data
     * null
     *
     */
    interface CumulativeFlowData extends WorkspaceDomainObject {
        /**
         * Card Count
         * Number of cards in this state
         */
        CardCount?: number;
        /**
         * Card Estimate Total
         * Sum of the estimates of cards in this state
         */
        CardEstimateTotal?: number;
        /**
         * Card State
         * The state name for cards
         */
        CardState?: string;
        /**
         * Card To Do Total
         * Sum of todo values for cards in this state
         */
        CardToDoTotal?: number;
        /**
         * Task Estimate Total
         * Sum of task estimates on cards in this state
         */
        TaskEstimateTotal?: number;
    }
    /**
     * Dashboard
     * Dashboard
     *
     */
    interface Dashboard extends DomainObject {
    }
    /**
     * DataMoveRequest
     * Records data movement requests
     *
     */
    interface DataMoveRequest extends DomainObject {
    }
    /**
     * Defect
     * null
     *
     */
    interface Defect extends SchedulableArtifact {
        /**
         * Created By Automated Test
         * null
         */
        c_CreatedByAutomatedTest?: boolean;
    }
    /**
     * Defect Suite
     * null
     *
     */
    interface DefectSuite extends SchedulableArtifact {
    }
    /**
     * Domain Object
     * The base type of all domain objects.
     *
     */
    interface DomainObject extends PersistableObject {
        /**
         * Subscription
         * A read-only reference to the subscription an object is associated with.
         */
        Subscription?: Subscription;
    }
    /**
     * Feature
     * Portfolio Item
     *
     */
    interface Feature extends PortfolioItem {
        /**
         * Late Child Count
         * The count of leaf children who are scheduled in a release or iteration that's later than this item's release.
         */
        LateChildCount?: number;
        /**
         * Parent
         * The Initiative parent of this Feature
         */
        Parent?: Initiative;
        /**
         * Predecessors
         * The Feature predecessors of this Feature
         */
        Predecessors?: Feature[];
        /**
         * Release
         * The release of this Feature
         */
        Release?: Release;
        /**
         * State
         * Kanban state for this portfolio item
         */
        State?: State;
        /**
         * Successors
         * The Feature successors of this Feature
         */
        Successors?: Feature[];
        /**
         * UserStories
         * The Hierarchical Requirement collection of a Feature (read-only collection)
         */
        UserStories?: HierarchicalRequirement[];
    }
    /**
     * FeatureToggleEntity
     * Enable or disable features using this type
     *
     */
    interface FeatureToggleEntity extends DomainObject {
    }
    /**
     * Flow State
     * Provides a Flow State.
     *
     */
    interface FlowState extends WorkspaceDomainObject {
    }
    /**
     * FundingIncrement
     * null
     *
     */
    interface FundingIncrement extends Slice {
    }
    /**
     * Hierarchical Requirement
     * The hierarchical requirement type.
     *
     */
    interface HierarchicalRequirement extends Requirement {
        /**
         * Feature
         * The feature of this Hierarchical Requirement
         */
        Feature?: Feature;
        /**
         * Portfolio Item
         * The Feature parent of this Hierarchical Requirement
         */
        PortfolioItem?: Feature;
    }
    /**
     * HierarchicalRequirementPredecessorRelationship
     * Represents a relationship where the predecessor proceeds another HierarchicalRequirement
     *
     */
    interface HierarchicalRequirementPredecessorRelationship extends WorkspaceDomainObject {
    }
    /**
     * Initiative
     * Portfolio Item
     *
     */
    interface Initiative extends PortfolioItem {
        /**
         * Children
         * The Feature collection of a Initiative (read-only collection)
         */
        Children?: Feature[];
        /**
         * Predecessors
         * The Initiative predecessors of this Initiative
         */
        Predecessors?: Initiative[];
        /**
         * State
         * Kanban state for this portfolio item
         */
        State?: State;
        /**
         * Successors
         * The Initiative successors of this Initiative
         */
        Successors?: Initiative[];
    }
    /**
     * Iteration
     * null
     *
     */
    interface Iteration extends WorkspaceDomainObject {
    }
    /**
     * Iteration Cumulative Flow Data
     * This read-only object contains statistical data about an iteration.
     *
     */
    interface IterationCumulativeFlowData extends CumulativeFlowData {
    }
    /**
     * Milestone
     * null
     *
     */
    interface Milestone extends Slice {
    }
    /**
     * Panel
     * Panel
     *
     */
    interface Panel extends DomainObject {
    }
    /**
     * PanelDefinitionConfigProperty
     * PanelDefinitionConfigProperty
     *
     */
    interface PanelDefinitionConfigProperty extends PersistableObject {
    }
    /**
     * Persistable Object
     * The base type of all persistable objects.
     *
     */
    interface PersistableObject extends Toolkit.Api.RallyObject {
        /**
         * Creation Date
         * The creation date of an object.  It is automatically assigned when an object is created, and can never be changed.
         */
        CreationDate?: Date;
        /**
         * Object ID
         * This is the object ID, a globally-unique identifier for the object.  It is automatically assigned when an object is created, and can never be changed.
         */
        ObjectID?: number;
        /**
         * ObjectUUID
         * This is the UUID, a universally-unique identifier for the object. It is automatically assigned when an object is created, and can never be changed.
         */
        ObjectUUID?: string;
        /**
         * VersionId
         * The object version.
         */
        VersionId?: string;
    }
    /**
     * Portfolio Item
     * Portfolio Item
     *
     */
    interface PortfolioItem extends RankableArtifact {
    }
    /**
     * PortfolioItemPredecessorRelationship
     * Represents a relationship where the predecessor proceeds another PortfolioItem
     *
     */
    interface PortfolioItemPredecessorRelationship extends WorkspaceDomainObject {
    }
    /**
     * Preference
     * Preference
     *
     */
    interface Preference extends PersistableObject {
    }
    /**
     * Preliminary Estimate
     * Sizing/Estimation for Portfolio Items.
     *
     */
    interface PreliminaryEstimate extends WorkspaceDomainObject {
    }
    /**
     * Profile Image
     * null
     *
     */
    interface ProfileImage extends DomainObject {
    }
    /**
     * Program
     * Program
     *
     */
    interface Program extends WorkspaceDomainObject {
    }
    /**
     * Project
     * null
     *
     */
    interface Project extends Scope {
    }
    /**
     * Project Permission
     * Project Permission
     *
     */
    interface ProjectPermission extends UserPermission {
    }
    /**
     * Pull Request
     * PullRequest
     *
     */
    interface PullRequest extends Connection {
    }
    /**
     * Rankable Artifact
     * null
     *
     */
    interface RankableArtifact extends Artifact {
        /**
         * Drag And Drop Rank
         * Alphanumeric rank value
         */
        DragAndDropRank?: string;
    }
    /**
     * RecycleBinEntry
     * A wrapper for an artifact in the recycle bin
     *
     */
    interface RecycleBinEntry extends WorkspaceDomainObject {
    }
    /**
     * Release
     * null
     *
     */
    interface Release extends WorkspaceDomainObject {
    }
    /**
     * Release Cumulative Flow Data
     * This read-only object contains statistical data about a release.
     *
     */
    interface ReleaseCumulativeFlowData extends CumulativeFlowData {
    }
    /**
     * Requirement
     * null
     *
     */
    interface Requirement extends SchedulableArtifact {
        /**
         * Attachments
         * Attachments associated with this requirement
         */
        Attachments?: Attachment[];
        /**
         * Package
         * The package that this requirement is assigned to.
         */
        Package?: string;
    }
    /**
     * Revision
     * null
     *
     */
    interface Revision extends WorkspaceDomainObject {
    }
    /**
     * Revision History
     * null
     *
     */
    interface RevisionHistory extends WorkspaceDomainObject {
    }
    /**
     * SCMRepository
     * SCMRepository
     *
     */
    interface SCMRepository extends WorkspaceDomainObject {
    }
    /**
     * Schedulable Artifact
     * null
     *
     */
    interface SchedulableArtifact extends RankableArtifact {
        /**
         * Accepted Date
         * The date that this artifact's schedule state was set to accepted.  This is automatically set.
         */
        AcceptedDate?: Date;
        /**
         * Blocked
         * Flag to determine if this artifact is blocked
         */
        Blocked?: boolean;
        /**
         * Blocked Reason
         * The reason this artifact is blocked
         */
        BlockedReason?: string;
        /**
         * Blocker
         * The blocker blocking this defect
         */
        Blocker?: Blocker;
        /**
         * Drag And Drop Rank
         * Alphanumeric rank value
         */
        DragAndDropRank?: string;
        /**
         * Flow State
         * Flow state for this Artifact.
         */
        FlowState?: FlowState;
        /**
         * Flow State Changed Date
         * The timestamp of the last state change.
         */
        FlowStateChangedDate?: Date;
        /**
         * Iteration
         * The iteration that this artifact is scheduled in
         */
        Iteration?: Iteration;
        /**
         * Last Build
         * The last result build number.  This is automatically calculated off of the set of test case results.
         */
        LastBuild?: string;
        /**
         * Last Run
         * The last result date.  This is automatically calculated off of the set of test case results.
         */
        LastRun?: Date;
        /**
         * Mixed Children
         * A collection of child artifacts of potentially mixed type.
         */
        MixedChildren?: Artifact[];
        /**
         * Passing Test Case Count
         * Number of passing test cases.
         */
        PassingTestCaseCount?: number;
        /**
         * Plan Estimate
         * Plan estimate of this artifact
         */
        PlanEstimate?: number;
        /**
         * Release
         * The release that this artifact is scheduled in
         */
        Release?: Release;
        /**
         * Schedule State
         * Schedule state
         */
        ScheduleState?: string;
        /**
         * Schedule State Prefix
         * Schedule State Prefix
         */
        ScheduleStatePrefix?: string;
        /**
         * Task Actual Total
         * Task actual total of this artifact
         */
        TaskActualTotal?: number;
        /**
         * Task Estimate Total
         * Task estimate total of this artifact
         */
        TaskEstimateTotal?: number;
        /**
         * Task Remaining Total
         * Task remaining total of this artifact (To Do)
         */
        TaskRemainingTotal?: number;
        /**
         * Tasks
         * Tasks associated with completing.
         */
        Tasks?: Task[];
        /**
         * Test Case Count
         * Number of total test cases.
         */
        TestCaseCount?: number;
    }
    /**
     * Scheduled Test Case
     * null
     *
     */
    interface ScheduledTestCase extends Artifact {
    }
    /**
     * Scope
     * Scope
     *
     */
    interface Scope extends DomainObject {
        /**
         * Description
         * Description of the scope
         */
        Description?: string;
        /**
         * Name
         * Name of the scope
         */
        Name?: string;
        /**
         * Notes
         * Notes on the scope
         */
        Notes?: string;
        /**
         * Owner
         * Owner of the scope
         */
        Owner?: User;
        /**
         * State
         * State of the scope
         */
        State?: string;
    }
    /**
     * Scoped Attribute Definition
     * Scoped Attribute Definition, where Scope refers to Workspace or Project
     *
     */
    interface ScopedAttributeDefinition extends WorkspaceDomainObject {
    }
    /**
     * Slice
     * null
     *
     */
    interface Slice extends WorkspaceDomainObject {
        /**
         * Description
         * Slice description, which is a rich-text field.
         */
        Description?: string;
        /**
         * Display Color
         * Display color for this milestone.
         */
        DisplayColor?: string;
        /**
         * Formatted ID
         * The formatted ID for an object.  This is automatically assigned when an object is created and can never be changed.
         */
        FormattedID?: number;
        /**
         * Name
         * Milestone Name
         */
        Name?: string;
        /**
         * Notes
         * Milestone notes, which is a rich-text field
         */
        Notes?: string;
        /**
         * Recycled
         * Moved to Recycle Bin
         */
        Recycled?: boolean;
        /**
         * Revision History
         * A reference to the revision history (read-only) of the milestone.
         */
        RevisionHistory?: RevisionHistory;
    }
    /**
     * State
     * Provides a State.
     *
     */
    interface State extends WorkspaceDomainObject {
    }
    /**
     * Subscription
     * null
     *
     */
    interface Subscription extends PersistableObject {
    }
    /**
     * Subscription Tag
     * Subscription Tag
     *
     */
    interface SubscriptionTag extends DomainObject {
    }
    /**
     * Tag
     * Tag
     *
     */
    interface Tag extends WorkspaceDomainObject {
    }
    /**
     * Task
     * null
     *
     */
    interface Task extends Artifact {
    }
    /**
     * Test Case
     * null
     *
     */
    interface TestCase extends RankableArtifact {
    }
    /**
     * Test Case Result
     * null
     *
     */
    interface TestCaseResult extends WorkspaceDomainObject {
    }
    /**
     * Test Case Step
     * Test case step.
     *
     */
    interface TestCaseStep extends WorkspaceDomainObject {
    }
    /**
     * Test Folder
     * Test Folder
     *
     */
    interface TestFolder extends WorkspaceDomainObject {
    }
    /**
     * Test Folder Status
     * Test Folder Status
     *
     */
    interface TestFolderStatus extends WorkspaceDomainObject {
    }
    /**
     * Test Set
     * Test Set
     *
     */
    interface TestSet extends SchedulableArtifact {
    }
    /**
     * Time Entry Item
     * Time Entry Item
     *
     */
    interface TimeEntryItem extends WorkspaceDomainObject {
    }
    /**
     * Time Entry Value
     * Time Entry Value
     *
     */
    interface TimeEntryValue extends WorkspaceDomainObject {
    }
    /**
     * Type Definition
     * This is metadata about each object type in the Web Services API.
     *
     */
    interface TypeDefinition extends WorkspaceDomainObject {
    }
    /**
     * User
     * null
     *
     */
    interface User extends DomainObject {
    }
    /**
     * User Iteration Capacity
     * This is the User Iteration Capacity type
     *
     */
    interface UserIterationCapacity extends WorkspaceDomainObject {
    }
    /**
     * User Permission
     * User Permission
     *
     */
    interface UserPermission extends DomainObject {
        /**
         * Custom Object ID
         * Custom Object ID
         */
        CustomObjectID?: string;
        /**
         * Name
         * Name of user permission
         */
        Name?: string;
        /**
         * Role
         * Role of user permission
         */
        Role?: string;
        /**
         * User
         * User
         */
        User?: User;
    }
    /**
     * User Profile
     * null
     *
     */
    interface UserProfile extends DomainObject {
    }
    /**
     * Web Link Definition
     * This is metadata about weblink attributes on objects types in the Web Services API
     *
     */
    interface WebLinkDefinition extends AttributeDefinition {
    }
    /**
     * WebTab
     * WebTab
     *
     */
    interface WebTab extends WorkspaceDomainObject {
    }
    /**
     * Workspace
     * null
     *
     */
    interface Workspace extends Scope {
    }
    /**
     * Workspace Configuration
     * null
     *
     */
    interface WorkspaceConfiguration extends WorkspaceDomainObject {
    }
    /**
     * Workspace Domain Object
     * The base type of all objects contained inside a workspace.
     *
     */
    interface WorkspaceDomainObject extends DomainObject {
        /**
         * Workspace
         * A reference to the workspace an object is associated with.  This field can only be set during object creation.
         */
        Workspace?: Workspace;
    }
    /**
     * Workspace Permission
     * Workspace Permission
     *
     */
    interface WorkspacePermission extends UserPermission {
    }
}
