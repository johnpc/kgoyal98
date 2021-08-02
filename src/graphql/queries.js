/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const timeline = /* GraphQL */ `
  query Timeline {
    timeline {
      id
      content
      user {
        id
        name
      }
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      following {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      posts {
        items {
          id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        following {
          nextToken
        }
        followers {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      content
      user {
        id
        name
        following {
          nextToken
        }
        followers {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        user {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserFollow = /* GraphQL */ `
  query GetUserFollow($id: ID!) {
    getUserFollow(id: $id) {
      id
      user {
        id
        name
        following {
          nextToken
        }
        followers {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      followee {
        id
        name
        following {
          nextToken
        }
        followers {
          nextToken
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserFollows = /* GraphQL */ `
  query ListUserFollows(
    $filter: ModelUserFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserFollows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          name
          createdAt
          updatedAt
        }
        followee {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
