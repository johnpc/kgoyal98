# What is this

The app is hosted at [http://kgoyal98-20210802014024-hostingbucket-function.s3-website.us-east-2.amazonaws.com](http://kgoyal98-20210802014024-hostingbucket-function.s3-website.us-east-2.amazonaws.com).

This demonstrates how it is possible to use Amplify to list posts created by followed users in a single api request.

It uses a custom lambda resolver where dynamodb is queried directly. For highly relational data, perhaps a different data store (such as rds) is desired.

See [https://github.com/aws-amplify/amplify-cli/issues/7840](https://github.com/aws-amplify/amplify-cli/issues/7840) for more rationale.

Also check the various branches of this app to see alternative implementations.
