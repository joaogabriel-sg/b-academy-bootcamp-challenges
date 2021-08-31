import { useState } from 'react';

import H1 from './H1';
import H2 from './H2';
import Button from './Button';

export default function ContentArea({ post }) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  return (
    <main className="content-area">
      <H1>{title}</H1>
      {content}
    </main>
  )
}