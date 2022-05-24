// const chalk = require('chalk');
import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro) {
    throw new Error(chalk.red(erro));
}

async function pegaArquivo(caminhoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoArquivo, encoding)
        console.log(chalk.green(texto))
    }
    catch (erro) {
        trataErro(erro);

    }
}

//function pegaArquivo(caminhoArquivo) {
//    const encoding = 'utf-8';
//    fs.promises.readFile(caminhoArquivo, encoding).then((texto) => console.log(chalk.green(texto))).catch((erro) => trataErro(erro));
//}


// function pegaArquivo(caminhoArquivo) {
//    const encoding = 'utf-8';
//    fs.readFile(caminhoArquivo, encoding, (erro, texto) => {
//        if (erro) {
//           trataErro(erro);
//        }
//        console.log(chalk.green(texto));
//   })
//}

pegaArquivo('./arquivos/texto1.md');