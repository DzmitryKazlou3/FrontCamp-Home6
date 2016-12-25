/* -------------- imports -------------- */
// external

//locals

/* -------------- implementation -------------- */
export default class ArticleModel{
    constructor(id, title, text, tags, createDateTime, updateDateTime, user){
      this.id = id;
      this.title = title;
      this.text = text;
      this.tags = tags;
      this.createDateTime = createDateTime;
      this.updateDateTime = updateDateTime;
      this.user = user;
    }
}