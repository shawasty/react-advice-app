import axios from 'axios'

export async function randomAdvice() {
    const response = await axios.get ('https://api.adviceslip.com/advice')
    return response
}
let value ='money'

export async function searchAdvice(value){
    try{
    const searchResponse = await axios.get(
      `https://api.adviceslip.com/advice/search/${value}`
    );
    // console.log('new', searchResponse.data.slips)
    const result = searchResponse.data.slips
    return result;
    }catch (error) {
        console.log(error);
        }
  }
// searchAdvice()