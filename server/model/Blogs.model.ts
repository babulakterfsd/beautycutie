import { model, models, Schema } from 'mongoose';

const BlogPostsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  content: {
    type: String,
  },
  category: {
    type: String,
  },
});

const BlogPosts = models.blogposts || model('blogposts', BlogPostsSchema);
export default BlogPosts;
