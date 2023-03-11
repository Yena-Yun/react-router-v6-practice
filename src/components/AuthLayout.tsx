import { Suspense } from 'react';
import { useLoaderData, useOutlet, Await } from 'react-router-dom';
import { AuthProvider } from '../auth/AuthProvider';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';

export const AuthLayout = () => {
  const outlet = useOutlet();
  const userPromise = useLoaderData();

  return (
    <Suspense fallback={<LinearProgress />}>
      <Await
        resolve={userPromise}
        errorElement={<Alert severity='error'>Something went wrong!</Alert>}
        /* children의 인자 user는 위 resolve의 userPromise가 성공했을 때의 데이터 */
        /* userData는 AuthProvider에서 localStorage의 초기값으로 들어감 */
        children={(user) => (
          <AuthProvider userData={user}>{outlet}</AuthProvider>
        )}
      />
    </Suspense>
  );
};
