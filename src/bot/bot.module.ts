import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { BotUpdate } from './bot.update';
import { MongooseModule } from '@nestjs/mongoose';
import { Bot, BotSchema } from './schemas/bot.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Bot.name, schema: BotSchema }]),
    JwtModule.register({}),
  ],
  providers: [BotService, BotUpdate],
  exports: [BotService],
})
export class BotModule {}
