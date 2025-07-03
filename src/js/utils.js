export function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }
  
  export function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
      timeZone: "UTC",
    })
  }
  
  export function formatBlogPosts(posts, {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
  } = {}) {
  
    const filteredPosts = posts.reduce((acc, post) => {
      const { date, draft } = post.frontmatter;
      // filterOutDrafts if true
      if (filterOutDrafts && draft) return acc;
  
      // filterOutFuturePosts if true
      if (filterOutFuturePosts && new Date(date) > new Date()) return acc;
  
      // add post to acc
      acc.push(post)
  
      return acc;
    }, [])
  
    // sortByDate or randomize
    if (sortByDate) {
      filteredPosts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
    } else {
      filteredPosts.sort(() => Math.random() - 0.5)
    }
  
    // limit if number is passed
    if (typeof limit === "number") {
      return filteredPosts.slice(0, limit);
    }
    return filteredPosts;
  
  }

  export function getContrastYIQ(hexcolor) {
    hexcolor = hexcolor.replace("#", "");
    let r = parseInt(hexcolor.substr(0, 2), 16);
    let g = parseInt(hexcolor.substr(2, 2), 16);
    let b = parseInt(hexcolor.substr(4, 2), 16);
    let yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return (yiq >= 128) ? "#000000" : "#FFFFFF";
}

export function sanitizeId(input) {
  // Entfernt alle nicht-alphanumerischen Zeichen (außer Bindestrichen und Unterstrichen)
  return input.replace(/[^a-zA-Z0-9-_]/g, '');
}