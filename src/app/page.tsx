import Link from "next/link";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <>
     <h1>Hello, Home page!</h1>
     <Link href="/dashboard">go to dashboard</Link>
     <Link href="/users">go to users</Link>
    </>
  )
}