import {
  Outlet, 
  LiveReload,
  Link,
  Links,
  Meta
} from "@remix-run/react";
import globalStylesUrl from './styles/global.css';

export const links = () => [{ rel: 'stylesheet', href: globalStylesUrl }]

export const meta = () => {
  const description = "A cool blog built with remix";
  const keywords = "remix, react, javascript";

  return {
    description,  
    keywords
  }
}

export default function App() {
  return (
    <Document>
      <Layout>
      <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children, title}) {
  return (
    <html lang="en">
    <head> 
      <Meta />
      <Links />
      <title>{ title ? title : 'Remix Blog'}</title>
    </head>
    <body>
      {children}
      {/* <Outlet /> */}
      {/* <ScrollRestoration />
      <Scripts /> */}
      <LiveReload />
    </body>
  </html>
  )
}

function Layout({children}) {
  return (
    <>
    <nav className="navbar">
      <Link to='/' className="logo">
        Remix
      </Link>

      <ul className="nav">
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </nav>

    <div className="container">
      {children}
    </div>
    </>
  )
}