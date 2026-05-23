import axios from "axios";
import * as cheerio from "cheerio";

async function fetchReviews() {
  const { data } = await axios.get("https://www.primerjam.si/providers/gj-insurance-consulting-zavarovalno-zastopanje-jaka-gerencer-sp");
  const $ = cheerio.load(data);
  const reviews = [];
  $('[class*="review"], [class*="Review"], [class*="comment"], p, span').each((i, el) => {
    const text = $(el).text().trim();
    if(text.length > 50 && text.length < 500) {
      if(!reviews.includes(text)) {
        reviews.push(text);
      }
    }
  });
  console.log(JSON.stringify(reviews, null, 2));
}
fetchReviews();
