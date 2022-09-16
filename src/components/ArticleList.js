import Article from "./Article";

const ArticleList =({posts})=>{
  const articleArray = posts.map(post => {
    return (<Article
      key={post.id}
      title={post.title}
      date={post.data}
      preview={post.preview}

      />)
  })
  return (
<main>{articleArray}</main>
  )
}

export default ArticleList;