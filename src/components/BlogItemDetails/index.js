import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogsData: {}}

  componentDidMount() {
    this.getBogItemData()
  }

  getBogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://newsapi.org/v2/${id}top-headlines?sources=techcrunch&apiKey=0dfa7c6878a84539b0d725cc2cf54f9b`)
    const data = await response.json()
    const updatedData = {
          title: data.title,
          urlToImage: data.urlToImage,
          author: data.author,
          description: data.description,
          content: data.content,
          publishedAt: data.publishedAt,
    }
    this.setState({blogsData: updatedData})
  }

  renderBlogItemDetails = () => {
    const {blogsData} = this.state
    const {author, publishedAt, urlToImage, title, description, content} = blogsData
    return (
      <div className="blog-info">
        <div className="author-publish-container">
        <p className="author">By {author}</p>
        <p className="publish">{publishedAt}</p>
      </div>
      <img src={urlToImage} alt={title} className="image"/>
      <div className="blogs-details-container">
      <h1 className="blog-title">{title}</h1>
      <p className='description'>{description}</p>
      <p className='content'>{content}</p>
      </div>
      </div>
    )
  }

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>
  }
}

export default BlogItemDetails
