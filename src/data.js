
export default function GetInfos(){
   
    fetch("https://cdn.jsdelivr.net/gh/emjwey/react-portfolio/public/data.json")
        .then(res => res.json())
        .then(data =>  {
        return data
    });
}
 
    
 