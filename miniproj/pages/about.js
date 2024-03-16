import React from 'react';
import Link from 'next/link';
import { Button } from 'semantic-ui-react';

const ButtonExampleButton = () => (
  <Button>
    <Link href="/">
      <div>
        <h1>Hi there</h1>
      </div>
    </Link>
  </Button>
);

export default ButtonExampleButton;
