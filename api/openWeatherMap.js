import axios1 from 'axios';

const OPEN_URL = 'http://samples.openweathermap.org/data/2.5/weather?appid=f01ab9183d74ff219384d24f1f1727e0';

export function getTemp(location){
    let encodedLocation = encodeURIComponent(location);
    let request_url = `${OPEN_URL}&q=${encodedLocation}`;
    console.log(request_url);
    axios1.get(request_url).then(function (res) {
        if ( res.data.cod && res.data.message ){
            throw new Error (res.data.message);
        }
        else{
            return res.data.main.temp;
        }
    }, function (res) {
        throw new Error ( res.data.message);
    });

}