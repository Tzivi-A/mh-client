import { type RouteConfig, route } from '@react-router/dev/routes';

export default [
  route('component-dashboard', 'routes/component-dashboard.tsx'),
  route('publisher', 'routes/publisher.tsx'),
  route('registration', 'routes/registration.tsx')
] satisfies RouteConfig;
