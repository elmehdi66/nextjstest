import Link from "next/link";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
    return(
    <>
    <h1>Hello, Dashboard Page!</h1>
    <Link href="/">go to home</Link>
    <Link href="/users">go to users</Link>
    </>
    )
    
  }