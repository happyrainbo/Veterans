console.log('starting function');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});

exports.handler = function(event, context, callback){

    var scanningParameters = {
        TableName: 'guestbook',
        Limit: 100
    };

    docClient.scan(scanningParameters, function(error, data){
        if(error){
            callback(error, null);
        }else{
            callback(null, data);
        }
    });

    /*
    var params = {
        TableName: 'guestbook',
        Key: {
            "date": 1535081492948
        }
    }

    docClient.get(params, function(error, data){
        if(error){
            callback(error, null);
        }else{
            callback(null, data);
        }
    });
    */
}
