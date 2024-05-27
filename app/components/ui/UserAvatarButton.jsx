import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs'

const UserAvatarButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  )
}

export default UserAvatarButton
