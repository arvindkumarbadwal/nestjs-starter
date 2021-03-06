import { Controller, Get, Res, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response) {
    return res.render('index', { message: 'Hello world !!!' })
  }

  @Get('login')
  login(@Res() res: Response) {
    return res.render('admin/auth/login')
  }

  @Get('dashboard')
  dashboard(@Res() res: Response) {
    return res.render('admin/dashboard/index')
  }
}
