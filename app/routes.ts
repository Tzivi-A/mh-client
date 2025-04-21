import { type RouteConfig, route } from '@react-router/dev/routes';

export default [
  route('component-overview', 'routes/component-overview.tsx'),
  route('publisher', 'routes/publisher.tsx'),
  route('registration', 'routes/registration.tsx')
] satisfies RouteConfig;
