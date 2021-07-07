console.log('starting function');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});

exports.handler = function(event, context, callback){

    var params = {
        TableName: "comment",
        key: {
            "deleted": e.deleted
        },
        UpdateExpression: "set deleted = :d",
        ExpressionAttributeValues:{
            ":d": "y"
        },
        ReturnValues:"UPDATED_NEW"
    };

    docClient.update(params, function(error, data){
        if(error){
            callback(error, null);
        }else{
            callback(null, data);
        }
    });
};
