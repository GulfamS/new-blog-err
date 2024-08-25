import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

const BlogItemDetails = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBlogItemData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?${id}sources=techcrunch&apiKey=0dfa7c6878a84539b0d725cc2cf54f9b`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const article = data.articles.find((article) => article.id === id);

        if (article) {
          setBlogData(article);
        } else {
          setError('Blog item not found');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getBlogItemData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!blogData) {
    return <p>No blog data available</p>;
  }

  const { title, urlToImage, content, author, description, publishedAt } = blogData;

  return (
    <div className="blog-info">
      <p className="details-author-name">By {author}</p>
      <p className="published">{publishedAt}</p>
      <img className="blog-image" src={urlToImage} alt={title} />
      <h2 className="blog-details-title">{title}</h2>
      <div className="author-details">
        <p className="description">{description}</p>
        <p className="blog-content">{content}</p>
      </div>
    </div>
  );
};

export default BlogItemDetails;

