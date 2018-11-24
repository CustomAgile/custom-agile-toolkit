import * as Toolkit from './index';
export declare namespace Classes {
    /**
     * Allowed Attribute Value
     * This is metadata about what values are allowed for attributes on objects types in the Web Services API
     *
     */
    interface AllowedAttributeValue extends PersistableObject {
        /**
         * Attribute Definition
         * The Attribute Definition for which this is a value
         */
        AttributeDefinition?: AttributeDefinition;
        /**
         * Integer Value
         * Allowed int value for attribute
         */
        IntegerValue?: number;
        /**
         * Localized String Value
         * Localized representation of String Value based on User Language
         */
        LocalizedStringValue?: string;
        /**
         * String Value
         * Allowed string value for attribute
         */
        StringValue?: string;
        /**
         * Value Index
         * Determines the order of allowed values in lists
         */
        ValueIndex?: number;
    }
    /**
     * Allowed Query Operator
     * This is metadata about what query operators are allowed for attributes on objects types in the Web Services API
     *
     */
    interface AllowedQueryOperator extends PersistableObject {
        /**
         * Operator Name
         * Allowed operator name for queries
         */
        OperatorName?: string;
    }
    /**
     * App
     * Subscription App
     *
     */
    interface App extends DomainObject {
        /**
         * Description
         * The description of the app
         */
        Description?: string;
        /**
         * Is Disabled
         * Whether or not this App is disabled
         */
        IsDisabled?: boolean;
        /**
         * Is Iteration Filtered
         * Whether or not this App is Iteration filtered
         */
        IsIterationFiltered?: boolean;
        /**
         * Is Milestone Filtered
         * Whether or not this App is Milestone filtered
         */
        IsMilestoneFiltered?: boolean;
        /**
         * Is Release Filtered
         * Whether or not this App is Release filtered
         */
        IsReleaseFiltered?: boolean;
        /**
         * Name
         * The name of the app
         */
        Name?: string;
        /**
         * Preview Image Url
         * The preview image url of the app
         */
        PreviewImageUrl?: string;
        /**
         * Usages
         * The number or installations of this App
         */
        Usages?: number;
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
         * Created By
         * User who created the artifact
         */
        CreatedBy?: User;
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
        /**
         * Class Name
         * Class Name for the Subject corresponding to the Notification
         */
        ClassName?: string;
        /**
         * Description
         * Description for the Artifact Change Notification
         */
        Description?: string;
        /**
         * ID
         * ID for the Subject corresponding to the Notification
         */
        ID?: number;
        /**
         * ID Prefix
         * ID Prefix for the Subject corresponding to the Notification
         */
        IDPrefix?: string;
        /**
         * ID Suffix
         * ID Suffix for the Subject corresponding to the Notification
         */
        IDSuffix?: string;
        /**
         * Name
         * Name for the Subject corresponding to the Notification
         */
        Name?: string;
        /**
         * Project
         * Project corresponding to the Notification
         */
        Project?: Project;
        /**
         * Subject OID
         * Oid for the Subject corresponding to the Notification
         */
        SubjectOID?: number;
        /**
         * User
         * User that created the notification
         */
        User?: User;
    }
    /**
     * Attachment
     * Attachments are now creatable through web services
     *
     */
    interface Attachment extends WorkspaceDomainObject {
        /**
         * Artifact
         * The artifact this attachment belongs to.
         */
        Artifact?: Artifact;
        /**
         * Content
         * Content object of this attachment
         */
        Content?: AttachmentContent;
        /**
         * Content Type
         * MIME content type of this attachment
         */
        ContentType?: string;
        /**
         * Description
         * Attachment description
         */
        Description?: string;
        /**
         * Name
         * Attachment file name
         */
        Name?: string;
        /**
         * Size
         * Size (in bytes) of this attachment
         */
        Size?: number;
        /**
         * Test Case Result
         * Associated Test Case Result
         */
        TestCaseResult?: TestCaseResult;
        /**
         * User
         * The user who added this attachment
         */
        User?: User;
    }
    /**
     * Attachment Content
     * Attachment Content are now creatable through web services
     *
     */
    interface AttachmentContent extends WorkspaceDomainObject {
        /**
         * Content
         * Binary content on the attachment.
         */
        Content?: string;
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
        /**
         * Blocked By
         * The user that created the blocker
         */
        BlockedBy?: User;
        /**
         * Work Product
         * The work product that this blocker blocks
         */
        WorkProduct?: Artifact;
    }
    /**
     * Build
     * Build Core Type
     *
     */
    interface Build extends WorkspaceDomainObject {
        /**
         * BuildDefinition
         * Owner of this build
         */
        BuildDefinition?: BuildDefinition;
        /**
         * Changesets
         * Changesets included in this build
         */
        Changesets?: Changeset[];
        /**
         * Duration
         * Duration of the build
         */
        Duration?: number;
        /**
         * Message
         * Message related to the build
         */
        Message?: string;
        /**
         * Number
         * Build number (label)
         */
        Number?: string;
        /**
         * Start
         * Start time of the build
         */
        Start?: Date;
        /**
         * Status
         * Pass/Fail status of the build
         */
        Status?: string;
        /**
         * Uri
         * The URI of the build
         */
        Uri?: string;
    }
    /**
     * Build Definition
     * Build Definition Core Type
     *
     */
    interface BuildDefinition extends WorkspaceDomainObject {
        /**
         * Builds
         * Builds from this definition
         */
        Builds?: Build[];
        /**
         * Description
         * Build definition description
         */
        Description?: string;
        /**
         * LastBuild
         * Most recent Build for this BuildDefinition.
         */
        LastBuild?: Build;
        /**
         * LastStatus
         * The last status of the build definition
         */
        LastStatus?: string;
        /**
         * Name
         * The name of the build definition
         */
        Name?: string;
        /**
         * Project
         * Build definition project
         */
        Project?: Project;
        /**
         * Projects
         * Projects this BuildDefinition is associated with
         */
        Projects?: Project[];
        /**
         * Uri
         * The URI of the build definition
         */
        Uri?: string;
    }
    /**
     * Change
     * Change
     *
     */
    interface Change extends WorkspaceDomainObject {
        /**
         * Action
         * The Action associated with the Change
         */
        Action?: string;
        /**
         * Base
         * The Base of the file involved in the Change
         */
        Base?: string;
        /**
         * Changeset
         * Owner of this change
         */
        Changeset?: Changeset;
        /**
         * Extension
         * The Extension of the file involved in the Change
         */
        Extension?: string;
        /**
         * Path And Filename
         * The Path and Filename of the Change
         */
        PathAndFilename?: string;
        /**
         * Uri
         * The URI associated with the Change
         */
        Uri?: string;
    }
    /**
     * Changeset
     * Changeset
     *
     */
    interface Changeset extends WorkspaceDomainObject {
        /**
         * Artifacts
         * Artifacts linked to this Changeset
         */
        Artifacts?: Artifact[];
        /**
         * Author
         * User creating this Changeset
         */
        Author?: User;
        /**
         * Branch
         * The branch of the Changeset
         */
        Branch?: string;
        /**
         * Builds
         * Builds including this Changeset.
         */
        Builds?: Build[];
        /**
         * Changes
         * Changes included in this Changeset
         */
        Changes?: Change[];
        /**
         * Commit Timestamp
         * Time the Changeset was created
         */
        CommitTimestamp?: Date;
        /**
         * Message
         * The message for the Changeset
         */
        Message?: string;
        /**
         * Name
         * A human readable name for the changeset
         */
        Name?: string;
        /**
         * Revision
         * The revision of the Changeset
         */
        Revision?: string;
        /**
         * SCMRepository
         * Owner of this Changeset
         */
        SCMRepository?: SCMRepository;
        /**
         * Uri
         * The URI associated with the Changeset
         */
        Uri?: string;
    }
    /**
     * Connection
     * Connection
     *
     */
    interface Connection extends WorkspaceDomainObject {
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
        /**
         * Artifact
         * Conversation post artifact
         */
        Artifact?: Artifact;
        /**
         * Post Number
         * Conversation post number
         */
        PostNumber?: number;
        /**
         * Text
         * Conversation post text
         */
        Text?: string;
        /**
         * User
         * Conversation post user
         */
        User?: User;
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
        /**
         * name
         * Dashboard Name
         */
        name?: string;
        /**
         * Profile
         * Profile
         */
        Profile?: UserProfile;
    }
    /**
     * DataMoveRequest
     * Records data movement requests
     *
     */
    interface DataMoveRequest extends DomainObject {
        /**
         * DestinationSubscription
         * The destination subscription.
         */
        DestinationSubscription?: Subscription;
        /**
         * DestinationSubscriptionZuulId
         * state
         */
        DestinationSubscriptionZuulId?: string;
        /**
         * RequestingUser
         * User that requested the data move.
         */
        RequestingUser?: User;
        /**
         * SourceSubscriptionZuulId
         * state
         */
        SourceSubscriptionZuulId?: string;
        /**
         * State
         * state
         */
        State?: string;
        /**
         * Workspace
         * The workspace being moved
         */
        Workspace?: Workspace;
    }
    /**
     * Defect
     * null
     *
     */
    interface Defect extends SchedulableArtifact {
        /**
         * Accepted Date
         * The date that this artifact's schedule state was set to accepted.  This is automatically set.
         */
        AcceptedDate?: Date;
        /**
         * Affects Doc
         * Does this defect affect documentation?
         */
        AffectsDoc?: boolean;
        /**
         * Attachments
         * Attachments associated with this defect
         */
        Attachments?: Attachment[];
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
         * Closed Date
         * The date that this defect was closed.  This is automatically set when the defect is changed to the 'closed' state.
         */
        ClosedDate?: Date;
        /**
         * Defect Suites
         * The defect suites containing this defect.
         */
        DefectSuites?: DefectSuite[];
        /**
         * Drag And Drop Rank
         * Alphanumeric rank value
         */
        DragAndDropRank?: string;
        /**
         * Duplicates
         * Other defects that are duplicates of this defect
         */
        Duplicates?: Defect[];
        /**
         * Environment
         * Defect environment (see allowed values)
         */
        Environment?: string;
        /**
         * Fixed In Build
         * The build number that this defect is fixed in
         */
        FixedInBuild?: string;
        /**
         * Found In Build
         * The build number that this defect was found in
         */
        FoundInBuild?: string;
        /**
         * In Progress Date
         * The date this defect went in-progress.
         */
        InProgressDate?: Date;
        /**
         * Iteration
         * The iteration that this artifact is scheduled in
         */
        Iteration?: Iteration;
        /**
         * Opened Date
         * The date that this artifact's schedule state was set to open.  This is automatically set.
         */
        OpenedDate?: Date;
        /**
         * Package
         * The package that this defect is assigned to.
         */
        Package?: string;
        /**
         * Plan Estimate
         * Plan estimate of this artifact
         */
        PlanEstimate?: number;
        /**
         * Priority
         * Priority of this defect
         */
        Priority?: string;
        /**
         * Recycled
         * Moved to Recycle Bin
         */
        Recycled?: boolean;
        /**
         * Release
         * The release that this artifact is scheduled in
         */
        Release?: Release;
        /**
         * Release Note
         * Does this defect affect release notes?
         */
        ReleaseNote?: boolean;
        /**
         * Requirement
         * The requirement that this defect is regarding. Either Requirement or TestCase can be specified, but not both.
         */
        Requirement?: HierarchicalRequirement;
        /**
         * Resolution
         * Resolution of this defect
         */
        Resolution?: string;
        /**
         * Salesforce Case ID
         * The Salesforce.com Case ID this defect is associated with
         */
        SalesforceCaseID?: string;
        /**
         * Salesforce Case Number
         * The Salesforce.com Case Number this defect is associated with
         */
        SalesforceCaseNumber?: string;
        /**
         * Severity
         * Severity of this defect
         */
        Severity?: string;
        /**
         * State
         * State of the defect
         */
        State?: string;
        /**
         * Submitted By
         * The user that submitted this defect
         */
        SubmittedBy?: User;
        /**
         * Target Build
         * Target build number for fixing this defect
         */
        TargetBuild?: string;
        /**
         * Target Date
         * Target date for fixing this defect
         */
        TargetDate?: Date;
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
         * Task Status
         * The status of the Tasks associated with this artifact.
         */
        TaskStatus?: string;
        /**
         * Tasks
         * Tasks associated with completing.
         */
        Tasks?: Task[];
        /**
         * Test Case
         * The test case that this defect is regarding. Either Requirement or TestCase can be specified, but not both.
         */
        TestCase?: TestCase;
        /**
         * Test Case Result
         * The test case result that this defect is regarding.  The TCR must be a result of the test case of this defect.
         */
        TestCaseResult?: TestCaseResult;
        /**
         * Test Case Status
         * The status of the TestCases associated with this artifact.
         */
        TestCaseStatus?: string;
        /**
         * Test Cases
         * The Test Cases associated with this defect.
         */
        TestCases?: TestCase[];
        /**
         * Verified In Build
         * The build number that this defect is verified in
         */
        VerifiedInBuild?: string;
    }
    /**
     * Defect Suite
     * null
     *
     */
    interface DefectSuite extends SchedulableArtifact {
        /**
         * Accepted Date
         * The date that this artifact's schedule state was set to accepted.  This is automatically set.
         */
        AcceptedDate?: Date;
        /**
         * Attachments
         * Attachments associated with this defect suite
         */
        Attachments?: Attachment[];
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
         * The blocker blocking this artifact.
         */
        Blocker?: Blocker;
        /**
         * Closed Defect Count
         * Number of closed defects.
         */
        ClosedDefectCount?: number;
        /**
         * Defect Status
         * The status of the Defects associated with this artifact.
         */
        DefectStatus?: string;
        /**
         * Defects
         * The collection of defects inside this suite.
         */
        Defects?: Defect[];
        /**
         * Drag And Drop Rank
         * Alphanumeric rank value
         */
        DragAndDropRank?: string;
        /**
         * In Progress Date
         * The date this defect suite went in-progress.
         */
        InProgressDate?: Date;
        /**
         * Iteration
         * The iteration that this artifact is scheduled in
         */
        Iteration?: Iteration;
        /**
         * Package
         * The package that this defect suite is assigned to.
         */
        Package?: string;
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
         * Task Status
         * The status of the Tasks associated with this artifact.
         */
        TaskStatus?: string;
        /**
         * Tasks
         * Tasks associated with completing.
         */
        Tasks?: Task[];
        /**
         * Total Defect Count
         * Number of total defects attached to the defect suite.
         */
        TotalDefectCount?: number;
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
        /**
         * dateEnabled
         * Date that the toggle was enabled
         */
        dateEnabled?: Date;
        /**
         * labEnabledForSubscription
         * Whether or not labs are enable for the subscription
         */
        labEnabledForSubscription?: boolean;
        /**
         * name
         * Toggle Name
         */
        name?: string;
        /**
         * toggledOnBy
         * Who toggled this toggle
         */
        toggledOnBy?: string;
        /**
         * userOID
         * This is the object ID of the user if the toggle is user scoped.
         */
        userOID?: number;
        /**
         * value
         * Whether or not this toggle is enabled at a given scope
         */
        value?: boolean;
    }
    /**
     * Flow State
     * Provides a Flow State.
     *
     */
    interface FlowState extends WorkspaceDomainObject {
        /**
         * Age Threshold
         * Age Threshold.
         */
        AgeThreshold?: number;
        /**
         * Exit Policy
         * The state exit policy
         */
        ExitPolicy?: string;
        /**
         * Name
         * Name of the State.
         */
        Name?: string;
        /**
         * Order Index
         * Order index for this State.
         */
        OrderIndex?: number;
        /**
         * Project
         * The project this flow state is associated with.
         */
        Project?: Project;
        /**
         * Revision History
         * A reference to the revision history (read-only) of this state.
         */
        RevisionHistory?: RevisionHistory;
        /**
         * Schedule State Mapping
         * Schedule state mapping
         */
        ScheduleStateMapping?: string;
        /**
         * WIP Limit
         * Work in progress limit for a State
         */
        WIPLimit?: number;
    }
    /**
     * Hierarchical Requirement
     * The hierarchical requirement type.
     *
     */
    interface HierarchicalRequirement extends Requirement {
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
         * The blocker blocking this artifact.
         */
        Blocker?: Blocker;
        /**
         * Children
         * The children of the requirement (read-only collection)
         */
        Children?: HierarchicalRequirement[];
        /**
         * Defect Status
         * The status of the Defects associated with this artifact.
         */
        DefectStatus?: string;
        /**
         * Defects
         * The Defects associated with this artifact.
         */
        Defects?: Defect[];
        /**
         * Direct Children Count
         * Indicates the direct children count for a Hierarchical Requirement
         */
        DirectChildrenCount?: number;
        /**
         * Drag And Drop Rank
         * Alphanumeric rank value
         */
        DragAndDropRank?: string;
        /**
         * Feature
         * The feature of this Hierarchical Requirement
         */
        Feature?: Feature;
        /**
         * HasParent
         * Indicates whether this Hierarchical Requirement has a parent
         */
        HasParent?: boolean;
        /**
         * In Progress Date
         * The date this hierarchical requirement went in-progress.
         */
        InProgressDate?: Date;
        /**
         * Iteration
         * The iteration that this artifact is scheduled in
         */
        Iteration?: Iteration;
        /**
         * Parent
         * The parent of the requirement.
         */
        Parent?: HierarchicalRequirement;
        /**
         * Plan Estimate
         * Plan estimate of this artifact
         */
        PlanEstimate?: number;
        /**
         * Portfolio Item
         * The Feature parent of this Hierarchical Requirement
         */
        PortfolioItem?: Feature;
        /**
         * Predecessor Not Scheduled
         * Indicates whether any of this story's predecessors are not scheduled
         */
        PredecessorNotScheduled?: boolean;
        /**
         * Predecessor Scheduled In Same Or Later Iteration
         * Indicates whether any of this story's predecessors are scheduled in an Iteration with a start date the same as or later than this story's Iteration
         */
        PredecessorScheduledInSameOrLaterIteration?: boolean;
        /**
         * Predecessors
         * Temporal predecessors of this requirement.  Predecessors must be completed before this requirement can be worked on.
         */
        Predecessors?: HierarchicalRequirement[];
        /**
         * Recycled
         * Moved to Recycle Bin
         */
        Recycled?: boolean;
        /**
         * Release
         * The release that this artifact is scheduled in
         */
        Release?: Release;
        /**
         * Risks
         * The Risks affecting this work item
         */
        Risks?: Risk[];
        /**
         * Successors
         * Temporal successors of this requirement.  Successors cannot be completed before this requirement is completed.
         */
        Successors?: HierarchicalRequirement[];
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
         * Task Status
         * The status of the Tasks associated with this artifact.
         */
        TaskStatus?: string;
        /**
         * Tasks
         * Tasks associated with completing.
         */
        Tasks?: Task[];
        /**
         * Test Case Status
         * The status of the TestCases associated with this artifact.
         */
        TestCaseStatus?: string;
        /**
         * Test Cases
         * The Test Cases associated with this artifact.
         */
        TestCases?: TestCase[];
    }
    /**
     * HierarchicalRequirementPredecessorRelationship
     * Represents a relationship where the predecessor proceeds another HierarchicalRequirement
     *
     */
    interface HierarchicalRequirementPredecessorRelationship extends WorkspaceDomainObject {
        /**
         * Predecessor
         * The predecessor of the story.
         */
        Predecessor?: HierarchicalRequirement;
        /**
         * Successor
         * The successor of the story.
         */
        Successor?: HierarchicalRequirement;
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
     * Investment
     * null
     *
     */
    interface Investment extends Slice {
        /**
         * Accepted Leaf Story Plan Estimate Total
         * Sum of the plan estimates of all accepted leaf user stories (stories without children) for the Portfolio Items associated with this Investment.
         */
        AcceptedLeafStoryPlanEstimateTotal?: number;
        /**
         * Amount
         * Amount for investment
         */
        Amount?: number;
        /**
         * Artifacts
         * The artifacts associated with this Investment
         */
        Artifacts?: PortfolioItem[];
        /**
         * Dependency Count For Lowest Level Portfolio Items
         * The number of dependency relationships among lowest level portfolio items associated to this Investment.
         */
        DependencyCountForLowestLevelPortfolioItems?: number;
        /**
         * End Date
         * Investment End Date
         */
        EndDate?: Date;
        /**
         * Leaf Story Plan Estimate Total
         * Sum of the plan estimates of all leaf user stories (stories without children) associated with this Portfolio Item.
         */
        LeafStoryPlanEstimateTotal?: number;
        /**
         * Percent Child Artifacts Scheduled
         * Percentage of artifacts that are scheduled for this Investment.
         */
        PercentChildArtifactsScheduled?: number;
        /**
         * Percent Done By Story Plan Estimate
         * Percentage of plan estimates for accepted leaf user stories (i.e. stories without children) of the Portfolio Items that are associated with this Investment.
         */
        PercentDoneByStoryPlanEstimate?: number;
        /**
         * Percent Done By Workdays
         * Percentage of Workdays ( as configured on the workspace ) that have elapsed in the current Investment.
         */
        PercentDoneByWorkdays?: number;
        /**
         * Start Date
         * Investment Start Date
         */
        StartDate?: Date;
        /**
         * Total Artifact Count
         * The total number of artifacts associated to this Investment.
         */
        TotalArtifactCount?: number;
        /**
         * Total Scheduled Artifacts Count
         * Sum of the number of scheduled artifacts associated with this Investment.
         */
        TotalScheduledArtifactsCount?: number;
        /**
         * Total Workdays
         * Sum of the number of workdays ( as configured on the workspace ) in the Investment.
         */
        TotalWorkdays?: number;
        /**
         * Total Workdays Elapsed
         * Sum of the number of workdays ( as configured on the workspace ) that have elapsed in the Investment since the Start Date.
         */
        TotalWorkdaysElapsed?: number;
    }
    /**
     * Iteration
     * null
     *
     */
    interface Iteration extends WorkspaceDomainObject {
        /**
         * Children Planned Velocity
         * Planned velocity for all "like iterations" in child projects
         */
        ChildrenPlannedVelocity?: number;
        /**
         * Color Aggregation
         * Aggregation of color, count, and estimate
         */
        ColorAggregation?: string;
        /**
         * End Date
         * End date of the iteration
         */
        EndDate?: Date;
        /**
         * Name
         * Iteration name
         */
        Name?: string;
        /**
         * Notes
         * Iteration notes
         */
        Notes?: string;
        /**
         * Plan Estimate
         * The total plan estimates for this iteration.
         */
        PlanEstimate?: number;
        /**
         * Planned Velocity
         * Planned velocity for this iteration
         */
        PlannedVelocity?: number;
        /**
         * Project
         * The project this iteration is associated with.  This is only valid during creation, not for update.
         */
        Project?: Project;
        /**
         * Revision History
         * Revision history
         */
        RevisionHistory?: RevisionHistory;
        /**
         * Start Date
         * Start date of the iteration
         */
        StartDate?: Date;
        /**
         * State
         * State of this iteration
         */
        State?: string;
        /**
         * Task Actual Total
         * The total of task actuals for this iteration.
         */
        TaskActualTotal?: number;
        /**
         * Task Estimate Total
         * The total of task estimates for this iteration.
         */
        TaskEstimateTotal?: number;
        /**
         * Task Remaining Total
         * The total of task hours remaining for this iteration.
         */
        TaskRemainingTotal?: number;
        /**
         * Theme
         * Iteration theme
         */
        Theme?: string;
        /**
         * Unplanned Work Item Count
         * Number of scheduled items that do not have a plan estimate
         */
        UnplannedWorkItemCount?: number;
        /**
         * User Iteration Capacities
         * User Iteration Capacities associated with this iteration
         */
        UserIterationCapacities?: UserIterationCapacity[];
        /**
         * Work Products
         * Items scheduled in this iteration
         */
        WorkProducts?: SchedulableArtifact[];
    }
    /**
     * Iteration Cumulative Flow Data
     * This read-only object contains statistical data about an iteration.
     *
     */
    interface IterationCumulativeFlowData extends CumulativeFlowData {
        /**
         * Iteration Object ID
         * This is the Object ID of the iteration this data object is associated with
         */
        IterationObjectID?: number;
    }
    /**
     * Milestone
     * null
     *
     */
    interface Milestone extends Slice {
        /**
         * Artifacts
         * The artifacts associated with this milestone
         */
        Artifacts?: Artifact[];
        /**
         * Projects
         * The projects associated with this milestone
         */
        Projects?: Project[];
        /**
         * Target Date
         * Milestone Date
         */
        TargetDate?: Date;
        /**
         * Target Project
         * The top level project assigned to this milestone.
         */
        TargetProject?: Project;
        /**
         * Total Artifact Count
         * The total number of artifacts associated to this milestone.
         */
        TotalArtifactCount?: number;
        /**
         * Total Project Count
         * The total number of projects on the milestone
         */
        TotalProjectCount?: number;
    }
    /**
     * PPM Connection
     * PPMConnection
     *
     */
    interface PPMConnection extends Connection {
        /**
         * Url
         * Connection url
         */
        Url?: string;
        /**
         * Workspace Config
         * Workspace configuration the connection is tied to
         */
        WorkspaceConfig?: WorkspaceConfiguration;
    }
    /**
     * Panel
     * Panel
     *
     */
    interface Panel extends DomainObject {
        /**
         * dashboard
         * dashboard
         */
        dashboard?: Dashboard;
        /**
         * panel definition
         * panel definition
         */
        paneldefinition?: {
            [x: string]: any;
        };
        /**
         * Workspace
         * The Workspace that this dashboard is specific to.
         */
        Workspace?: Workspace;
    }
    /**
     * PanelDefinitionConfigProperty
     * PanelDefinitionConfigProperty
     *
     */
    interface PanelDefinitionConfigProperty extends PersistableObject {
        /**
         * name
         * Dashboard Name
         */
        name?: string;
        /**
         * readOnly
         * readOnly?
         */
        readOnly?: boolean;
        /**
         * value
         * Dashboard Name
         */
        value?: string;
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
        /**
         * Accepted Leaf Story Count
         * Count of accepted leaf user stories (stories without children) associated with this Portfolio Item.
         */
        AcceptedLeafStoryCount?: number;
        /**
         * Accepted Leaf Story Plan Estimate Total
         * Sum of the plan estimates of all accepted leaf user stories (stories without children) associated with this Portfolio Item.
         */
        AcceptedLeafStoryPlanEstimateTotal?: number;
        /**
         * Actual End Date
         * The actual end date for this portfolio item.
         */
        ActualEndDate?: Date;
        /**
         * Actual Start Date
         * The actual start date for this portfolio item.
         */
        ActualStartDate?: Date;
        /**
         * Archived
         * The value indicating if a Portfolio Item has been archived
         */
        Archived?: boolean;
        /**
         * Attachments
         * Attachments associated with this portfolio item
         */
        Attachments?: Attachment[];
        /**
         * Child Story Predecessor Not Scheduled
         * Indicates whether any of the stories that roll up to this Portfolio Item have predecessors that are not scheduled in any Iteration
         */
        ChildStoryPredecessorNotScheduled?: boolean;
        /**
         * Child Story Predecessor Scheduled In Same Or Later Iteration
         * Indicates whether any of the stories that roll up to this Portfolio Item have predecessors that are scheduled in an Iteration with a start date the same as or later than the child story's Iteration
         */
        ChildStoryPredecessorScheduledInSameOrLaterIteration?: boolean;
        /**
         * Collaborators
         * All users who have contributed or have been an owner on this Portfolio Item or any associated work item
         */
        Collaborators?: User[];
        /**
         * Direct Children Count
         * The number of direct children (Userstories or PortfolioItems) for this PortfolioItem.
         */
        DirectChildrenCount?: number;
        /**
         * Drag And Drop Rank
         * Alphanumeric rank value
         */
        DragAndDropRank?: string;
        /**
         * Investment Category
         * What Investment Category this Portfolio Item belongs to.
         */
        InvestmentCategory?: string;
        /**
         * Investments
         * The investments associated with this artifact
         */
        Investments?: Investment[];
        /**
         * Job Size
         * The WSJF Job Size for a Portfolio Item (minimum value is 1)
         */
        JobSize?: number;
        /**
         * Leaf Story Count
         * Count of all leaf user stories (stories without children) associated with this Portfolio Item.
         */
        LeafStoryCount?: number;
        /**
         * Leaf Story Plan Estimate Total
         * Sum of the plan estimates of all leaf user stories (stories without children) associated with this Portfolio Item.
         */
        LeafStoryPlanEstimateTotal?: number;
        /**
         * Percent Done By Story Count
         * Percentage of leaf user stories (stories without children) associated with this Portfolio Item that have been accepted.
         */
        PercentDoneByStoryCount?: number;
        /**
         * Percent Done By Story Plan Estimate
         * Percentage of plan estimates for accepted leaf user stories (i.e. stories without children) that are associated with this Portfolio Item.
         */
        PercentDoneByStoryPlanEstimate?: number;
        /**
         * Planned End Date
         * The planned end date for this portfolio item.
         */
        PlannedEndDate?: Date;
        /**
         * Planned Start Date
         * The planned start date for this portfolio item.
         */
        PlannedStartDate?: Date;
        /**
         * Portfolio Item Type
         * Type definition for the portfolio item
         */
        PortfolioItemType?: TypeDefinition;
        /**
         * Portfolio Item Type Name
         * Type Definition Name
         */
        PortfolioItemTypeName?: string;
        /**
         * Preliminary Estimate
         * The Preliminary Estimate for a Portfolio Item.
         */
        PreliminaryEstimate?: PreliminaryEstimate;
        /**
         * Preliminary Estimate Value
         * The Value of the Preliminary Estimate for a Portfolio Item.
         */
        PreliminaryEstimateValue?: number;
        /**
         * Recycled
         * Moved to Recycle Bin
         */
        Recycled?: boolean;
        /**
         * Refined Estimate
         * The Refined Estimate for a Portfolio Item
         */
        RefinedEstimate?: number;
        /**
         * Risk Score
         * A Non-Negative Integer representing risk.
         */
        RiskScore?: number;
        /**
         * Risks
         * The Risks affecting this work item
         */
        Risks?: Risk[];
        /**
         * RR/OE Value
         * The WSJF Reduced Risk/Opportunity Enablement Value for a Portfolio Item (minimum value is 1)
         */
        RROEValue?: number;
        /**
         * State
         * Kanban state for this Portfolio Item.
         */
        State?: State;
        /**
         * State Changed Date
         * The timestamp of the last state change.
         */
        StateChangedDate?: Date;
        /**
         * Time Criticality
         * The WSJF Time Criticality for a Portfolio Item (minimum value is 1)
         */
        TimeCriticality?: number;
        /**
         * Un-Estimated Leaf Story Count
         * Count of un-estimated leaf user stories (stories without children) associated with this Portfolio Item.
         */
        UnEstimatedLeafStoryCount?: number;
        /**
         * User/Business Value
         * The WSJF User and/or Business Value for a Portfolio Item (minimum value is 1)
         */
        UserBusinessValue?: number;
        /**
         * Value Score
         * A Non-Negative Integer representing value.
         */
        ValueScore?: number;
        /**
         * WSJF Score
         * The WSJF Score for a Portfolio Item
         */
        WSJFScore?: number;
    }
    /**
     * PortfolioItemPredecessorRelationship
     * Represents a relationship where the predecessor proceeds another PortfolioItem
     *
     */
    interface PortfolioItemPredecessorRelationship extends WorkspaceDomainObject {
        /**
         * Predecessor
         * The predecessor of the portfolio item.
         */
        Predecessor?: PortfolioItem;
        /**
         * Successor
         * The successor of the portfolio item.
         */
        Successor?: PortfolioItem;
    }
    /**
     * Preference
     * Preference
     *
     */
    interface Preference extends PersistableObject {
        /**
         * App Id
         * The application id for the preference
         */
        AppId?: number;
        /**
         * Name
         * The Name of the Preference
         */
        Name?: string;
        /**
         * Project
         * The Project that this preference is specific to.
         */
        Project?: Project;
        /**
         * Type
         * The Type of the Preference
         */
        Type?: string;
        /**
         * User
         * The User that this preference is specific to.
         */
        User?: User;
        /**
         * Value
         * The Value of the Preference
         */
        Value?: string;
        /**
         * Workspace
         * The Workspace that this preference is specific to.
         */
        Workspace?: Workspace;
    }
    /**
     * Preliminary Estimate
     * Sizing/Estimation for Portfolio Items.
     *
     */
    interface PreliminaryEstimate extends WorkspaceDomainObject {
        /**
         * Description
         * The description of this preliminary estimate
         */
        Description?: string;
        /**
         * Name
         * The name of this preliminary estimate
         */
        Name?: string;
        /**
         * Revision History
         * A reference to the revision history (read-only) of this state.
         */
        RevisionHistory?: RevisionHistory;
        /**
         * Value
         * A non-negative number that provides a quantitative value for the estimate
         */
        Value?: number;
    }
    /**
     * Profile Image
     * null
     *
     */
    interface ProfileImage extends DomainObject {
        /**
         * Content
         * Binary content of the profile image
         */
        Content?: string;
    }
    /**
     * Project
     * null
     *
     */
    interface Project extends Scope {
        /**
         * Build Definitions
         * Collection of build definitions with this project
         */
        BuildDefinitions?: BuildDefinition[];
        /**
         * Children
         * The children of the project (read-only collection)
         */
        Children?: Project[];
        /**
         * Description
         * Project description
         */
        Description?: string;
        /**
         * Editors
         * Users who have editor permissions for the project
         */
        Editors?: User[];
        /**
         * Iterations
         * Collection of iterations associated with this project
         */
        Iterations?: Iteration[];
        /**
         * Milestones
         * The milestones associated with this project
         */
        Milestones?: Milestone[];
        /**
         * Name
         * Project name
         */
        Name?: string;
        /**
         * Notes
         * Project notes
         */
        Notes?: string;
        /**
         * Owner
         * Owner of this project
         */
        Owner?: User;
        /**
         * Parent
         * The parent of the project.
         */
        Parent?: Project;
        /**
         * Releases
         * Collection of releases associated with this project
         */
        Releases?: Release[];
        /**
         * Revision History
         * Revision history
         */
        RevisionHistory?: RevisionHistory;
        /**
         * Schema Version
         * The current schema version for this project
         */
        SchemaVersion?: string;
        /**
         * State
         * State of this project
         */
        State?: string;
        /**
         * Team Members
         * Team Members
         */
        TeamMembers?: User[];
        /**
         * Viewers
         * Users who have any permissions for the project
         */
        Viewers?: User[];
        /**
         * Workspace
         * A reference to the workspace an object is associated with.  This field can only be set during object creation.
         */
        Workspace?: Workspace;
    }
    /**
     * Project Permission
     * Project Permission
     *
     */
    interface ProjectPermission extends UserPermission {
        /**
         * Project
         * UserPermission project
         */
        Project?: Project;
        /**
         * Workspace
         * UserPermission workspace.
         */
        Workspace?: Workspace;
    }
    /**
     * Pull Request
     * PullRequest
     *
     */
    interface PullRequest extends Connection {
        /**
         * Artifact
         * The artifact this connection belongs to.
         */
        Artifact?: Artifact;
        /**
         * External FormattedId
         * Pull Request externalFormattedId
         */
        ExternalFormattedId?: string;
        /**
         * External ID
         * Pull Request External ID
         */
        ExternalID?: string;
        /**
         * Project
         * The project this connection is associated with.
         */
        Project?: Project;
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
        /**
         * Deleted By
         * The person who deleted the artifact
         */
        DeletedBy?: User;
        /**
         * Deletion Date
         * The date the object was deleted
         */
        DeletionDate?: Date;
        /**
         * ID
         * The identifier for the deleted artifact
         */
        ID?: string;
        /**
         * Name
         * The name of the deleted artifact
         */
        Name?: string;
        /**
         * Type
         * The type of the deleted artifact
         */
        Type?: TypeDefinition;
    }
    /**
     * Release
     * null
     *
     */
    interface Release extends WorkspaceDomainObject {
        /**
         * Accepted
         * The accepted total for this release.
         */
        Accepted?: number;
        /**
         * Children Planned Velocity
         * Planned velocity for all "like releases" in child projects
         */
        ChildrenPlannedVelocity?: number;
        /**
         * Gross Estimate Conversion Ratio
         * Conversion ration for converting iteration-level estimates to release-level estimates
         */
        GrossEstimateConversionRatio?: number;
        /**
         * Name
         * Release name
         */
        Name?: string;
        /**
         * Notes
         * Notes on the Release
         */
        Notes?: string;
        /**
         * Plan Estimate
         * The total plan estimates for this release.
         */
        PlanEstimate?: number;
        /**
         * Planned Velocity
         * Planned velocity for this release
         */
        PlannedVelocity?: number;
        /**
         * Project
         * The project this iteration is associated with.  This is only valid during creation, not for update.
         */
        Project?: Project;
        /**
         * Release Backlog Items Count
         * The number of artifacts scheduled into this release, but are not scheduled into an iteration
         */
        ReleaseBacklogItemsCount?: number;
        /**
         * Release Date
         * Release date
         */
        ReleaseDate?: Date;
        /**
         * Release Start Date
         * Release start date
         */
        ReleaseStartDate?: Date;
        /**
         * Revision History
         * Revision history
         */
        RevisionHistory?: RevisionHistory;
        /**
         * State
         * State of this release
         */
        State?: string;
        /**
         * Task Actual Total
         * The total of task actuals for this release.
         */
        TaskActualTotal?: number;
        /**
         * Task Estimate Total
         * The total of task estimates for this release.
         */
        TaskEstimateTotal?: number;
        /**
         * Task Remaining Total
         * The total of task hours remaining for this release.
         */
        TaskRemainingTotal?: number;
        /**
         * Theme
         * Release theme
         */
        Theme?: string;
        /**
         * Version
         * Version number of this release
         */
        Version?: string;
        /**
         * Work Products
         * Items scheduled in this release
         */
        WorkProducts?: Artifact[];
    }
    /**
     * Release Cumulative Flow Data
     * This read-only object contains statistical data about a release.
     *
     */
    interface ReleaseCumulativeFlowData extends CumulativeFlowData {
        /**
         * Release Object ID
         * This is the Object ID of the release this data object is associated with
         */
        ReleaseObjectID?: number;
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
        /**
         * Description
         * Revision description, a description of changes made in this revision.
         */
        Description?: string;
        /**
         * Revision History
         * The Revision History object that holds this Revision
         */
        RevisionHistory?: RevisionHistory;
        /**
         * Revision Number
         * Revision number
         */
        RevisionNumber?: number;
        /**
         * User
         * The user name (login name) of the user who made the change resulting in this revision.
         */
        User?: User;
    }
    /**
     * Revision History
     * null
     *
     */
    interface RevisionHistory extends WorkspaceDomainObject {
        /**
         * Revisions
         * A read-only list of revisions.
         */
        Revisions?: Revision[];
    }
    /**
     * Risk
     * null
     *
     */
    interface Risk extends SchedulableArtifact {
        /**
         * Attachments
         * Attachments associated with this risk
         */
        Attachments?: Attachment[];
        /**
         * Calculated Risk
         * The product of the Risk's Probability and Impact.
         */
        CalculatedRisk?: number;
        /**
         * Exposure
         * Exposure of the risk in days as a product of probability percent and size of loss.
         */
        Exposure?: number;
        /**
         * Impact
         * Risk Impact
         */
        Impact?: string;
        /**
         * Probability
         * Risk Probability
         */
        Probability?: string;
        /**
         * Recycled
         * Moved to Recycle Bin
         */
        Recycled?: boolean;
        /**
         * Resolution
         * Risk resolution.
         */
        Resolution?: string;
        /**
         * Response
         * Risk Response: Resolved, Owned, Accepted, or Mitigated
         */
        Response?: string;
        /**
         * Size Of Loss
         * The size of loss in days that this risk poses to the train.
         */
        SizeOfLoss?: number;
        /**
         * State
         * Risk State: Open or Closed
         */
        State?: string;
        /**
         * Submitted By
         * The user that submitted this risk
         */
        SubmittedBy?: User;
        /**
         * Tasks
         * Tasks associated with this Risk. Can be thought of as actions to be taken on a risk.
         */
        Tasks?: Task[];
        /**
         * Work Items Affected
         * The work items affected by this risk
         */
        WorkItemsAffected?: RankableArtifact[];
    }
    /**
     * SCMRepository
     * SCMRepository
     *
     */
    interface SCMRepository extends WorkspaceDomainObject {
        /**
         * Description
         * The description of the SCMRepository
         */
        Description?: string;
        /**
         * Name
         * The name of the SCMRepository
         */
        Name?: string;
        /**
         * Projects
         * Projects this SCMRepository is associated with
         */
        Projects?: Project[];
        /**
         * SCM Type
         * The Type of the SCMRepository
         */
        SCMType?: string;
        /**
         * Uri
         * The URI of the SCMRepository
         */
        Uri?: string;
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
        /**
         * Last Result
         * The last result.  This is automatically calculated off of the set of scheduled test case results.
         */
        LastResult?: TestCaseResult;
        /**
         * Test Case
         * The test case that has been scheduled.
         */
        TestCase?: TestCase;
        /**
         * Test Set
         * The parent test set.
         */
        TestSet?: TestSet;
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
        /**
         * Attribute Type
         * The type of the attribute.
         */
        AttributeType?: string;
        /**
         * Child Project Hidden Count
         * Number of child projects of the specified Scope, in which the Attribute Definition is Hidden
         */
        ChildProjectHiddenCount?: number;
        /**
         * Child Project Visible Count
         * Number of child projects of the specified Scope, in which the Attribute Definition is Visible
         */
        ChildProjectVisibleCount?: number;
        /**
         * Constrained
         * Is the Attribute constrained.
         */
        Constrained?: boolean;
        /**
         * Custom
         * Is the Attribute custom.
         */
        Custom?: boolean;
        /**
         * Hidden
         * Is the Attribute hidden.
         */
        Hidden?: boolean;
        /**
         * Multivalue
         * Is this a multivalue collection type
         */
        Multivalue?: boolean;
        /**
         * Name
         * The name of this Scoped Attribute Definition.
         */
        Name?: string;
        /**
         * Required
         * Is the Attribute required.
         */
        Required?: boolean;
        /**
         * Shared Across Work Items
         * Is this Attribute Definition shared across multiple Type Definitions?
         */
        SharedAcrossWorkItems?: boolean;
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
         * Visibility On Child Projects
         * The visibility of the Attribute Definition on child projects of the selected scope.  Allowed values: "visible", "mixed", "hidden".  For updates, if the scope is a workspace and not a project, this attribute is not used because workspace settings always apply to all child projects; if it is given, it will be ignored and result in a warning.  For projects, you may only update this value to "mixed" if it is already mixed (by virtue of at least one child project having the field visible, and at least one child project having the field hidden).
         */
        VisibilityOnChildProjects?: string;
        /**
         * Visible Only To Admins
         * Is the Attribute visible only to subscription and workspace admins
         */
        VisibleOnlyToAdmins?: boolean;
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
         * Last Update Date
         * The last update date of a slice.  It is automatically assigned when an object is created or updated.
         */
        LastUpdateDate?: Date;
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
        /**
         * AcceptedMarker
         * Is this state the accepted state?
         */
        AcceptedMarker?: boolean;
        /**
         * Description
         * The state description
         */
        Description?: string;
        /**
         * Enabled
         * Is enabled indicator for a State
         */
        Enabled?: boolean;
        /**
         * InProgressMarker
         * Is this state the in progress state?
         */
        InProgressMarker?: boolean;
        /**
         * Name
         * Name of the State.
         */
        Name?: string;
        /**
         * Order Index
         * Order index for this State.
         */
        OrderIndex?: number;
        /**
         * Revision History
         * A reference to the revision history (read-only) of this state.
         */
        RevisionHistory?: RevisionHistory;
        /**
         * TypeDef
         * Type definition for the state
         */
        TypeDef?: TypeDefinition;
        /**
         * WIP Limit
         * Work in progress limit for a State
         */
        WIPLimit?: number;
    }
    /**
     * Subscription
     * null
     *
     */
    interface Subscription extends PersistableObject {
        /**
         * Api Keys Enabled
         * Whether api keys functionality is enabled for this subscription.
         */
        ApiKeysEnabled?: boolean;
        /**
         * Authentication Policy
         * The Authentication Policy for this subscription.
         */
        AuthenticationPolicy?: string;
        /**
         * Authentication Policy Url
         * The Authentication Url for this subscription
         */
        AuthenticationPolicyUrl?: string;
        /**
         * CORS Enabled
         * Whether Cross-Origin Resource Sharing (CORS) functionality is enabled for this subscription. False by default.
         */
        CORSEnabled?: boolean;
        /**
         * Custom HTML app Enabled
         * Custom HTML app Enabled
         */
        CustomHTMLappEnabled?: boolean;
        /**
         * Custom SSO Logout URL
         * Custom SSO Logout URL
         */
        CustomSSOLogoutURL?: string;
        /**
         * Disabled Users Count
         * The number of disabled users on this subscription.
         */
        DisabledUsersCount?: number;
        /**
         * Email Enabled
         * Whether Email functionality is enabled for this subscription.
         */
        EmailEnabled?: boolean;
        /**
         * Enabled Users Count
         * The number of enabled users on this subscription.
         */
        EnabledUsersCount?: number;
        /**
         * Expiration Date
         * The date on which the trial period expires
         */
        ExpirationDate?: Date;
        /**
         * Is Managed Mashups Enabled
         * Custom HTML app Enabled
         */
        IsManagedMashupsEnabled?: boolean;
        /**
         * isSsoRequired
         * Is SSO mandatory for this Subscription.
         */
        isSsoRequired?: boolean;
        /**
         * JSONP Enabled
         * Whether JSONP functionality is enabled for this subscription.
         */
        JSONPEnabled?: boolean;
        /**
         * Maximum Custom User Fields
         * The maximum number of custom user fields allowed for this subscription.
         */
        MaximumCustomUserFields?: number;
        /**
         * Maximum login attempts
         * The maximum number of login attempts until user is locked out.
         */
        Maximumloginattempts?: number;
        /**
         * Maximum Private Tabs
         * The maximum number private tabs allowed for this subscription.
         */
        MaximumPrivateTabs?: number;
        /**
         * Maximum Projects
         * The maximum number of projects allowed for this subscription.
         */
        MaximumProjects?: number;
        /**
         * Maximum Shared Tabs
         * The maximum number shared tabs allowed for this subscription.
         */
        MaximumSharedTabs?: number;
        /**
         * Maximum Workspaces
         * The maximum number of workspaces allowed for this subscription.
         */
        MaximumWorkspaces?: number;
        /**
         * Modules
         * Modules for the subscription.
         */
        Modules?: string;
        /**
         * Name
         * Subscription name
         */
        Name?: string;
        /**
         * Paid Seats
         * The maximum number of paid seats allowed for this subscription.
         */
        PaidSeats?: number;
        /**
         * Password Expiration Days
         * The number of days until a users password expires
         */
        PasswordExpirationDays?: number;
        /**
         * Previous Password Count
         * The number of previous passwords to remember. 0 means none.
         */
        PreviousPasswordCount?: number;
        /**
         * Project Hierarchy Enabled
         * Whether project hierarchies are allowed for this subscription.
         */
        ProjectHierarchyEnabled?: boolean;
        /**
         * RallyNext
         * Whether subscription is using WSAPI Version 4.
         */
        RallyNext?: boolean;
        /**
         * Revision History
         * A reference to the revision history (read-only) of the user.
         */
        RevisionHistory?: RevisionHistory;
        /**
         * Seats Count
         * The number of seats on this subscription.
         */
        SeatsCount?: number;
        /**
         * Session Timeout Seconds
         * Subscription-level user session timeout time in seconds.
         */
        SessionTimeoutSeconds?: number;
        /**
         * SSO Redirect Enabled
         * Whether api keys functionality is enabled for this subscription.
         */
        SSORedirectEnabled?: boolean;
        /**
         * SSO User Exceptions
         * A list of users who are on the SSO exception list for this subscription.
         */
        SSOUserExceptions?: User[];
        /**
         * Story Hierarchy Enabled
         * Whether story hierarchies are allowed for this subscription.
         */
        StoryHierarchyEnabled?: boolean;
        /**
         * Story Hierarchy Type
         * Indicates subscription story hierarchy type
         */
        StoryHierarchyType?: string;
        /**
         * Subscription ID
         * Subscription ID
         */
        SubscriptionID?: number;
        /**
         * Subscription State
         * The state of the subscription (active/inactive)
         */
        SubscriptionState?: string;
        /**
         * Subscription Type
         * The Type/Edition of the Subscription
         */
        SubscriptionType?: string;
        /**
         * Tags
         * Subscription tags
         */
        Tags?: SubscriptionTag[];
        /**
         * Termination Date
         * The date on which the inactive subscription will be terminated
         */
        TerminationDate?: Date;
        /**
         * Unpaid Seats
         * The maximum number of unpaid seats allowed for this subscription.
         */
        UnpaidSeats?: number;
        /**
         * User Count
         * The number of users for this subscription.
         */
        UserCount?: number;
        /**
         * User Lockout Time
         * Amount of time that a user will be locked out.
         */
        UserLockoutTime?: number;
        /**
         * Webhooks Enabled
         * Whether webhooks are enabled for this subscription.
         */
        WebhooksEnabled?: boolean;
        /**
         * Workspaces
         * A list of workspaces in this subscription.
         */
        Workspaces?: Workspace[];
        /**
         * Zuul ID
         * The Zuul Id for a Subscription.
         */
        ZuulID?: string;
    }
    /**
     * Subscription Tag
     * Subscription Tag
     *
     */
    interface SubscriptionTag extends DomainObject {
        /**
         * Name
         * The subscription tag name
         */
        Name?: string;
    }
    /**
     * Tag
     * Tag
     *
     */
    interface Tag extends WorkspaceDomainObject {
        /**
         * Archived
         * Flag indicating that this tag has been archived
         */
        Archived?: boolean;
        /**
         * Name
         * The tag name
         */
        Name?: string;
    }
    /**
     * Task
     * null
     *
     */
    interface Task extends Artifact {
        /**
         * Actuals
         * Actual amount of time spent completing this task
         */
        Actuals?: number;
        /**
         * Attachments
         * Attachments associated with this task
         */
        Attachments?: Attachment[];
        /**
         * Blocked
         * Flag to determine if this task is blocked
         */
        Blocked?: boolean;
        /**
         * Blocked Reason
         * The reason this artifact is blocked
         */
        BlockedReason?: string;
        /**
         * Drag And Drop Rank
         * Alphanumeric rank value
         */
        DragAndDropRank?: string;
        /**
         * Estimate
         * Estimate of time to complete this task
         */
        Estimate?: number;
        /**
         * Iteration
         * Iteration of the card this task is assigned to
         */
        Iteration?: Iteration;
        /**
         * Project
         * The project this task is associated with.
         */
        Project?: Project;
        /**
         * Recycled
         * Moved to Recycle Bin
         */
        Recycled?: boolean;
        /**
         * Release
         * Release of the card this task is assigned to
         */
        Release?: Release;
        /**
         * State
         * Task state
         */
        State?: string;
        /**
         * Task Index
         * Ordinal index of this task
         */
        TaskIndex?: number;
        /**
         * Time Spent
         * Time spent on task
         */
        TimeSpent?: number;
        /**
         * To Do
         * Amount of time left to complete this task
         */
        ToDo?: number;
        /**
         * Work Product
         * The work product that this task is associated with.
         */
        WorkProduct?: SchedulableArtifact;
    }
    /**
     * Test Case
     * null
     *
     */
    interface TestCase extends RankableArtifact {
        /**
         * Attachments
         * Attachments associated with this test case
         */
        Attachments?: Attachment[];
        /**
         * Defect Status
         * The status of the Defects associated with this artifact.
         */
        DefectStatus?: string;
        /**
         * Defects
         * The defects associated with the Test Case
         */
        Defects?: Defect[];
        /**
         * Drag And Drop Rank
         * Alphanumeric rank value
         */
        DragAndDropRank?: string;
        /**
         * Last Build
         * The last result build number.  This is automatically calculated off of the set of test case results.
         */
        LastBuild?: string;
        /**
         * Last Result
         * The last result.  This is automatically calculated off of the set of scheduled test case results.
         */
        LastResult?: TestCaseResult;
        /**
         * Last Run
         * The last result date.  This is automatically calculated off of the set of test case results.
         */
        LastRun?: Date;
        /**
         * Last Verdict
         * The last result verdict.  This is automatically calculated off of the set of test case results.
         */
        LastVerdict?: string;
        /**
         * Method
         * Is this a manual or automated test case.
         */
        Method?: string;
        /**
         * Objective
         * Objective of this test case
         */
        Objective?: string;
        /**
         * Package
         * Test case package
         */
        Package?: string;
        /**
         * Post Conditions
         * Post-conditions to expect once this test case is executed
         */
        PostConditions?: string;
        /**
         * Pre Conditions
         * Pre-conditions that should be setup before this test case is executed
         */
        PreConditions?: string;
        /**
         * Priority
         * Test case priority
         */
        Priority?: string;
        /**
         * Recycled
         * Moved to Recycle Bin
         */
        Recycled?: boolean;
        /**
         * Results
         * A collection of result objects for this test case
         */
        Results?: TestCaseResult[];
        /**
         * Risk
         * Test case risk
         */
        Risk?: string;
        /**
         * Steps
         * A collection of steps for this test case
         */
        Steps?: TestCaseStep[];
        /**
         * Test Folder
         * Test Folder
         */
        TestFolder?: TestFolder;
        /**
         * Test Folder Hierarchy
         * The Test Folder containing this Test Case. The top level Test Folder will appear first and the immediate parent of this Test Case will appear last.
         */
        TestFolderHierarchy?: TestFolder[];
        /**
         * Test Sets
         * The test sets containing this test case.
         */
        TestSets?: TestSet[];
        /**
         * Type
         * Type of test case (see allowed values)
         */
        Type?: string;
        /**
         * Validation Expected Result
         * Validation outcome
         */
        ValidationExpectedResult?: string;
        /**
         * Validation Input
         * Validation step
         */
        ValidationInput?: string;
        /**
         * Work Product
         * The work product that is is the subject of this test case (can only be a Requirement or a Defect).
         */
        WorkProduct?: SchedulableArtifact;
    }
    /**
     * Test Case Result
     * null
     *
     */
    interface TestCaseResult extends WorkspaceDomainObject {
        /**
         * Attachments
         * Attachments associated with this test case result
         */
        Attachments?: Attachment[];
        /**
         * Build
         * Build number for the build the test case was executed against to produce this result
         */
        Build?: string;
        /**
         * Date
         * Date that the test case was run to produce this result
         */
        Date?: Date;
        /**
         * Duration
         * Amount of time it took to run the test case that produced this result
         */
        Duration?: number;
        /**
         * Notes
         * Result notes, which is a rich-text field.
         */
        Notes?: string;
        /**
         * Project
         * The project this TestCaseResult is associated with.
         */
        Project?: Project;
        /**
         * Test Case
         * The test case that this is a result of
         */
        TestCase?: TestCase;
        /**
         * Test Set
         * The test set that this result belongs to.
         */
        TestSet?: TestSet;
        /**
         * Tester
         * The user that executed the test case to produce this result.
         */
        Tester?: User;
        /**
         * Verdict
         * Verdict of running the test case
         */
        Verdict?: string;
    }
    /**
     * Test Case Step
     * Test case step.
     *
     */
    interface TestCaseStep extends WorkspaceDomainObject {
        /**
         * Expected Result
         * Expected result after performing this test case step. This is not a required field but either ExpectedResult or Input must be specified.
         */
        ExpectedResult?: string;
        /**
         * Input
         * Expected input for this test case step. This is not a required field but either ExpectedResult or Input must be specified.
         */
        Input?: string;
        /**
         * Step Index
         * Ordinal index of this test case step
         */
        StepIndex?: number;
        /**
         * Test Case
         * The test case that this is a step of (can only be set on create)
         */
        TestCase?: TestCase;
    }
    /**
     * Test Folder
     * Test Folder
     *
     */
    interface TestFolder extends WorkspaceDomainObject {
        /**
         * Children
         * The child test folders.
         */
        Children?: TestFolder[];
        /**
         * Descendants
         * Combined collection of TestCases and Children
         */
        Descendants?: WorkspaceDomainObject[];
        /**
         * Description
         * Test Folder description
         */
        Description?: string;
        /**
         * Display Color
         * Display color for artifacts
         */
        DisplayColor?: string;
        /**
         * Formatted ID
         * The formatted ID for an object.  This is automatically assigned when an object is created and can never be changed.
         */
        FormattedID?: number;
        /**
         * Name
         * The name of the test folder
         */
        Name?: string;
        /**
         * Parent
         * The parent test folder.
         */
        Parent?: TestFolder;
        /**
         * Project
         * The project this artifact is associated with.
         */
        Project?: Project;
        /**
         * Recursive Test Cases
         * Collection of TestCases in this folder, its children, their children, and so on.
         */
        RecursiveTestCases?: TestCase[];
        /**
         * Test Cases
         * Test Cases
         */
        TestCases?: TestCase[];
        /**
         * Test Folder Status
         * The status of the Test cases associated with this test folder.
         */
        TestFolderStatus?: TestFolderStatus;
    }
    /**
     * Test Folder Status
     * Test Folder Status
     *
     */
    interface TestFolderStatus extends WorkspaceDomainObject {
        /**
         * Failed Count
         * The failed Test Case Count
         */
        FailedCount?: number;
        /**
         * No Result Count
         * The no results Test Case Count
         */
        NoResultCount?: number;
        /**
         * Others Count
         * The others Test Case Count
         */
        OthersCount?: number;
        /**
         * Passing Count
         * The passing Test Case Count
         */
        PassingCount?: number;
    }
    /**
     * Test Set
     * Test Set
     *
     */
    interface TestSet extends SchedulableArtifact {
        /**
         * Blocked
         * Flag to determine if this test set is blocked
         */
        Blocked?: boolean;
        /**
         * Blocked Reason
         * The reason this artifact is blocked
         */
        BlockedReason?: string;
        /**
         * Defect Status
         * The status of the Defects associated with this artifact.
         */
        DefectStatus?: string;
        /**
         * Drag And Drop Rank
         * Alphanumeric rank value
         */
        DragAndDropRank?: string;
        /**
         * Iteration
         * The iteration that this test set is scheduled in
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
         * Passing Test Case Count
         * Number of passing test cases.
         */
        PassingTestCaseCount?: number;
        /**
         * Plan Estimate
         * Plan estimate of this test set
         */
        PlanEstimate?: number;
        /**
         * Release
         * The release that this test set is scheduled in
         */
        Release?: Release;
        /**
         * ScheduledChildren
         * ScheduledChildren
         */
        ScheduledChildren?: Artifact[];
        /**
         * ScheduledTestCases
         * ScheduledTestCases
         */
        ScheduledTestCases?: ScheduledTestCase[];
        /**
         * Task Status
         * The status of the Tasks associated with this artifact.
         */
        TaskStatus?: string;
        /**
         * Tasks
         * Tasks associated with completing this test set.
         */
        Tasks?: Task[];
        /**
         * Test Case Count
         * Number of total test cases.
         */
        TestCaseCount?: number;
        /**
         * Test Case Status
         * The status of the TestCases associated with this artifact.
         */
        TestCaseStatus?: string;
        /**
         * Test Cases
         * Test Cases
         */
        TestCases?: TestCase[];
    }
    /**
     * Time Entry Item
     * Time Entry Item
     *
     */
    interface TimeEntryItem extends WorkspaceDomainObject {
        /**
         * Project
         * The project this time entry item is associated with
         */
        Project?: Project;
        /**
         * Project Display String
         * The project name this time entry item is associated with
         */
        ProjectDisplayString?: string;
        /**
         * Revision History
         * A reference to the revision history (read-only) of the artifact.
         */
        RevisionHistory?: RevisionHistory;
        /**
         * Task
         * The task this time entry item points to
         */
        Task?: Task;
        /**
         * Task Display String
         * The task this time entry item points to
         */
        TaskDisplayString?: string;
        /**
         * User
         * The user that created this Time Entry Item
         */
        User?: User;
        /**
         * Values
         * Collection of values for this item
         */
        Values?: TimeEntryValue[];
        /**
         * Week Start Date
         * The first date for this week Time Entry Item in GMT (YYYY-MM-DDT00:00:00Z).
         */
        WeekStartDate?: Date;
        /**
         * Work Product
         * The work product this time entry item points to
         */
        WorkProduct?: Artifact;
        /**
         * Work Product Display String
         * The work product this time entry item points to
         */
        WorkProductDisplayString?: string;
    }
    /**
     * Time Entry Value
     * Time Entry Value
     *
     */
    interface TimeEntryValue extends WorkspaceDomainObject {
        /**
         * Date Val
         * The date for this Time Entry Value in GMT (yyyy-MM-ddT00:00:00Z).
         */
        DateVal?: Date;
        /**
         * Hours
         * Hours for this Time Entry Value
         */
        Hours?: number;
        /**
         * Last Updated
         * The date that this Time Entry Value was last updated
         */
        LastUpdated?: Date;
        /**
         * Revision History
         * A reference to the revision history (read-only) of the artifact.
         */
        RevisionHistory?: RevisionHistory;
        /**
         * Time Entry Item
         * The Object ID of the Time Entry Item object this value belongs to
         */
        TimeEntryItem?: TimeEntryItem;
    }
    /**
     * Type Definition
     * This is metadata about each object type in the Web Services API.
     *
     */
    interface TypeDefinition extends WorkspaceDomainObject {
        /**
         * Abstract
         * Is this type abstract
         */
        Abstract?: boolean;
        /**
         * Attributes
         * Attributes on this type
         */
        Attributes?: AttributeDefinition[];
        /**
         * Copyable
         * Whether or not this type definition is copyable
         */
        Copyable?: boolean;
        /**
         * Creatable
         * Whether or not this type definition is creatable
         */
        Creatable?: boolean;
        /**
         * Deletable
         * Is this type deletable
         */
        Deletable?: boolean;
        /**
         * Display Name
         * Display Name
         */
        DisplayName?: string;
        /**
         * Element Name
         * Element Name
         */
        ElementName?: string;
        /**
         * ID Prefix
         * ID Prefix for artifacts of this type
         */
        IDPrefix?: string;
        /**
         * Name
         * Type Name
         */
        Name?: string;
        /**
         * Note
         * Note
         */
        Note?: string;
        /**
         * Ordinal
         * Ordinal value
         */
        Ordinal?: number;
        /**
         * Parent
         * Parent Type
         */
        Parent?: TypeDefinition;
        /**
         * Queryable
         * Is this type queryable
         */
        Queryable?: boolean;
        /**
         * Read Only
         * Is this type read-only
         */
        ReadOnly?: boolean;
        /**
         * Restorable
         * Is Restorable
         */
        Restorable?: boolean;
        /**
         * Revision History
         * A reference to the revision history (read-only) of this type.
         */
        RevisionHistory?: RevisionHistory;
        /**
         * TypePath
         * A path to the Type Definition, including parent name if necessary
         */
        TypePath?: string;
        /**
         * User Listable
         * Is this type user listable
         */
        UserListable?: boolean;
    }
    /**
     * User
     * null
     *
     */
    interface User extends DomainObject {
        /**
         * Account Locked Until
         * Account locked until timestamp.
         */
        AccountLockedUntil?: Date;
        /**
         * Artifacts Created
         * The artifacts Created by this User
         */
        ArtifactsCreated?: Artifact[];
        /**
         * Artifacts Owned
         * The artifacts owned by this User
         */
        ArtifactsOwned?: Artifact[];
        /**
         * Cost Center
         * Cost Center for User
         */
        CostCenter?: string;
        /**
         * Date Format
         * User's date format.  If this is null, the system uses the user's current workspace to get the date format.
         */
        DateFormat?: string;
        /**
         * Date Time Format
         * User's date+time format.  If this is null, the system uses the user's current workspace to get the date+time format.
         */
        DateTimeFormat?: string;
        /**
         * Default Detail Page To Viewing Mode
         * Display editable detail pages in viewing mode by default.
         */
        DefaultDetailPageToViewingMode?: boolean;
        /**
         * Default Project
         * User's default project. Sets default workspace to the project's workspace.
         */
        DefaultProject?: Project;
        /**
         * Deleted
         * Flag to determine if this User is deleted
         */
        Deleted?: boolean;
        /**
         * Department
         * Department of User
         */
        Department?: string;
        /**
         * Disabled
         * Flag to determine if this User is disabled
         */
        Disabled?: boolean;
        /**
         * Display Name
         * Display Name
         */
        DisplayName?: string;
        /**
         * Email Address
         * User's email address.
         */
        EmailAddress?: string;
        /**
         * Email Notification Enabled
         * Flag to determine if email notifications are enabled
         */
        EmailNotificationEnabled?: boolean;
        /**
         * Failed Login Attempts
         * Failed Login attempts
         */
        FailedLoginAttempts?: number;
        /**
         * First Name
         * First Name
         */
        FirstName?: string;
        /**
         * Investment Admin
         * Flag to determine if the user is an investment admin
         */
        InvestmentAdmin?: boolean;
        /**
         * is on SSO Exception List
         * Flag to determine if user is on the SSO exception list
         */
        isonSSOExceptionList?: boolean;
        /**
         * Is Provisioning User
         * Is the current user a provisioning user.
         */
        IsProvisioningUser?: boolean;
        /**
         * Is SLM Admin
         * Is the current user a SLM admin.
         */
        IsSLMAdmin?: boolean;
        /**
         * Landing Page
         * The default landing page for a User.
         */
        LandingPage?: string;
        /**
         * Language
         * The language for the user profile
         */
        Language?: string;
        /**
         * Last Active Date
         * The last date that the user made a successful request.
         */
        LastActiveDate?: Date;
        /**
         * Last Login Date
         * The last time the user successfully logged in to this Subscription, or blank if the user has never logged in successfully.
         */
        LastLoginDate?: Date;
        /**
         * Last Name
         * Last Name
         */
        LastName?: string;
        /**
         * Last Password Update Date
         * The date the password was last changed.
         */
        LastPasswordUpdateDate?: Date;
        /**
         * Last System Time Zone Name
         * User's last known system timezone name.
         */
        LastSystemTimeZoneName?: string;
        /**
         * Ldap Uuid
         * The LDAP UUID for a User.
         */
        LdapUuid?: string;
        /**
         * Locale
         * The locale for the user profile
         */
        Locale?: string;
        /**
         * Middle Name
         * Middle Name
         */
        MiddleName?: string;
        /**
         * Network ID
         * Network ID
         */
        NetworkID?: string;
        /**
         * Office Location
         * Office Location of User
         */
        OfficeLocation?: string;
        /**
         * Onprem Ldap Username
         * On-Premise LDAP Username
         */
        OnpremLdapUsername?: string;
        /**
         * Password Expires
         * Number of days until user password expires
         */
        PasswordExpires?: number;
        /**
         * Phone
         * Phone Number
         */
        Phone?: string;
        /**
         * Planner
         * Flag to determine if the user is a planner
         */
        Planner?: boolean;
        /**
         * Profile Image
         * Content object of the profile image
         */
        ProfileImage?: ProfileImage;
        /**
         * Project Scope Down
         * Should show work for child projects
         */
        ProjectScopeDown?: boolean;
        /**
         * Project Scope Up
         * Should show work for parent projects
         */
        ProjectScopeUp?: boolean;
        /**
         * Revision History
         * A reference to the revision history (read-only) of the user.
         */
        RevisionHistory?: RevisionHistory;
        /**
         * Role
         * User role
         */
        Role?: string;
        /**
         * session Timeout
         * Session timeout for User
         */
        sessionTimeout?: number;
        /**
         * Session Timeout Warning
         * A flag to show the session timeout popup in the UI before a user is automatically logged out.
         */
        SessionTimeoutWarning?: boolean;
        /**
         * Short Display Name
         * Short Display Name
         */
        ShortDisplayName?: string;
        /**
         * Subscription Admin
         * Is the current user a subscription admin.
         */
        SubscriptionAdmin?: boolean;
        /**
         * Subscription ID
         * Subscription ID
         */
        SubscriptionID?: number;
        /**
         * Subscription Permission
         * The maximum permission level of a user for the subscription.
         */
        SubscriptionPermission?: string;
        /**
         * subscriptionOid
         * This is the object ID of the subscription to which the user belongs.
         */
        subscriptionOid?: number;
        /**
         * Team Memberships
         * Team Memberships
         */
        TeamMemberships?: Project[];
        /**
         * User Name
         * User name (login name)
         */
        UserName?: string;
        /**
         * User Permissions
         * Collection of user permissions for this user
         */
        UserPermissions?: UserPermission[];
        /**
         * User Profile
         * A reference to the profile of this user
         */
        UserProfile?: UserProfile;
        /**
         * Workspace Permission
         * The maximum permission level of a user for the current workspace.
         */
        WorkspacePermission?: string;
        /**
         * Zuul ID
         * The Zuul Id for a User.
         */
        ZuulID?: string;
    }
    /**
     * User Iteration Capacity
     * This is the User Iteration Capacity type
     *
     */
    interface UserIterationCapacity extends WorkspaceDomainObject {
        /**
         * Capacity
         * User Iteration Capacity capacity
         */
        Capacity?: number;
        /**
         * Iteration
         * User Iteration Capacity iteration
         */
        Iteration?: Iteration;
        /**
         * Load
         * User Iteration Capacity Load
         */
        Load?: number;
        /**
         * Project
         * User Iteration Capacity project
         */
        Project?: Project;
        /**
         * Task Estimates
         * User Iteration Capacity Task Estimates
         */
        TaskEstimates?: number;
        /**
         * User
         * User Iteration Capacity owner
         */
        User?: User;
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
        /**
         * Date Format
         * User's date format.  If this is null, the system uses the user's current workspace to get the date format.
         */
        DateFormat?: string;
        /**
         * Date Time Format
         * User's date+time format.  If this is null, the system uses the user's current workspace to get the date+time format.
         */
        DateTimeFormat?: string;
        /**
         * Default Detail Page To Viewing Mode
         * Display editable detail pages in viewing mode by default.
         */
        DefaultDetailPageToViewingMode?: boolean;
        /**
         * Default Project
         * User's default project.
         */
        DefaultProject?: Project;
        /**
         * Default Workspace
         * User's default workspace.
         */
        DefaultWorkspace?: Workspace;
        /**
         * Email Notification Enabled
         * Is email notification enabled.
         */
        EmailNotificationEnabled?: boolean;
        /**
         * Language
         * The language for the user profile
         */
        Language?: string;
        /**
         * Locale
         * The locale for the user profile
         */
        Locale?: string;
        /**
         * Session Timeout Seconds
         * User session timeout time in seconds.
         */
        SessionTimeoutSeconds?: number;
        /**
         * Session Timeout Warning
         * A flag to show the session timeout popup in the UI before a user is automatically logged out.
         */
        SessionTimeoutWarning?: boolean;
        /**
         * Time Zone
         * This attribute is DEPRECATED. This value defaults to WorkspaceConfiguration#TimeZone.
         */
        TimeZone?: string;
        /**
         * User
         * User of this profile.
         */
        User?: User;
        /**
         * Welcome Page Hidden
         * Is the welcome page shown when the user first logs in or not.
         */
        WelcomePageHidden?: boolean;
    }
    /**
     * Web Link Definition
     * This is metadata about weblink attributes on objects types in the Web Services API
     *
     */
    interface WebLinkDefinition extends AttributeDefinition {
        /**
         * Display Preference
         * Flag to set whether the link opens in a new window/tab or navigates away from the current page
         */
        DisplayPreference?: string;
        /**
         * URL
         * WebLink URL
         */
        URL?: string;
    }
    /**
     * WebTab
     * WebTab
     *
     */
    interface WebTab extends WorkspaceDomainObject {
        /**
         * dashboard
         * dashboard
         */
        dashboard?: Dashboard;
        /**
         * hasAdminAccessInEverySharedProject
         * Flag to see if current user has admin access to all shared projects on webtab
         */
        hasAdminAccessInEverySharedProject?: boolean;
        /**
         * name
         * Web Tab Name
         */
        name?: string;
        /**
         * pageId
         * PageId
         */
        pageId?: string;
        /**
         * pageUri
         * PageUri
         */
        pageUri?: string;
        /**
         * Porthole ID
         * Porthole ID
         */
        PortholeID?: string;
        /**
         * Profile
         * Profile
         */
        Profile?: UserProfile;
        /**
         * Project OID
         * Project OID
         */
        ProjectOID?: number;
        /**
         * shared
         * Whether or not this webtab is shared
         */
        shared?: boolean;
        /**
         * sharedProjects
         * sharedProjects
         */
        sharedProjects?: Project[];
        /**
         * sharedProjectsCount
         * sharedProjectsCount
         */
        sharedProjectsCount?: number;
        /**
         * Type
         * The Type of the Web Tab. Either Dashboard or Widget
         */
        Type?: string;
    }
    /**
     * Workspace
     * null
     *
     */
    interface Workspace extends Scope {
        /**
         * Children
         * The direct descendants of the workspace (projects)
         */
        Children?: Project[];
        /**
         * Description
         * Workspace description
         */
        Description?: string;
        /**
         * Name
         * Workspace name
         */
        Name?: string;
        /**
         * Notes
         * Workspace notes
         */
        Notes?: string;
        /**
         * Owner
         * Owner of this workspace
         */
        Owner?: User;
        /**
         * Projects
         * A collection of projects in this workspace
         */
        Projects?: Project[];
        /**
         * Revision History
         * Revision history
         */
        RevisionHistory?: RevisionHistory;
        /**
         * Schema Version
         * The current schema version for this workspace
         */
        SchemaVersion?: string;
        /**
         * State
         * State of this workspace
         */
        State?: string;
        /**
         * Style
         * Style of this workspace.  This field is required when creating workspaces, but cannot be updated afterwords.
         */
        Style?: string;
        /**
         * Type Definitions
         * Type Definitions for this workspace
         */
        TypeDefinitions?: TypeDefinition[];
        /**
         * Workspace Configuration
         * A reference to the configuration of this workspace
         */
        WorkspaceConfiguration?: WorkspaceConfiguration;
    }
    /**
     * Workspace Configuration
     * null
     *
     */
    interface WorkspaceConfiguration extends WorkspaceDomainObject {
        /**
         * Build and Changeset Enabled
         * Is Build and Changeset enabled for the Workspace or not.
         */
        BuildandChangesetEnabled?: boolean;
        /**
         * Date Format
         * Date format for the workspace
         */
        DateFormat?: string;
        /**
         * Date Time Format
         * Date+time format for the workspace
         */
        DateTimeFormat?: string;
        /**
         * Drag Drop Ranking Enabled
         * Whether or not drag and drop ranking is enabled for this workspace.
         */
        DragDropRankingEnabled?: boolean;
        /**
         * Iteration Estimate Unit Name
         * Release-level estimation unit name
         */
        IterationEstimateUnitName?: string;
        /**
         * Ppm Connection
         * A reference to the ppm connection
         */
        PpmConnection?: PPMConnection;
        /**
         * Release Estimate Unit Name
         * Iteration-level estimation unit name
         */
        ReleaseEstimateUnitName?: string;
        /**
         * Task Unit Name
         * Release-level estimation unit name
         */
        TaskUnitName?: string;
        /**
         * Time Tracker Enabled
         * Is the Time Tracker module enabled for the Workspace or not.
         */
        TimeTrackerEnabled?: boolean;
        /**
         * Time Zone
         * Timezone of the workspace
         */
        TimeZone?: string;
        /**
         * Work Days
         * Workdays for the workspace
         */
        WorkDays?: string;
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
        /**
         * Workspace
         * UserPermission workspace.
         */
        Workspace?: Workspace;
    }
}
