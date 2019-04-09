import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_POST = 'ADD_POST';
export const ADD_POSTS = 'ADD_POSTS';
export const DELETE_POST = 'DELETE_POST';

// Export Actions
export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function addPostRequest(post) {
  return (dispatch) => {
    return callApi('markets', 'market', {
      market: {
        stationName: 'test-station-001',
        systemName: 'test-system-001',
        timestamp: Date.now()
      }
    });
    // return callApi('posts', 'post', {
    //   post: {
    //     name: post.name,
    //     title: post.title,
    //     content: post.content,
    //   },
    // }).then(res => dispatch(addPost(res.post)));
  };
}
export function addMarketRequest(post) {
  return (dispatch) => {
    return callApi('markets', 'market', {
      market: {
        stationName: 'test-station-001',
        systemName: 'test-system-001',
        timestamp: Date.now()
      }
    })
  }
}
export function fetchMarkets() {
  return (dispatch) => {
    return callApi('markets', 'market', {
      market: {
        stationName: 'test-station-001',
        systemName: 'test-system-001',
        timestamp: Date.now()
      }
    }).then(
    callApi('markets').then(res => {
      console.log('fetched markets: ', res.markets);
    }));
  }
}

export function addPosts(posts) {
  return {
    type: ADD_POSTS,
    posts,
  };
}

export function fetchPosts() {
  return fetchMarkets();
  // return (dispatch) => {
  //   return callApi('posts').then(res => {
  //     dispatch(addPosts(res.posts));
  //   });
  // };
}

export function fetchPost(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`).then(res => dispatch(addPost(res.post)));
  };
}

export function deletePost(cuid) {
  return {
    type: DELETE_POST,
    cuid,
  };
}

export function deletePostRequest(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'delete').then(() => dispatch(deletePost(cuid)));
  };
}
