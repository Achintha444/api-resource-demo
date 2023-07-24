# Issue Type
#
# + id - Unique ID of the Issue
# + name - Name of the Issue
# + description - Description of the Issue
public type Issue record {
    readonly string id;
    string name;
    string description;
};

public type RecieveIssue record {
    string name;
    string description;
};
