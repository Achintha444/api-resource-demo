import ballerina/http;
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

        boolean isAuthorized =  util:authorize(ctx, util:getIssueScopes().get("view"));

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

    // resource function post issues(http:RequestContext ctx, @http:Payload Name payload) 
    //     returns types:Issue|http:Unauthorized|http:InternalServerError {

    //     _ = check util:authorize(ctx, util:getIssueScopes().get("create"));
    //     string|http:Unauthorized userId = getUserId(ctx);
    //     if userId is http:Unauthorized {
    //         return userId;
    //     }

    //     string uuid = uuid:createType4AsString();

    //     types:Issue issue= {
    //         id: uuid,
    //         name: payload.name,
    //         description: payload.description
    //     };

    //     issue:issuesTable.add(issue);
        
    //     return issue;
    // }
}
