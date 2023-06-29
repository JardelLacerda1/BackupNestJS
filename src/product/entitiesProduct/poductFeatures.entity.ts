import {  
    Column,
     Entity, 
     PrimaryColumn,
     PrimaryGeneratedColumn
    } from 'typeorm';

@Entity({name: "product_features"})
export class ProductFeature {

    @PrimaryGeneratedColumn('uuid')
    id:string;
    
    @Column({name:"name", length:100, nullable:false})
    name: string;

    @Column({name:"description", length:100, nullable:false})
    description: string;
}