import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from 'typeorm';import { isNotEmpty } from 'class-validator';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'tb_categorias' })
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

  @IsNotEmpty()
  @Column(
  )
  nome: string;

  @IsNotEmpty()
  @Column({ nullable: true })
  descricao: string;

  @UpdateDateColumn()
  data: Date;

}