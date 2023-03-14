import Store from '../posts_store'

const Posts = async () => {
  const posts = new Store()
  const values = await posts.today()
  const body = {"dxy": values.pop(), "tenyear": values.pop()}
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json'
  }
  return new Response(JSON.stringify(body), { headers })
}

export default Posts
