import { API, graphqlOperation } from '@aws-amplify/api';
// API.configure({
//   "aws_appsync_graphqlEndpoint":
//     "https://kushg3hatfdrbm3zbppx7xnnfm.appsync-api.me-south-1.amazonaws.com/graphql",
//   "aws_appsync_region": "me-south-1",
//   "aws_appsync_authenticationType": "API_KEY",
//   "aws_appsync_apiKey": "da2-vlojcnpjn5bqvj3f6vqnp5ruku"
// });

export const subscribeDoc = /* GraphQL */ `
  subscription Subscribe($name: String!) {
    subscribe(name: $name) {
      data
      name
    }
  }
`;

export const publishDoc = /* GraphQL */ `
  mutation Publish($data: AWSJSON!, $name: String!) {
    publish(data: $data, name: $name) {
      data
      name
    }
  }
`;

/**
 * @param  {string} name the name of the channel
 * @param  {Object} data the data to publish to the channel
 */
export async function publish(name, data) {
  // API.configure({
  //   "aws_appsync_graphqlEndpoint":
  //     "https://kushg3hatfdrbm3zbppx7xnnfm.appsync-api.me-south-1.amazonaws.com/graphql",
  //   "aws_appsync_region": "me-south-1",
  //   "aws_appsync_authenticationType": "API_KEY",
  //   "aws_appsync_apiKey": "da2-vlojcnpjn5bqvj3f6vqnp5ruku"
  // });
  console.log(name,data)
  const res = await API.graphql(graphqlOperation(publishDoc, { name, data }));
  console.log(res);
  return res;
}

/**
 * @param  {string} name the name of the channel
 * @param  {nextCallback} next callback function that will be called with subscription payload data
 * @param  {function} [error] optional function to handle errors
 * @returns {Observable} an observable subscription object
 */
export function subscribe(name, next, error) {
  return (
    API.graphql(graphqlOperation(subscribeDoc, { name })) as any
  ).subscribe({
    next: ({ provider, value }) => {
      next(value.data.subscribe, provider, value);
    },
    error: error || console.log,
  });
}

/**
 * @callback nextCallback
 * @param {Object} data the subscription response including the `name`, and `data`.
 * @param {Object} [provider] the provider object
 * @param {Object} [payload] the entire payload
 */
