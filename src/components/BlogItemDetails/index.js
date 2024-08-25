
import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}}

  componentDidMount() {
    this.getBogItemData()
  }

  getBogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://newsapi.org/v2/top-headlines?${id}sources=techcrunch&apiKey=0dfa7c6878a84539b0d725cc2cf54f9b`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      awatarUrl: data.awatar_url,
      content: data.content,
      topic: data.topic,
      author: data.author,
    }
    this.setState({blogData: updatedData})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData
    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>
  }
}

export default BlogItemDetails


