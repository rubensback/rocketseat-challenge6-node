import { getCustomRepository } from 'typeorm';
// import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    // TODO
    const transactionRepository = getCustomRepository(TransactionsRepository);

    const deletedTransaction = await transactionRepository.delete(id);
    console.log(deletedTransaction);
  }
}

export default DeleteTransactionService;
