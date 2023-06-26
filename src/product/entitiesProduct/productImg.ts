import {  
    Column,
     Entity 
    } from 'typeorm';

@Entity({name:"product_img"})

export class ProductImg {
    @Column({ name:"url", length:100, nullable:false })
    url: string;

    @Column({name:"description", length:100, nullable:false})
    description: string;
}