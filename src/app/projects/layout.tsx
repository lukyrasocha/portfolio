export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      {children}
    </main>
  )
}