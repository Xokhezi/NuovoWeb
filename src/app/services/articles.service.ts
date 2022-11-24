import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
articles:any;
  constructor() {
    this.articles = [
      {id:1,title:'Power of Sun',img:'assets/sun.jpg',summary:'erasararararararararrsa asrar arsa rar uari gairg iagai gsaig iagrs awigrsajgiawrjkasgiawrkasasg  a záoawáooas osah oáa oo ao',text:'Where does it come from Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'},
      {id:2,title:'Relax take EAZ',img:'assets/relax.jpg',summary:'erasararararararararrsa asrar arsa rar uari gairg iagai gsaig iagrs awigrsajgiawrjkasgiawrkasasg  a záoawáooas osah oáa oo ao',text:'hdakushdahgdaludhgaldsgdag ga sgdazj gd agzdsagdsalzkdgazkdsgsakdzgasd'},
      {id:3,title:'Lets Shine',img:'assets/smile.jfif',summary:'erasararararararararrsa asrar arsa rar uari gairg iagai gsaig iagrs awigrsajgiawrjkasgiawrkasasg  a záoawáooas osah oáa oo ao',text:'hdakushdahgdaludhgaldsgdag ga sgdazj gd agzdsagdsalzkdgazkdsgsakdzgasd'}
    ]
   }
  
  getTech()
  {    
    return this.articles;
  }
  getTechArticle(id:number)
  {
    let article = this.articles.find((obj: { id: any; })=>obj.id===id)
    return article;
  }
}
