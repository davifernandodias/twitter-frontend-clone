export interface PostProps { 
  user: { 
    id: number;
    username: string;
    firstName: string;
  }
  title: string;
  createAt: string;
  postInfo: {
    comments: {
      amount: string;
      CommentsTitle: string;
    }
    likes: number;
    repost: number;
  }
}

export interface PostDescription {
  userId: number;
  postInfo: {
    comments: {
      amount: string;
      CommentsTitle: string;
    }
    likes: number;
    repost: number;
  }
}

