import { PrismaService } from '../prisma.service';

const prisma = new PrismaService();

const createRoles = async () => {
  try {
    const roles = [
      {
        name: 'freelancer',
        permissions: [],
        label: 'Фрилансер',
      },
      {
        name: 'customer',
        permissions: [],
        label: 'Заказчик',
      },
      {
        name: 'admin',
        permissions: [],
        label: 'Администратор',
      },
    ];

    const result = await prisma.role.createMany({
      data: roles,
      skipDuplicates: true,
    });

    console.log('Роли успешно созданы:', result);
  } catch (error) {
    console.error('Ошибка при создании ролей:', error);
  } finally {
    await prisma.$disconnect();
  }
};

createRoles();
