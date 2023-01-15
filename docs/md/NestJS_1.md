# Upload files using multipart with Fastify and NestJS

Hi guys, working on a very busy day with NestJS. The best part of this Node framework is its predefined architecture and ease of use. You can create Apis with minimal effort. NestJS supports Express by default but we can go for the Fastify as well.

From the official site you can read
[***Fastify\***](https://github.com/fastify/fastify) ***provides a good alternative framework for Nest because it solves design issues in a similar manner to Express. However, fastify is much faster than Express, achieving almost two times better benchmarks results. A fair question is why does Nest use Express as the default HTTP provider? The reason is that Express is widely-used, well-known, and has an enormous set of compatible middleware, which is available to Nest users out-of-the-box.\***

We have plenty of library support for express but the case is not similar for Fastify. I found many developers searching for the file upload with Fastify adapter in NestJS and here is the solution.

We will use [**“fastify-multipart”**](https://github.com/fastify/fastify-multipart) a Fastify library to handle multipart requests in NestJS. I am assuming that you all have your project setup done with Fastify adapter, If not follow the instructions in the official NestJS [link](https://docs.nestjs.com/techniques/performance).

First install the multipart package from the repository.



```
npm i fastify-multipart
```



Create a new folder “uploads” in your project folder. Your uploaded files will be stored in it.

Open main.ts and import “fastify-multipart” package and register it to your app instance. Your main.ts will look like this

```
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import fmp = require('fastify-multipart');
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.register(fmp);
  app.enableCors();
  await app.listen(parseInt(process.env.PORT) || 3000, '0.0.0.0');
}
bootstrap();
```

[^main.ts]: 



Now we can use the package. Go to your controller.ts, import fastify and write a post request route with an upload function.

Here I have the TasksController as an example

```
import {
  Req,
  Res,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import fastify = require('fastify');

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}
  @Post('/uploadFile')
  async uploadFile(@Req() req: fastify.FastifyRequest, @Res() res: fastify.FastifyReply<any>): Promise<any> {
    return await this.taskService.uploadFile(req,res)
  }
}
```

[^tasks.controller.ts]: 



TasksService is the service class which is handling the api computations.

Create tasks.service.ts , import required modules and write the below functions to handle the request. Your service class will look like this.

```
import {
  HttpException, 
  BadRequestException, 
} from '@nestjs/common';
import { AppResponseDto } from 'src/Utilities/app-response.dto';

//Below modules are needed for file processing
import * as fs from 'fs';
import stream = require('stream');
import fastify = require('fastify')
import * as util from 'util';

@Injectable()
export class TasksService {
// upload file
  async uploadFile(req: fastify.FastifyRequest, res: fastify.FastifyReply<any>): Promise<any> {
    //Check request is multipart
    if (!req.isMultipart()) {
      res.send(new BadRequestException(
        new AppResponseDto(400, undefined, 'Request is not multipart'),
      ))
      return 
    }
    const mp = await req.multipart(this.handler, onEnd);
    // for key value pairs in request
    mp.on('field', function(key: any, value: any) {
      console.log('form-data', key, value);
    });
    // Uploading finished
    async function onEnd(err: any) {
      if (err) {
        res.send(new HttpException('Internal server error', 500))
        return 
      }
      res.code(200).send(new AppResponseDto(200, undefined, 'Data uploaded successfully'))
    }
  }
  //Save files in directory
  async handler(field: string, file: any, filename: string, encoding: string, mimetype: string): Promise<void> {
    const pipeline = util.promisify(stream.pipeline);
    const writeStream = fs.createWriteStream(`uploads/${filename}`); //File path
    try {
      await pipeline(file, writeStream);
    } catch (err) {
      console.error('Pipeline failed', err);
    }
  }
}

```

[^tasks.service.ts]: 



Now lets dive into the above code

***uploadFile\*** function is handling the multipart request(**FastifyRequest**)

***onEnd\*** function will be called when the uploading process will complete.

***mp\*** is the busboy instance which the **“fastify-multipart”** uses under the hood.

***mp.on(‘field’, function(key: any, value: any)\*** will provide the other parameters in multipart request.

***handler\*** function is saving the file using streams and pipeline into the uploads folder.

Above implementation can handle both single and multiple file upload.

AppResponseDto is a simple response representation. You can send your own data.

```
export class AppResponseDto {
  constructor(
    public statusCode: Number,
    public data: any = undefined,
    public message: string = 'Success',
  ) {}
}
```

[^app-response.dto.ts]: 



Lets hit the api using postman.

![img](https://miro.medium.com/max/630/1*XZv6UxoosGUHl9cwwx75ww.png)

On successful upload , your uploaded files will be available in the uploads folder.

![img](https://miro.medium.com/max/524/1*ibYGy0grOWtA05esvo_50g.png)

Thus, we are done with file uploading using Fastify and NestJS.
To provide multipart request restrictions like file size, number of fields etc , visit the [“fastify-multipart”](https://github.com/fastify/fastify-multipart) documentation.

Keep practicing guys👍
I am ready to meet you on comments below.