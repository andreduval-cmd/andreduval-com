export const metadata = {
  title: 'Andre Duval — Portfolio',
  description: 'Product designer & software engineer. Building apps, design systems, and creative solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
