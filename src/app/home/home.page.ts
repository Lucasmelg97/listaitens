
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { List } from '../models/list.model';
import { Task } from '../models/task.model';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {
  [x: string]: any;
  public list: List;
  
  constructor( 
     private alertCtrl:AlertController
  ) {
    /* const tasks:Task[]=[];
    tasks.push(new Task ('Passear com cão', "14/01/2021", false));
    tasks.push(new Task ('Passear com gato', "14/01/2021",false));
    tasks.push(new Task ('Dormir', "14/01/2021",false));
    
    this.list=new List('Lista de Itens', tasks);
    this.save(this.list); */
    this.list=this.get();

  }
  async showAddTask() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Adicionar novo item',
      inputs: [
        {
          name: 'task',
          type: 'text',
          placeholder: 'Qual o nome do item?'
        },
        {
          name: 'data',
          
          type: 'date',
          placeholder: 'Qual a data do item?'
        }
      
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          
        }, {
          text: 'Adicionar',
          handler: (data) => {
           this.list.tasks.push(new Task(data.task,data.data,false));
          
          }
        }
      ]
    });

    await alert.present();
  }
 

 
  addTask(task: Task){ 
    this.save(this.list);

  }
  removeTask(task:Task){

    const index=this.list.tasks.indexOf(task);
    this.list.tasks.splice(index,1);
    this.save(this.list);

  }
  duplicacao(task: Task)
  {
    if(task.marcacao){
    
    console.log(task);
    this.list.tasks.push(new Task(task.nome_item,task.data_item,task.marcacao));
     task.marcacao=false;
    }
    else 
    task.marcacao=true;
    
    this.save(this.list);
    /* if(task.marcacao)
    task.marcacao=false;

    else 
    task.marcacao=true;
    
    this.save(this.list); */
    
  }
  
   //save and get

   public save(list: List)
   {
     const data=JSON.stringify(list);
     localStorage.setItem('list', data);

   }
   public get():List{
     const data=localStorage.getItem('list');
     if(data)
     return JSON.parse(data);
     else
     return null;

   }

   public gettask():Task{
    const datatask=localStorage.getTask_item('task');
    if(datatask)
    return JSON.parse(datatask);
    else
    return null;

  }


}
