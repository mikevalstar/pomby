import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Asset = {
  __typename?: 'Asset';
  id: Scalars['ID']['output'];
  mimetype?: Maybe<Scalars['String']['output']>;
  originalFilename: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assets: Array<Asset>;
  me: User;
};


export type QueryAssetArgs = {
  id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type PombyAssetQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PombyAssetQuery = { __typename?: 'Query', asset?: { __typename?: 'Asset', id: string, mimetype?: string | null, originalFilename: string, title: string, url: string } | null };

export type PombyAssetsQueryVariables = Exact<{ [key: string]: never; }>;


export type PombyAssetsQuery = { __typename?: 'Query', assets: Array<{ __typename?: 'Asset', id: string, originalFilename: string, title: string, url: string }> };


export const PombyAssetDocument = gql`
    query PombyAsset($id: ID!) {
  asset(id: $id) {
    id
    mimetype
    originalFilename
    title
    url
  }
}
    `;

/**
 * __usePombyAssetQuery__
 *
 * To run a query within a React component, call `usePombyAssetQuery` and pass it any options that fit your needs.
 * When your component renders, `usePombyAssetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePombyAssetQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePombyAssetQuery(baseOptions: Apollo.QueryHookOptions<PombyAssetQuery, PombyAssetQueryVariables> & ({ variables: PombyAssetQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PombyAssetQuery, PombyAssetQueryVariables>(PombyAssetDocument, options);
      }
export function usePombyAssetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PombyAssetQuery, PombyAssetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PombyAssetQuery, PombyAssetQueryVariables>(PombyAssetDocument, options);
        }
export function usePombyAssetSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PombyAssetQuery, PombyAssetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PombyAssetQuery, PombyAssetQueryVariables>(PombyAssetDocument, options);
        }
export type PombyAssetQueryHookResult = ReturnType<typeof usePombyAssetQuery>;
export type PombyAssetLazyQueryHookResult = ReturnType<typeof usePombyAssetLazyQuery>;
export type PombyAssetSuspenseQueryHookResult = ReturnType<typeof usePombyAssetSuspenseQuery>;
export type PombyAssetQueryResult = Apollo.QueryResult<PombyAssetQuery, PombyAssetQueryVariables>;
export const PombyAssetsDocument = gql`
    query PombyAssets {
  assets {
    id
    originalFilename
    title
    url
  }
}
    `;

/**
 * __usePombyAssetsQuery__
 *
 * To run a query within a React component, call `usePombyAssetsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePombyAssetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePombyAssetsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePombyAssetsQuery(baseOptions?: Apollo.QueryHookOptions<PombyAssetsQuery, PombyAssetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PombyAssetsQuery, PombyAssetsQueryVariables>(PombyAssetsDocument, options);
      }
export function usePombyAssetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PombyAssetsQuery, PombyAssetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PombyAssetsQuery, PombyAssetsQueryVariables>(PombyAssetsDocument, options);
        }
export function usePombyAssetsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PombyAssetsQuery, PombyAssetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PombyAssetsQuery, PombyAssetsQueryVariables>(PombyAssetsDocument, options);
        }
export type PombyAssetsQueryHookResult = ReturnType<typeof usePombyAssetsQuery>;
export type PombyAssetsLazyQueryHookResult = ReturnType<typeof usePombyAssetsLazyQuery>;
export type PombyAssetsSuspenseQueryHookResult = ReturnType<typeof usePombyAssetsSuspenseQuery>;
export type PombyAssetsQueryResult = Apollo.QueryResult<PombyAssetsQuery, PombyAssetsQueryVariables>;