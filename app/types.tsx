//Screens
export type RootDrawerParamList = { //This is a type because navigation docs require it so
    Home: undefined;
    Profile: { userId: string };
    Settings: undefined;
    Logout: undefined;
    Calendar: undefined;
};

export interface ProfileData {
    name: string; //name of user
    user_id: number;
    services: Service[]; // Array of services offered
}
  
export interface Service {
    id: number;
    name: string;
    type: string;
    tasks: Task[]; // Array of specific tasks offered by the service
    image: string; // Path (or URL) to the service provider's image
    pay_freq: number; // Frequency of payment (e.g., 1 for weekly)
}
  
export interface Task {
    [key: string]: number; // Dynamic task names mapped to completion percentages (0-100)
}