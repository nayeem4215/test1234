import axios from "axios";
let token = 
const BikeClient = axios.create({
  baseURL: "http://localhost:8000/api/v1/bikes",
  headers: {
    Accept: "application/json",
    //'Authorization': 'token <your-token-here> -- https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
  },
});

const config = {
  headers: {
    // set any headers you need, such as Content-Type
    "Content-Type": "application/json",
  },
  //   withCredentials: true, // set withCredentials to true to send cookies
};

export function postBike(bike) {
  axios
    .post("http://localhost:8000/api/v1/bikes", bike, config)
    .then((response) => {
      // handle successful response
    })
    .catch((error) => {
      // handle error
    });
}

export function getBikes(setState) {
  axios
    .get("http://localhost:8000/api/v1/bikes/", config)
    .then((response) => {
      // handle successful response
      setState(response.data);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
}

export function getBikeById(id, setState) {
  axios
    .get("http://localhost:8000/api/v1/bikes/" + id, config)
    .then((response) => {
      // handle successful response
      setState(response.data);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
}

export function getNewlyArrivedBikes(setState) {
  BikeClient.get("/new-arrival")
    .then((res) => {
      setState(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getPopularBikes(setState) {
  BikeClient.get("/popular")
    .then((res) => {
      setState(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getBrandedBikes(brand, setState) {
  BikeClient.get(`?brand=${brand}`)
    .then((res) => {
      setState(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function recommendedBikes(id, setState) {
  BikeClient.get(`recommendation/${id}`)
    .then((res) => {
      setState(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
