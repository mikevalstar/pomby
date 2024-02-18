/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const AssetsIndexLazyImport = createFileRoute('/assets/')()
const AssetsNewLazyImport = createFileRoute('/assets/new')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const AssetsIndexLazyRoute = AssetsIndexLazyImport.update({
  path: '/assets/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/assets/index.lazy').then((d) => d.Route))

const AssetsNewLazyRoute = AssetsNewLazyImport.update({
  path: '/assets/new',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/assets/new.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/assets/new': {
      preLoaderRoute: typeof AssetsNewLazyImport
      parentRoute: typeof rootRoute
    }
    '/assets/': {
      preLoaderRoute: typeof AssetsIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  AboutLazyRoute,
  AssetsNewLazyRoute,
  AssetsIndexLazyRoute,
])

/* prettier-ignore-end */
