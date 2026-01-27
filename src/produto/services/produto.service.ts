import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Produto } from '../entities/produto.entity';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Injectable()
export class ProdutoService {

  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,

    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async findAll(): Promise<Produto[]> {
    return this.produtoRepository.find({
      relations: {
        categoria: true
      }
    });
  }

  async findById(id: number): Promise<Produto> {

    const produto = await this.produtoRepository.findOne({
      where: { id },
      relations: {
        categoria: true
      }
    });

    if (!produto)
      throw new HttpException(
        'Produto não encontrado',
        HttpStatus.NOT_FOUND
      );

    return produto;
  }

  async findAllByNome(nome: string): Promise<Produto[]> {
    return this.produtoRepository.find({
      where: {
        nome: ILike(`%${nome}%`)
      },
      relations: {
        categoria: true
      }
    });
  }

  async create(produto: Produto): Promise<Produto> {

    if (!produto.categoria || !produto.categoria.id)
      throw new HttpException(
        'Categoria é obrigatória',
        HttpStatus.BAD_REQUEST
      );

    const categoria = await this.categoriaRepository.findOne({
      where: { id: produto.categoria.id }
    });

    if (!categoria)
      throw new HttpException(
        'Categoria não encontrada',
        HttpStatus.BAD_REQUEST
      );

    produto.categoria = categoria;

    return this.produtoRepository.save(produto);
  }

  async update(produto: Produto): Promise<Produto> {

    await this.findById(produto.id);

    if (produto.categoria && produto.categoria.id) {
      const categoria = await this.categoriaRepository.findOne({
        where: { id: produto.categoria.id }
      });

      if (!categoria)
        throw new HttpException(
          'Categoria não encontrada',
          HttpStatus.BAD_REQUEST
        );

      produto.categoria = categoria;
    }

    return this.produtoRepository.save(produto);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.produtoRepository.delete(id);
  }
}
