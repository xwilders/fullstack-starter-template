import mongoose, { Schema } from 'mongoose';
import User, { IUser } from '@backend/db/schemas';
import { TRPCError } from '@trpc/server';
import { SignInDto, SignUpDto } from './auth.dtos';
import { sign } from 'jsonwebtoken';
import { authConfig } from '@backend/configs/auth.config';
import { hash, compare } from 'bcryptjs';
import { Context } from '@backend/server/context';

type UserResponse = Pick<
  IUser,
  '_id' | 'email' | 'createdAt' | 'updatedAt' | 'role'
>;
type SignUpResult = UserResponse & { accessToken: string };

export const signUp = async (input: SignUpDto): Promise<UserResponse> => {
  const bcryptHash = await hash(input.password, 10);

  const user = new User({
    email: input.email,
    password: bcryptHash,
    role: 'user',
  });

  const error = new TRPCError({
    message: 'User already exists',
    code: 'UNAUTHORIZED',
  });

  await user.save().catch((e) => {
    throw error;
  });

  return {
    _id: user._id,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    role: user.role,
  };
};

export const signIn = async (input: SignInDto): Promise<SignUpResult> => {
  const user = await User.findOne({ email: input.email });

  const error = new TRPCError({
    message: 'Incorrect email or password',
    code: 'UNAUTHORIZED',
  });

  if (!user) {
    throw error;
  }

  const result = await compare(input.password, user.password);

  if (!result) {
    throw error;
  }

  const token = sign(
    {
      id: user._id,
      roles: user.role,
    },
    authConfig.secretKey,
    { expiresIn: authConfig.jwtExpiresIn }
  );

  return {
    _id: user._id,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    role: user.role,
    accessToken: token,
  };
};
