/* -------------- imports -------------- */
// external

//locals

/* -------------- implementation -------------- */
export default class CommentModel{
    constructor(id, text, user, createDateTime, article_id){
      this.id = id;
      this.text = text;
      this.user = user;
      this.createDateTime = createDateTime;
      this.article_id = article_id;
    }
}