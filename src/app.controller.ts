import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/')
  @Render('index')
  root() {
    return {
      message: 'Hello world!',
      seoData: {
        title: 'Home',
        meta_title: 'Home',
        meta_description: '',
        meta_keywords: '',
      },
    };
  }
  @Get('/*')
  @Render('dynamic-page')
  page() {
    return {
      message: 'Dynamic Page',
      seoData: {
        title: 'Dynamic Page',
        meta_title: 'D p',
        meta_description: '',
        meta_keywords: '',
      },
    };
  }
}
