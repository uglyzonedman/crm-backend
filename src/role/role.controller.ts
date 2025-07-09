import { Controller, Get } from '@nestjs/common';
import { RoleService } from './role.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('role')
@ApiTags('Роли')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get('get-all')
  @ApiOperation({ summary: 'Получить все роли' })
  @ApiResponse({
    status: 200,
    description: 'Список ролей успешно получен',
  })
  @ApiResponse({
    status: 500,
    description: 'Ошибка сервера при получении ролей',
  })
  async getAll() {
    return this.roleService.getAllRoles();
  }
}
