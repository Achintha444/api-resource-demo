import ballerina/http;
import ballerina/uuid;
import ballerina/io;
import api_resource_demo_be.util;
import api_resource_demo_be.types;
import api_resource_demo_be.issue;

public listener http:Listener api = new (util:getPort(),
    interceptors = [new AuthInterceptor()]
);

@http:ServiceConfig {
    cors: {
        allowOrigins: ["*"],
        allowCredentials: true,
        maxAge: 84900
    }
}

service / on api {

    resource function get issues(http:RequestContext ctx) returns types:Issue[]|error {

        boolean isAuthorized = util:authorize(ctx, util:getIssueScopes().get("view"));

        if !isAuthorized {
            return error("User is not authorized to view issues");
        } else {
            types:Issue[] response = [];
            foreach var issue in issue:issuesTable {
                response.push(issue);
            }
            return response;
        }
    }

    resource function post issues(http:RequestContext ctx, @http:Payload types:RecieveIssue payload)
        returns types:Issue|error {

        boolean isAuthorized = util:authorize(ctx, util:getIssueScopes().get("create"));

        if !isAuthorized {
            io:println("error");

            return error("User is not authorized to view issues");
        } else {
            string uuid = uuid:createType4AsString();

            io:println("Issue created with ID: " + uuid);

            types:Issue issue = {
                id: uuid,
                name: payload.name,
                description: payload.description
            };

            io:println("Issue created with ID: " + uuid);

            issue:issuesTable.add(issue);

            return issue;
        }
    }
}
