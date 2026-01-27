import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Produto } from '../../produto/entities/produto.entity';

@Entity({ name: 'tb_categorias' })
export class Categoria {

  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column()
  nome: string;

  @IsNotEmpty()
  @Column({ nullable: true })
  descricao: string;

  @OneToMany(() => Produto, produto => produto.categoria)
  produtos: Produto[];

  @UpdateDateColumn()
  data: Date;
}
