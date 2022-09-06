import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData(){
    //Pega o nome dos arquivos na pasta /posts na raiz
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        //Remove o ponto .md do arquivo para pegar o ID
        const id = fileName.replace(/\.md$/, '');

        //Ler a marcação como texto
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Usando o gray-matter para analisar os metadados da seção
        const matterResult = matter(fileContents);

        //Combinado dados com o ID
        return{
            id,
            ...matterResult.data
        };
    });

    //Classificar os posts por data
    return allPostsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
          return 1;
        } else if (a > b) {
          return -1;
        } else {
          return 0;
        }
      });

}