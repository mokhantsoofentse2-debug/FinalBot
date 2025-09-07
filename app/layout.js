export const metadata = {
  title: 'M.O. Trading Bot Dashboard',
  description: 'Dashboard for M.O. Trading Bot',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
