import type { PostDescription } from "@/interfaces/post";


export default function PostDescription({ userId, postInfo }: PostDescription) {
  return (
    <div>
      <p>{userId}</p>
      <p>{postInfo.comments.amount}</p>
      <p>{postInfo.comments.CommentsTitle}</p>
      <p>{postInfo.likes}</p>
      <p>{postInfo.repost}</p>
    </div>
  )
}
