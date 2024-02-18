import { Link } from '@tanstack/react-router';

function TopNav() {
  return (
    <nav className={'flex items-center space-x-4 lg:space-x-6'}>
      <Link to='/' className='text-sm font-medium transition-colors hover:text-primary'>
        Overview
      </Link>
      <Link
        to='/examples/dashboard'
        className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'>
        Customers
      </Link>
      <Link
        to='/examples/dashboard'
        className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'>
        Products
      </Link>
      <Link to='/about' className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'>
        About
      </Link>
    </nav>
  );
}

export default TopNav;
