'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
//const uuid = require('uuid');
const createArticle = require('./model.js').createArticle;
const DynamoDAO = require('../util/dynamo-dao.js');
const ArticleController = require('./controller.js');

module.exports.handler = (event, context, callback) => {
  const article = createArticle(event, callback);
  const dynamoDAO = new DynamoDAO(dynamo, 'BlogTable');
  const controller = new ArticleController(dynamoDAO);
  controller.createArticle(article, callback);
  
  
  /*console.log('event:', event);
  
  const data = JSON.parse(event.body);

  // Validate data text
  if(data.text && typeof data.text !== 'string'){
    console.error('Validation failed');
    callback(new Error('Body did not contain a text propertly.'));
    return;
  }

  console.log('data-text:', data.text);

  const params = {
    TableName: 'BlogTable',
    Item: {
      article_id: uuid.v1(),
      text: data.text
    },
  };

  const putCallback = (error, result) => {
    if (error) {
      console.error(error);
      callback(new Error('Could not save record.'));
      return;
    }
    
    console.log('result:', result);

    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };


    callback(null, response);
  }

  dynamo.put(params, putCallback);*/

};