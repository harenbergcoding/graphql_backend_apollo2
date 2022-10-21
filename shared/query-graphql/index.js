import { graphql } from 'graphql';

import { schema } from '../../pages/api/graphql2';

export default async function queryGraphql(query, variableValues = {}) {
  const { data } = await graphql({ schema, source: query, variableValues })
  return data || {}
}
