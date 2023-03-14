const cheerio = require("cheerio")
const  data = []
export default class PostsStore {
  async today() {

  const URLs = ["https://www.marketwatch.com/investing/index/dxy/", 
              "https://www.marketwatch.com/investing/bond/tmubmusd10y"]
  while (URLs.length > 0) {
    const  res = await fetch(URLs.pop())
    const htmlData = await res.text()
    const $ = cheerio.load(htmlData)
    $("meta").each((index, element) => {
      if ($(element).attr("name")==="price")
        data.push(parseFloat($(element).attr("content")))
    })
   }
  return data
  }
}
