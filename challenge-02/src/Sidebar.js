export default function Sidebar({ links, handleChangePost }) {
  return (
    <aside className="sidebar">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a 
              href="" 
              onClick={(e) => {
                e.preventDefault();
                handleChangePost(link.id);
              }}
            > 
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}