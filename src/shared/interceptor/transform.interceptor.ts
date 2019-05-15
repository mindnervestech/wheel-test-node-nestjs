import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

// Interceptor for success responses in case of POST, DELETE, PUT, GET
@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const req = context.switchToHttp().getRequest();
    const method = req.method;
    if (method == 'POST') {
      return next.handle().pipe(
        map(data => ({
          status: HttpStatus.CREATED,
          message: 'Created Successfully',
          data,
        })),
      );
    } else if (method == 'GET') {
      return next.handle().pipe(map(data => ({ status: HttpStatus.OK, data })));
    } else if (method == 'PUT') {
      return next.handle().pipe(
        map(data => ({
          status: HttpStatus.OK,
          message: 'Updated Successfully',
          data,
        })),
      );
    } else if (method == 'DELETE') {
      return next.handle().pipe(
        map(data => ({
          status: HttpStatus.OK,
          message: 'Deleted Successfully',
          data,
        })),
      );
    }
  }
}
