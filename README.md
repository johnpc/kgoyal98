# What is this

The app is hosted at [http://kgoyal98-20210802014024-hostingbucket-dev.s3-website.us-east-2.amazonaws.com](http://kgoyal98-20210802014024-hostingbucket-dev.s3-website.us-east-2.amazonaws.com).

This demonstrates how it is possible to use Amplify to list posts created by followed users in a single api request.

Each followee has their own `nextToken` that can be used to paginate posts.

See [https://github.com/aws-amplify/amplify-cli/issues/7840](https://github.com/aws-amplify/amplify-cli/issues/7840) for more rationale.

Also check the various branches of this app to see alternative implementations.
