import { Component } from "react";
import { Rings } from "react-loader-spinner";
import BlogItem from "../BlogItem";
import "./index.css";

class BlogList extends Component {
  state = { blogsData: [], isLoading: true };

  componentDidMount() {
    this.getBlogsData();
  }

  getBlogsData = async () => {
    const url =
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0dfa7c6878a84539b0d725cc2cf54f9b";

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        const updatedData = data.articles.map((eachItem) => ({
          id: eachItem.id,
          title: eachItem.title,
          urlToImage: eachItem.urlToImage,
          author: eachItem.author,
          description: eachItem.description,
          content: eachItem.content,
          publishedAt: eachItem.publishedAt,
        }));
        this.setState({ blogsData: updatedData, isLoading: false });
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  render() {
    const { blogsData, isLoading } = this.state;
    return (
      <div className="blogs-container">
        {isLoading ? (
          <Rings
            type="TailSpin"
            color="black"
            height={150}
            width={150}
            className="load"
          />
        ) : (
          blogsData.map((item) => <BlogItem blogsData={item} key={item.id} />)
        )}
      </div>
    );
  }
}

export default BlogList;
