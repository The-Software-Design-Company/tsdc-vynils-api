import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Album } from './album/album.entity';
import { Comment } from './comment/comment.entity';
import { Prize } from './prize/prize.entity';
import { Track } from './track/track.entity';
import { CollectorAlbum } from './collectoralbum/collectoralbum.entity';
import { Band } from './band/band.entity';
import { Collector } from './collector/collector.entity';
import { Musician } from './musician/musician.entity';
import { Performer } from './performer/performer.entity';
import { PerformerPrize } from './performerprize/performerprize.entity';

import { RecordLabelModule } from './recordlabel/recordlabel.module';
import { PrizeModule } from './prize/prize.module';
import { TrackModule } from './track/track.module';
import { CollectorModule } from './collector/collector.module';
import { PerformerModule } from './performer/performer.module';
import { BandModule } from './band/band.module';
import { MusicianModule } from './musician/musician.module';
import { AlbumModule } from './album/album.module';
import { GenreModule } from './genre/genre.module';
import { CommentModule } from './comment/comment.module';
import { CollectorAlbumModule } from './collectoralbum/collectoralbum.module';
import { AlbumstatusModule } from './albumstatus/albumstatus.module';
import { PerformerprizeModule } from './performerprize/performerprize.module';
import { BandmusicianModule } from './bandmusician/bandmusician.module';
import { MusicianAlbumModule } from './musicianalbum/musicianalbum.module';
import { BandAlbumModule } from './bandalbum/bandalbum.module';
import { CollectorPerformerModule } from './collectorperformer/collectorperformer.module';
import { AlbumBandModule } from './albumband/albumband.module';
import { AlbumMusicianModule } from './albummusician/albummusician.module';
import { HealthModule } from './health/health.module';

const connectionConfig:any = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    Album,
    CollectorAlbum,
    Band,
    Collector,
    Comment,
    Musician,
    Performer,
    PerformerPrize,
    Prize,
    Track,
  ],
  dropSchema: process.env.DEBUG === "true",
  synchronize: true,
  keepConnectionAlive: true,
  migrations: [__dirname + '/migration/**/*{.ts,.js}'],
  migrationsRun: false,
};

const sslAllowed = process.env.DB_SSL_OPTION == "true"

if (sslAllowed) {
  connectionConfig.ssl = sslAllowed;
  connectionConfig.extra = {
    ssl: {
      rejectUnauthorized: !sslAllowed,
    },
  };
}

@Module({
  imports: [
    TypeOrmModule.forRoot(connectionConfig),
    RecordLabelModule,
    PrizeModule,
    TrackModule,
    CollectorModule,
    PerformerModule,
    BandModule,
    MusicianModule,
    AlbumModule,
    GenreModule,
    CommentModule,
    CollectorAlbumModule,
    AlbumstatusModule,
    PerformerprizeModule,
    BandmusicianModule,
    MusicianAlbumModule,
    BandAlbumModule,
    CollectorPerformerModule,
    AlbumBandModule,
    AlbumMusicianModule,
    HealthModule,
  ],
})
export class AppModule {}
