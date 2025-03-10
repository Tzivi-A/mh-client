import { RegistrationPage } from '~/pages/registration'
import type { Route } from '../+types/root'

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' }
  ]
}

export default function Registration() {
  return <RegistrationPage />
}
