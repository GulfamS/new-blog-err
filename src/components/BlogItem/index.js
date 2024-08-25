import {Link} from "react-router-dom"
import "./index.css";

const BlogItem = props => {
  const {blogsData} = props
  const {id, author, publishedAt, urlToImage, title} = blogsData
  return (
    <Link to={`/blogs/${id}`}>
    <div className="blog-item">
      <div className="author-publish-container">
        <p className="author">By {author}</p>
        <p className="publish">{publishedAt}</p>
      </div>
      <img src={urlToImage} alt={`item${id}`} className="image"/>
      <div className="blogs-details-container">
      <h1 className="blog-title">{title}</h1>
      </div>
    </div>
    </Link>
  );
};

export default BlogItem;
