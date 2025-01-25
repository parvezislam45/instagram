import axiosInstance from "./api";

interface Post {
    id: number;
    user: string;
    image: string;
    caption: string;
    created_at: string;
    comments: Comment[];
    likes: Like[];
  }
  
  interface Comment {
    id: number;
    user: string;
    text: string;
    created_at: string;
  }
  
  interface Like {
    id: number;
    user: string;
  }
  
  export const fetchPosts = async (): Promise<Post[]> => {
    const response = await axiosInstance.get<Post[]>('/posts/');
    return response.data;
  };
  
  export const createPost = async (data: FormData): Promise<Post> => {
    const response = await axiosInstance.post<Post>('/posts/', data);
    return response.data;
  };
  
  export const fetchPostDetails = async (postId: number): Promise<Post> => {
    const response = await axiosInstance.get<Post>(`/posts/${postId}/`);
    return response.data;
  };
  
  export const addComment = async (postId: number, text: string): Promise<Comment> => {
    const response = await axiosInstance.post<Comment>(`/posts/${postId}/comments/`, { text });
    return response.data;
  };
  
  export const likePost = async (postId: number): Promise<Like> => {
    const response = await axiosInstance.post<Like>(`/posts/${postId}/likes/`);
    return response.data;
  };