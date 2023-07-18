export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 md:p-24">
      {children}
    </main>
  )
}