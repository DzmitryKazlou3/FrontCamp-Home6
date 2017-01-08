/* -------------- imports -------------- */
// external

//locals

/* -------------- implementation -------------- */
export default class ArticleModel{
    constructor(id, title, text, description, tags, createDateTime, updateDateTime, user){
      this.id = id;
      this.title = title;
      this.text = text;
      this.description = description;
      this.tags = tags;
      this.createDateTime = createDateTime;
      this.updateDateTime = updateDateTime;
      this.user = user;
    }
}