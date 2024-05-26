'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

const buttonClasses =
  'rounded border px-2 py-1 text-sm text-gray-500 border-gray-300 dark:text-gray-400 dark:border-gray-600'

const SignInButton = () => {
  const { data: session } = useSession()
  return (
    <>
      {session ? (
        <button className={buttonClasses} onClick={() => signOut()}>
          Sign out
        </button>
      ) : (
        <button className={buttonClasses} onClick={() => signIn()}>
          Sign in
        </button>
      )}
    </>
  )
}

export default SignInButton
