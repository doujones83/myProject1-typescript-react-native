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

export interface Project1State {
    isLoading: boolean
    data: Project1[],
    favoriteProject1: undefined
  }