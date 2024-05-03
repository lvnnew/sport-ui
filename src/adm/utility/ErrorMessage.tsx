import {Title} from 'ra-ui-materialui';
import React from 'react';
import {useSearchParams} from 'react-router-dom';
import {Alert, styled} from '@mui/material';

const Root = styled('div')({
  marginTop: '1em',
});

export const showErrorMessage = (message: string) => {
  const pathname = location.pathname;

  if (pathname !== '/errorMessage') {
    location.href = `/errorMessage?message=${message}`;
  }
};

const ErrorMessage = () => {
  const [searchParams] = useSearchParams();
  const message = searchParams.get('message') ?? '';

  return (
    <Root>
      <Title
        title='Ошибка'
      />
      <Alert sx={{mb: 4}} severity='error'>
        {message}
      </Alert>
    </Root>
  );
};

export default ErrorMessage;
