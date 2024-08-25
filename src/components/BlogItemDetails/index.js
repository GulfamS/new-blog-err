
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
    const response = await fetch(`https://newsapi.org/v2/top-headlines?${id}sources=techcrunch&apiKey=0dfa7c6878a84539b0d725cc2cf54f9b`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      urlToImage: data.url_to_image,
      description:data.description, 
      content: data.content,
      publishedAt: data.published_at,
      author: data.author,
    }
    this.setState({blogsData: updatedData})
  }

  renderBlogItemDetails = () => {
    const {blogsData} = this.state
    const {author, publishedAt, urlToImage, title, description, content} = blogsData
    return (
      <div className="blog-info">
        <div>
         <p className='author'>{author}</p>
         <p className='publish'>{publishedAt}</p>
        </div>
         <img src={urlToImage} alt={title} className='image'/>
         <p className='description'>{description}</p>
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>
  }
}

export default BlogItemDetails


