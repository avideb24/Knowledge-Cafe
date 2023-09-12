import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleBookmarks, handleReadTime }) => {
    const { cover_img, title, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className="space-y-2 mb-8">

            <div>
                <img className="w-full" src={cover_img} alt="" />
            </div>
            <div className="flex justify-between items-center ">
                <div className="flex items-center gap-2">
                    <img className="w-14" src={author_img} alt="author image" />
                    <div>
                        <p>{author}</p>
                        <p><small>{posted_date}</small></p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleBookmarks(blog)} className="ml-4"> <FaBookmark /></button>
                </div>
            </div>
            <h2 className="max-w-xl text-4xl font-bold">{title}</h2>
            <div>
                {
                    hashtags.map((tag, idx) => <a className="text-blue-400 text-sm mr-4" href="" key={idx}>#{tag}</a>)
                }
            </div>
            <button onClick={() => handleReadTime(blog)} className="text-purple-800 underline">Mark As Read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    handleBookmarks: PropTypes.func,
    handleReadTime: PropTypes.func
}

export default Blog;