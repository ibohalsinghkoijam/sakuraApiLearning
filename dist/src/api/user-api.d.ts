/// <reference types="express" />
import { SakuraApi } from '@sakuraapi/core';
import { NextFunction, Request, Response } from 'express';
export { SakuraApi };
export declare class UserApi extends {
    sapi?: SakuraApi;
    sapiConfig?: any;
} {
    GetAllUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    GetUserById(req: Request, res: Response, next: NextFunction): Promise<void>;
    SaveUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    UpdateUserById(req: Request, res: Response, next: NextFunction): Promise<void>;
    DeleteUserById(req: Request, res: Response, next: NextFunction): Promise<void>;
}
