
import { FiHeart, FiMessageCircle, FiSend } from 'react-icons/fi';

interface PostProps {
  username: string;
  caption: string;
  image?: string;
}

const Post: React.FC<PostProps> = ({ username, caption,image }) => {
  return (
    <div className="bg-white border rounded-lg shadow-lg mb-4">
      <div className="flex items-center p-4">
        <div className="bg-gray-300 h-10 w-10 rounded-full"></div>
        <div className="ml-4">
          <div className="font-bold text-black">{username}</div>
        </div>
      </div>
      {image && <img src={image} alt="Post" className="w-full h-96 object-cover bg-gray-200" />}
      <div className="p-4">
        <div className="flex space-x-4 text-gray-500">
          <FiHeart />
          <FiMessageCircle />
          <FiSend />
        </div>
        <p className="mt-2 text-black">
          <span className="font-bold text-black">{username}</span> {caption}
        </p>
      </div>
    </div>
  );
};

export default Post;
