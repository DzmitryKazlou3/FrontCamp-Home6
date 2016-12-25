/* -------------- imports -------------- */
// external

//locals

/* -------------- implementation -------------- */
export default class TagModel{
    constructor(id, value, article_ids){
      this.id = id;
      this.value = value;
      this.article_ids = article_ids;
    }
}