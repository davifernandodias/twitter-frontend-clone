import type { PostProps } from "@/interfaces/post";


export default function Post({ user, title }: PostProps ) {
  return (
    <div>
      <p>{ user.username }</p>
      <p>{ user.firstName }</p>
      <h1>{ title }</h1>
    </div>
  )
}
