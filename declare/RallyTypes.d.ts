
 interface TypeDef {
  _ref: string;
  _refObjectUUID: string;
  _refObjectName: string;
  _p: string;
  CreationDate: string;
  _CreatedAt: string;
  ObjectID: number;
  ObjectUUID: string;
  VersionId: string;
  Subscription: Subscription;
  Workspace: Subscription;
  Abstract: boolean;
  Attributes: Attributes;
  Copyable: boolean;
  Creatable: boolean;
  Deletable: boolean;
  DisplayName: string;
  ElementName: string;
  IDPrefix: string;
  Name: string;
  Note: string;
  Ordinal: number;
  Parent: Subscription;
  Queryable: boolean;
  ReadOnly: boolean;
  Restorable: boolean;
  RevisionHistory: RevisionHistory;
  TypePath: string;
  UserListable: boolean;
  _type: string;
}

 interface RevisionHistory {
  _ref: string;
  _refObjectUUID: string;
  _type: string;
}

 interface Attributes {
  _ref: string;
  _type: string;
  Count: number;
}

 interface Subscription {
  _ref: string;
  _refObjectUUID: string;
  _refObjectName: string;
  _type: string;
}
export = TypeDef;