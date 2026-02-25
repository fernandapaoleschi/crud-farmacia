import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity({ name: 'tb_produtos' })
export class Produto {

  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "Dipirona 500mg" })
  @IsNotEmpty()
  @Column()
  nome: string;

  @ApiProperty({ example: 12.50 })
  @IsNotEmpty()
  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;

  @ApiProperty({ example: 100 })
  @IsNotEmpty()
  @Column()
  estoque: number;

  @ApiProperty({ type: () => Categoria })
  @ManyToOne(() => Categoria)
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categoria;

  @ApiProperty()
  @UpdateDateColumn()
  data: Date;
}