// "use client"
// import { SessionProvider } from "next-auth/react"
// import { Children } from "react"

// export default function SessionWrapper({Children}) {
//   return (
//     <SessionProvider>
//       {Children}
//     </SessionProvider>
//   )
// }

// export default function SessionWrapper() {
//   const { data: session, status } = useSession()

//   if (status === "authenticated") {
//     return <p>Signed in as {session.user.email}</p>
//   }

//   return <a href="/api/auth/signin">Sign in</a>
// }


