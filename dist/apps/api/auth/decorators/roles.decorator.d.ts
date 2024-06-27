import { ROLES } from '../../constants/roles';
export declare const Roles: (...roles: Array<keyof typeof ROLES>) => import("@nestjs/common").CustomDecorator<string>;
