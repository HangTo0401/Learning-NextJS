import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
interface Post {
  id: string;
  title: string;
}
export interface PageProps {
  posts: Post;
}

export default function PostDetail({ posts }: PageProps) {
  const router = useRouter();

  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
      <p>PostID: {posts.id}</p>
      <p>PostTitle: {posts.title}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  return {
    props: {
      posts: {
        id: '123',
        title: 'HangToTitle'
      }
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { postId: '1' } },
      { params: { postId: '2' } },
      { params: { postId: '3' } },
      ], // indicates that no page needs be created at build time
    fallback: 'blocking' // or true or 'blocking'
  }
}