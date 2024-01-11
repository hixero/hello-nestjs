import { Controller, Get, Query, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("docs")
  @Redirect("https://docs.nestjs.com", 302)
  getDocs(@Query('version') version: string) {
    if (version && (
      version === '4' ||
      version === '5' ||
      version === '6' ||
      version === '7' ||
      version === '8'
      )
     ) {
      return { url : `https://docs.nestjs.com/v${version}` };
    }
  }
}
