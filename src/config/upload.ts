import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp'); // ('../../tmp')

export default {
  directory: tmpFolder,

  storage: multer.diskStorage({
    destination: tmpFolder, // caminho que vai mandar as imagens
    filename(request, file, callback) {
      // função para trocar o nome e evitar que tenham nomes repetidos
      const fileHash = crypto.randomBytes(10).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
