import Post from "./Post.js";
import PostController from "./PostController.js";
import FileServise from "./FileServise.js";

class PostServise {
  async create(post, file) {
    const fileName = await FileServise.write(file);
    const createdPost = await Post.create({ ...post, picture: fileName });

    return createdPost;
  }

  async getAll() {
    const allPosts = await Post.find();

    return allPosts;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("id is undefined");
    }

    const findedPost = await Post.findById(id);

    return findedPost;
  }

  async update(post) {
    if (!post._id) {
      throw new Error("id is undefined");
    }

    const updatedPost = await Post.findByIdAndUpdate(post._id, post);

    return updatedPost;
  }

  async delete(id) {
    if (!id) {
      throw new Error("id is undefined");
    }

    const deletedPost = await Post.findByIdAndDelete(id);

    return deletedPost;
  }
}

export default new PostServise();
