import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks, readTime}) => {
    return (

        <div className="w-1/3">

            <h2 className="text-2xl font-bold my-4">Bookmarks: {bookmarks.length}</h2>

            <p className='text-xl font-semibold text-blue-600 p-4 bg-gray-200 rounded-xl'>Spent time on read: {readTime} min</p>

            <div>
                {
                    bookmarks.map((bookmark, idx) => <p className='text-xl font-bold p-4 my-4 bg-teal-200 rounded-xl' key={idx}>{bookmark.title}</p>)
                }
            </div>
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readTime: PropTypes.number
}

export default Bookmarks;