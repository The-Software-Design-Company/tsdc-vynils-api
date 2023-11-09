import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from "../interceptors/interceptor";
import { HttpStatus } from '@nestjs/common';
const { version, name } = require('../../package.json');
const os = require("os");

@Controller('health')
@UseInterceptors(BusinessErrorsInterceptor)
export class HealthController {
    @Get()
    async find() {
        return {
            name, 
            version,
            environment: process.env.NODE_ENV,
            status: HttpStatus.OK,
            uptime:  (os.uptime() / 3600)
        };
    }



}