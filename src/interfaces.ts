export interface Project1 {
    id: string,
    firstName:  string,
    lastName: string,
    fullName:  string,
    imageUrl:  string,
    bio:  string,
    email: string,
    phone: string,
    location:  string,
}

export interface AuthState {
  isLogged: boolean
}

export interface Project1State {
    isLoading: boolean
    data: Project1[],
    favoriteProject1: Project1 | undefined
  }

  export interface UserLocation {
    coords: {
      accuracy: number
      altitude: number
      altitudeAccuracy: number
      heading: number
      latitude: number
      longitude: number
      speed: number
    }
    timestamp: number
  }