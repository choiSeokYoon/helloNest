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
  constructor(private blogService: BlogService) {}

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
  // 비동기를 지원하는 메서드로 시그니처 변경
  async getPost(@Param('id') id: string) {
    console.log(`[id: ${id}]게시글 하나 가져오기`);

    // 블로그 서비스에 사용하는 메서드가 비동기로 변경되었으므로 await 사용
    const post = await this.blogService.getPost(id);
    console.log(post);
    return post;
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
