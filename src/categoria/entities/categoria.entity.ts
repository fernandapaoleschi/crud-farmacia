import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Produto } from '../../produto/entities/produto.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_categorias' })
export class Categoria {

  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "Medicamentos" })
  @IsNotEmpty()
  @Column()
  nome: string;

  @ApiProperty({ example: "Categoria de remédios e produtos farmacêuticos" })
  @IsNotEmpty()
  @Column({ nullable: true })
  descricao: string;

  @ApiProperty({ type: () => [Produto] })
  @OneToMany(() => Produto, produto => produto.categoria)
  produtos: Produto[];

  @ApiProperty()
  @UpdateDateColumn()
  data: Date;
}