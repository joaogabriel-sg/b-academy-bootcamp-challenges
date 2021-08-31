export default function Sidebar({ links }) {
  return (
    <aside className="sidebar">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a href="">{link.title}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}