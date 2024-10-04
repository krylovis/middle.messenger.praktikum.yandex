import ErrorPage from './ErrorPage';
import { NavLink } from '@/components';
import { errors } from '@/utils/constants';

const navLink = new NavLink ({
  toPage: "register",
  text: "Назад к чатам",
});

export const getErrorPage = (error: string) => {
  const { text } = errors[error];

  return new ErrorPage({
    NavLink: navLink,
    error,
    text
  });
}

// export const errorPage = new ErrorPage({
//   NavLink: navLink
// });
