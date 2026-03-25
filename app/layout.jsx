import './globals.css'
 
export const metadata = {
  title: 'David Perez Merino — Web Developer',
  description: 'Full-stack web developer building clean, fast applications with Next.js and React.',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
 