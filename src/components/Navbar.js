import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick({href}) {
  Link={href};
}

export default function Navbar() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Home
      </Link>
    </Breadcrumbs>
  );
}