import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  blogService: BlogService;
  constructor() {
    this.blogService = new BlogService();
  }

  @Get()
  gatAllPost() {
    console.log('모든 게시글');
    return this.blogService.getAllPost();
  }

  @Post()
  createPost(@Body() postDto) {
    console.log('게시글 작성');
    this.blogService.createPost(postDto);
    return 'success';
  }

  @Get('/:id')
  getPost(@Param('id') id: string) {
    console.log(`[id: ${id}]게시글 하나 가져오기`);
    return this.blogService.getPost(id);
  }

  @Delete(`/:id`)
  DeletePost(@Param('id') id: string) {
    console.log('게시글 삭제');
    this.blogService.delete(id);
    return 'success';
  }

  @Put('/:id')
  UpdatePost(@Param('id') id: string, @Body() postDto) {
    console.log(`${id}게시글 수정, ${id}, ${postDto}`);
    return this.blogService.updatePost(id, postDto);
  }
}
