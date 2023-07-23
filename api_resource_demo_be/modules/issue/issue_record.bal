import api_resource_demo_be.types;

# Issue object
# This will keep track of all the issues that are created
public table<types:Issue> key(id) issuesTable = table[
    {
        id: "sampiss1",
        name: "Sample Issue One",
        description: "Issue Description"
    },
    {
        id: "sampiss2",
        name: "Sample Issue Two",
        description: "Issue Description Two"
    },
    {
        id: "sampiss3",
        name: "Sample Issue Three",
        description: "Issue Description Two"
    }
];
