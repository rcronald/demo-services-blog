# demo-services-blog
Demo using lambda functions with ServerlessFramework

## Getting Started
This sample is about how use ServerlessFramework to develop an API REST using AWS (Lambda Functions, API Gateway and Dynamo DB).

### Prerequisites
Before to start to review this repository you need to install the following components and frameworks:
* Serverless Framework 
* Npm package mangement


## Branches
The project start with the minimal requirements to works, and each functionality is in a branch.

### Branch D1: Creating simple AWS Lambda function
This branch contains the initial project created with the following Serverless Framework Command:
```
sls create -t aws-nodejs -n demo-services-blog
```

For test the initial project in your local environment you need to execute the following command:
```
sls invoke local -f hello
```

For deploy the initial project to AWS you need to execute the following command:
```
sls deploy -f hello
```

For test the initial project in AWS environment you need to execute the following command:
```
sls invoke -f hello
```

### Branch D2: Creating basic REST API
This branch contains a basic Lambda function exposed in a REST API "hello"

For deploy the project to AWS you need to execute the following command:
```
sls deploy -f hello
```
After deploy the project to AWS, the framework shows that the lambda function and api gateway services was created.


### Branch D3: Using event and context objects
In this branch we used the objects event and context and customize the response.

For deploy the project to AWS you need to execute the following command:
```
sls deploy -f hello
```
For test the project using event data you need to execute:
```
sls invoke local -f hello -p event.json
```

### Branch D4: Testing and Debugging Lambda functions
In this branch we learn three different ways to testing and debugging aproaches:
#### Using Serverless Framework
To test the function you can to execute the following command:
```
sls invoke -f hello -p event.json
```
To see the function logs you can to execute the following command:
```
sls logs -f hello
```
#### Using Postman 
To test the function from Postman or Httpie you can to get the url endpoint API REST with the following command:
```
sls info
```
After to get the url endpoint you can to open Postman and test the function.

#### Using the AWS Management Console
To test the function from AWS Management Console, you can to open the Api Gateway services and execute manually the endpoint published "demo-services-blog".



## Contributing

Please read [CONTRIBUTING.md]() for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/rcronald/demo-services-blog/tags). 

## Authors

* **Ronald Requena** - *Initial work* - [rcronald](https://github.com/rcronald)

See also the list of [contributors](https://github.com/rcronald/demo-services-blog/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
