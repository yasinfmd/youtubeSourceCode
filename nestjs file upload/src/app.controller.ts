import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';

@Controller()
export class AppController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    console.log(file.originalname);
  }

  @Post('uploads')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
  }

  @Post('uploadsDifferentKey')
  @UseInterceptors(
    FileFieldsInterceptor([
      {
        name: 'profile_picture',
        maxCount: 1,
      },
      {
        name: 'bg_picture',
        maxCount: 1,
      },
    ]),
  )
  uploadFilesDifferentKey(
    @UploadedFiles()
    files: {
      profile_picture?: Express.Multer.File;
      bg_picture?: Express.Multer.File;
    },
  ) {
    console.log(files);
  }
}
