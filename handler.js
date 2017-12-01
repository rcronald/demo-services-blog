'use strict';

module.exports.hello = (event, context, callback) => {
  console.log("The event is: ", event);
  console.log("The context is: ", context);

  let remainingTime = context.getRemainingTimeInMillis();
  let functionName = context.functionName;
  let awsRequestId = context.awsRequestId;

  const response = {
    statusCode: 200,
    ev: event,
    rt: remainingTime,
    fn: functionName,
    aid: awsRequestId
  };

  callback(null, response);
};
