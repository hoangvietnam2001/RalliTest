export default function( text: string){
    if(text.length > 25){
        return '...'+text.slice(-25) 
    }
    return text;
}
