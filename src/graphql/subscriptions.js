/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateUserFollow = /* GraphQL */ `
  subscription OnCreateUserFollow {
    onCreateUserFollow {
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
export const onUpdateUserFollow = /* GraphQL */ `
  subscription OnUpdateUserFollow {
    onUpdateUserFollow {
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
export const onDeleteUserFollow = /* GraphQL */ `
  subscription OnDeleteUserFollow {
    onDeleteUserFollow {
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
