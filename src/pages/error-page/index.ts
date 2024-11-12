import ErrorPage from './ErrorPage';
import { NavLink } from '@/components';
import { errors } from '@/utils/constants';
import { router } from '@/utils/Router';

const navLink = new NavLink({
  text: "Назад к чатам",
  events: {
    click: (event) => {
      event.preventDefault();
      router.go('/messenger');
    }
  }
});

export const getErrorPage = (error: string) => {
  const { text } = errors[error];

  return new ErrorPage({
    NavLink: navLink,
    error,
    text
  });
}
