import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-1 p-24">
      <span className="text-5xl">Hola mundo</span>
      <span>asdasdasdss</span>
      <Link href={'/about'}>About Page</Link>
    </main>
  )
}
