import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NaverMapModule } from './naver-map/naver-map.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,  //ConfigModule의 환경 변수를 전역변수로 설정
    }),
    NaverMapModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
