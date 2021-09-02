import { useState } from 'react';

import H1 from './H1';

export default function ContentArea({ title, content }) {
  return (
    <main className="content-area">
      <H1>{title}</H1>
      {content}
    </main>
  );
}
