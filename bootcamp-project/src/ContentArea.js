import { useState, useEffect } from 'react';

import H1 from './H1';

export default function ContentArea({ post }) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  useEffect(() => {
    setTitle(post.title);
    setContent(post.content);
  }, [post]);

  return (
    <main className="content-area">
      <H1>{title}</H1>
      {content}
    </main>
  )
}