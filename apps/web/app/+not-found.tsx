import { PageNotFound } from '@u3/ui';

export default function NotFound() {
  return (
    <PageNotFound
      title='Page Not Found'
      message='The page you are looking for does not exist.'
      actionButton={<a href='/'>Go Home</a>}
    />
  );
}
