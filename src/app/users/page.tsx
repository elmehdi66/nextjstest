import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
   <>
    <div>Users page</div>
    <Link href="/">Go home</Link>
    <Link href="/dashboard">Go to dashboard</Link>
   </>
  )
}

export default page