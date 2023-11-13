import OpenAI from 'openai';
import { OPENAI_KEY } from './constant';

const openai = new OpenAI({
  apiKey: OPENAI_KEY, // defaults to process.env["OPENAI_API_KEY"]
  
  //if we set dangerouslyAllowBrowser flag to true then openai allow us to make call from browser also
  dangerouslyAllowBrowser: true

});


export default openai;