import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  route('publisher', 'routes/publisher.tsx'),
  route('registration', 'routes/registration.tsx')
] satisfies RouteConfig
