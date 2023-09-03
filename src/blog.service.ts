import { PostDto } from './blog.model';

//TODO :  서비스 파일은 리포지토리를 사용하는 단순한 로직으로 변경

import { BlogFileRepository, BlogRepository } from './blog.repository';
export class BlogService {
  blogRepository: BlogRepository;

  constructor() {
    this.blogRepository = new BlogFileRepository();
  }

  async getAllPost() {
    return await this.blogRepository.getAllPost();
  }

  createPost(postDto: PostDto) {
    this.blogRepository.createPost(postDto);
  }

  async getPost(id) {
    return await this.blogRepository.getPost(id);
  }

  delete(id) {
    this.blogRepository.deletePost(id);
  }

  updatePost(id, postDto: PostDto) {
    this.blogRepository.updatePost(id, postDto);
  }
}
