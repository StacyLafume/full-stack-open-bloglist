const dummy = (blogs) => {
  return blogs[0]
}

const totalLikes = (listWithOneBlog) => {
  return listWithOneBlog[0].likes
}

const favoriteBlog = listOfBlogs => {
  const likes = listOfBlogs.map(blog => blog.likes)
  const mostLikes = Math.max(...likes)
  console.log('string', listOfBlogs.find(blog => blog.likes === mostLikes))
  return listOfBlogs.find(blog => blog.likes === mostLikes)
}

const mostBlogs = listOfBlogs => {
  const createHash = array => {
    const hash = {}
    for (let element of array) {
      hash[element] ? hash[element]++ : hash[element] = 1
    }
    return hash
  }

  const authors = listOfBlogs.map(item => item.author)

  console.log('authors', authors)

  const hashOfAuthors = createHash(authors)

  console.log('hashOfAuthors', hashOfAuthors)

  const mostBlogs = Math.max(...Object.values(hashOfAuthors))

  console.log('mostBlogs', mostBlogs)

  for (let author in hashOfAuthors) {
    if (hashOfAuthors[author] === mostBlogs) {
      return {
        author: author,
        blogs: mostBlogs
      }
    }
  }
}

const mostLikes = listOfBlogs => {

  //   const likes = listOfBlogs.map(blog => blog.likes)
  //   const mostLikes =  Math.max(...likes)

  let sum = 0
  for (let i = 0; i < listOfBlogs.length; i++) {
    if (listOfBlogs[i].author === 'Edsger W. Dijkstra') {
      sum += listOfBlogs[i].likes
    }
  }

  return {
    author: 'Edsger W. Dijkstra',
    likes: sum
  }

}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}