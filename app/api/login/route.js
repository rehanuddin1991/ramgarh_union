import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });

  return new Response(JSON.stringify({ success: true, user }), { status: 200 });
}
