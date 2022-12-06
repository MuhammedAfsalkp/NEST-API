import { Injectable } from '@nestjs/common';
import Amplify from '@aws-amplify/core';
import * as gen from './generated';


@Injectable()
export class AppSyncService {
  private config;

  constructor( ) {}



  async sendMessage() {
    try{
   const channel = 'robots';
   const message ='test';
    // this.config ={
    //     "aws_appsync_graphqlEndpoint":
    //     "https://b3b5fillmrg7dizharvouflrve.appsync-api.us-east-1.amazonaws.com/graphql",
    //     "aws_appsync_region": "us-east-1",
    //     "aws_appsync_authenticationType": "API_KEY",
    //     "aws_appsync_apiKey": "da2-vfefx4wggvhifaygigzointtwu"
    //   };
      Amplify.configure({
        "aws_appsync_graphqlEndpoint":
          "https://kushg3hatfdrbm3zbppx7xnnfm.appsync-api.me-south-1.amazonaws.com/graphql",
        "aws_appsync_region": "me-south-1",
        "aws_appsync_authenticationType": "API_KEY",
        "aws_appsync_apiKey": "da2-yznpaua6fbeehjzvu7dcm6xroe"
      });
    // Amplify.configure(this.config);

   
   await gen.publish(channel, JSON.stringify(message));
    } catch (e){
      console.log(e)
    }
    
  }
}
