import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService{

    user:any[]=[{
        
            "email" : "kaushiksivaram11@gmail.com",
            "userName" : "kaushik123"
        },
        {
            "email" : "shivani12@gmail.com",
            "userName" : "kaushik456"
        },
        {
            "email" : "nilesh13@gmail.com",
            "userName":"kaushik789"
        }
    
    ];
}