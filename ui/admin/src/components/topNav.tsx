import { cn } from '@/lib/utils';
import { Link, useMatchRoute } from '@tanstack/react-router';

function TopNav() {
  const matchRoute = useMatchRoute();

  const assets = !!matchRoute({ to: '/assets', fuzzy: true });
  const management = !!matchRoute({ to: '/management', fuzzy: true });
  const activity = !!matchRoute({ to: '/activity', fuzzy: true });
  const admin = !!matchRoute({ to: '/admin', fuzzy: true });
  const dashboard = !!matchRoute({ to: '/', fuzzy: false });

  return (
    <nav className={'flex items-center space-x-4 lg:space-x-6'}>
      <Link
        to='/'
        className={cn(
          { 'text-muted-foreground': !dashboard },
          `text-sm font-medium transition-colors hover:text-primary`,
        )}>
        Dashboard
      </Link>
      <Link
        to='/assets'
        className={cn(
          { 'text-muted-foreground': !assets },
          `text-sm font-medium transition-colors hover:text-primary`,
        )}>
        Assets
      </Link>
      <Link
        to='/'
        className={cn(
          { 'text-muted-foreground': !management },
          `text-sm font-medium transition-colors hover:text-primary`,
        )}>
        Management
      </Link>
      <Link
        to='/'
        className={cn(
          { 'text-muted-foreground': !activity },
          `text-sm font-medium transition-colors hover:text-primary`,
        )}>
        Activity
      </Link>
      <Link
        to='/'
        className={cn({ 'text-muted-foreground': !admin }, `text-sm font-medium transition-colors hover:text-primary`)}>
        Admin
      </Link>
    </nav>
  );
}

export default TopNav;
