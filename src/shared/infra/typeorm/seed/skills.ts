import createConnection from '../index';

async function create() {
  const connection = await createConnection();

  await connection.query(
    `INSERT INTO SKILLS(name)
      VALUES
        ('Git'),
        ('React'),
        ('PHP'),
        ('NodeJS'),
        ('DevOps'),
        ('Banco de Dados'),
        ('TypeScript')
    `,
  );

  await connection.close();
}

create().then(() => console.log('Skills created!'));
